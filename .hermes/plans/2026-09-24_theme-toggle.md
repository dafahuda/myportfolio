# Rencana: Toggle Mode Gelap/Terang (Theme Toggle)

Tanggal: 2026-09-24 · Disetujui pemilik via dialog (default ikut OS, gelap hangat,
thumbnail ikut disesuaikan gelap).

## Keputusan desain

- **Gelap hangat, bukan gelap dingin.** Near-black `#1a1815` (cokelat hangat),
  teks cream `#f2f1ec`, terracotta tetap aksen. Identitas editorial dipertahankan.
- **Default mengikuti OS** (`prefers-color-scheme`), bisa ditimpa pengguna,
  pilihan tersimpan di `localStorage("theme")`.
- Tanpa kedipan (FOUC): skrip kecil sebelum render di `index.html`.

## Palet

| Token | Terang | Gelap |
|---|---|---|
| --color-bg | #f2f1ec | #1a1815 |
| --color-surface | #ffffff | #242019 |
| --color-ink | #0b0b0b | #f2f1ec |
| --color-muted | #6b6b66 | #a39e93 |
| --color-line | #d9d7cf | #3b362e |
| --color-accent | #c64f2e | #d4643f (sedikit lebih terang agar tahan di gelap) |
| --color-footer-bg | #0b0b0b | #141210 |
| --color-footer-fg | #f2f1ec | #f2f1ec |

## Langkah

1. `index.css`: `@custom-variant dark`, override token pada `html.dark`,
   token footer, transisi warna halus (hormati reduced-motion).
2. `index.html`: skrip anti-FOUC (baca localStorage → OS → set class).
3. `hooks/useTheme.js`: state + toggle + persist + sinkron antar tab.
4. `components/ThemeToggle.jsx`: tombol sun/moon Tabler (bergaris — ikon aksi),
   44px tap target, `aria-pressed`/label dinamis.
5. `Navbar.jsx`: pasang toggle (baris desktop + menu mobile).
6. `Footer.jsx`: ganti ke token footer (di gelap, footer tetap gelap pekat —
   bukan blok cream menyolok).
7. `BackToTop.jsx`: logika warna ikut token (di gelap: tombol cream, panah gelap —
   sesuai referensi collectiveminds).
8. Bocor warna langsung: `HeroSection` fadeOutColor, `LogoLoop` fade var.
9. Thumbnail: simpeg.svg dibuat varian gelap (SVG milik sendiri, warna diadaptasi);
   ProjectCard mendukung sumber ganda (`dark:hidden` / `dark:block`).
   Thumbnail raster diputuskan setelah inspeksi visual.
10. Build + lint + Delivery Gate ANTISLOP + deploy manual (backup webroot dulu)
    + commit + push + verifikasi live.

## Delivery Gate (diisi setelah implementasi)

Lihat bagian bawah — PASS/FAIL 4 blok.
