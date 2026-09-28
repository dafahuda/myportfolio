# Plan: Adopsi pola Remote Collective (eksekusi bertahap)

Referensi audit: collectiveminds.com.sg (Remote Collective) vs portfolio.dhr.my.id.
Eksekusi SATU PER SATU sesuai permintaan owner. Setiap item: patch → build → deploy manual → commit.

## Item 1 — Skala judul seksi editorial
- `.section-title` di `src/index.css`: naikkan `clamp(2.25rem, 5vw, 3.75rem)` → `clamp(2.75rem, 6.5vw, 5.25rem)`.
- Tambah `line-height: 1` agar konsisten dengan H1 (font condensed Big Shoulders Display).
- Verifikasi: tidak ada overflow di mobile 390px, tidak menabrak konten.

## Item 2 — Hover link-wipe nav (terracotta)
- Nav link desktop: blok `--color-accent` slide-up mengisi link saat hover, teks berubah cream.
- Implementasi CSS murni (span posisi absolut), tanpa JS.
- Kontras teks saat wipe aktif: putih di atas terracotta (AA verified di palette).

## Item 3 — Baris hairline Pengalaman + angka tahun display
- Daftar Pengalaman: border-bottom 1px `--color-line`, tahun besar font display, geser saat hover.

## Item 4 — Label monospace uppercase (opsional, tanya owner dulu)
- Nav + meta label pakai font mono 11px tracking 0.16em uppercase.

## Item 5 — Footer CTA display raksasa (opsional, tanya owner dulu)

## Larangan
- Tidak menambah seksi testimonial tanpa kutipan asli (AGENTS.md).
- Aksen tetap terracotta, tidak menambah warna ketiga.
- Animasi hanya fade/translate kecil, hormati `prefers-reduced-motion`.
