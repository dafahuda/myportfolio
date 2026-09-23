# Rencana Redesign Profesional — Portfolio Dafa Huda Rifa'i

> **Untuk AI penerus:** dokumen ini adalah sumber kebenaran. Jangan ganti arah desain, jangan
> tambah konten fiktif, patuhi cara kerja user di bagian 3.

**Tujuan:** portfolio untuk lamaran kerja full-time (bukan freelance). Tetap terasa portfolio,
bukan CV panjang. Cepat, profesional, kredibel.

**Surface:** *Decide/Learn* — satu ide per seksi, kiri-rata editorial.

**Status:** Batch 0 selesai. Branch `feat/professional-redesign` aktif. CV tersimpan di
`public/assets/cv/Cv_ATS_Dafa_Huda_Rifai.pdf` (182KB, valid). Source code belum diubah.

---

## 1. Fakta sistem (terverifikasi)

| Item | Nilai |
|---|---|
| Live | https://portfolio.dhr.my.id (nginx 1.24.0, HTTP 200) |
| nginx | `/etc/nginx/sites-enabled/portfolio.dhr.my.id` → serve dari `/var/www/portfolio` |
| Deploy | Manual: `npm run build && sudo rsync -a --delete dist/ /var/www/portfolio/`. Auto-deploy (webhook + GitHub Actions) dihapus 24 Sep 2026 |
| Repo | `/home/ubuntu/portfolio`, remote `github.com/dafahuda/myportfolio` |
| Branch aktif | `feat/professional-redesign` (base `main` @ 8fcd110) |
| Stack tetap | React 19.1, Vite 7.1, Tailwind 4, `@iconify/react` |
| GSAP | tetap terpasang, tapi **hapus penggunaan ScrollSmoother** |
| Font baru | Big Shoulders Display 800 + Instrument Sans 400/500 (Google Fonts) |
| CV | `public/assets/cv/Cv_ATS_Dafa_Huda_Rifai.pdf` (sudah diunduh dari Drive) |

## 2. Backup & rollback

```
branch git    : backup/professional-redesign-20260921164610
webroot copy  : /home/ubuntu/portfolio-webroot-backup-20260921164610 (980K)
```

Rollback: `git checkout backup/... && sudo rsync -a --delete /home/ubuntu/portfolio-webroot-backup-20260921164610/ /var/www/portfolio/ && sudo chown -R www-data:www-data /var/www/portfolio`.

## 3. Cara kerja yang disetujui user

- Bahasa Indonesia, gaya padat, tanpa opsi (pilih satu solusi).
- Safe-incremental: backup → eksekusi → verifikasi → lapor.
- Item aman dulu; item berisiko (deploy.sh, nginx, PM2, hapus data) ditanya terpisah.
- User hanya konfirmasi pada perubahan arah utama; detail teknis dieksekusi tanpa nanya.

## 4. Keputusan desain — DIKUNCI

### Palet (editorial, cream + terracotta — bukan dark + ungu)
```
--bg:      #F2F1EC   /* cream, background utama */
--surface: #FFFFFF   /* kartu, elevasi ringan */
--ink:     #0B0B0B   /* teks utama & heading */
--muted:   #6B6B66   /* teks sekunder (kontras ≥4.5:1 di bg) */
--line:    #D9D7CF   /* border halus */
--accent:  #C64F2E   /* terracotta — HEMAT: CTA utama, hover link, aksen kecil */
```
User akan meninjau; kalau kurang cocok, siap tukar aksen ke opsi kedua (belum diputus).

### Tipografi
- **Display:** `Big Shoulders Display` weight 800, tracking `-0.01em`, line-height 0.82. Untuk H1 hero + judul seksi.
- **Body:** `Instrument Sans` weight 400/500. Untuk semua teks reguler.
- Google Fonts satu link, `display=swap`, preconnect.
- Hapus Poppins.

### Irama
- Judul seksi kiri-rata + label uppercase kecil di atasnya (bukan tengah).
- Jarak antar seksi `py-24 md:py-32`.
- Kartu: border 1px `--line` + radius 8px + tanpa shadow tebal.
- Motion: fade+8px translate saat masuk viewport, sekali, wajib `prefers-reduced-motion`.

### Framework yang DIPERTAHANKAN
React 19, Vite 7, Tailwind 4, `@iconify/react`, GSAP (tanpa ScrollSmoother).

### Framework/file yang DIBUANG
- ScrollSmoother (impor + penggunaan)
- PreLoader (delay 3 detik)
- TextType (typing animation) — file tetap ada, tapi tidak dipakai
- LogoLoop marquee — diganti grid statis dengan tautan hover

## 5. Audit temuan (ringkas)

**Kredibilitas:** preloader 3 detik, `<title>` emoji, tanpa meta/OG/JSON-LD, `lang="en"` tapi konten ID, favicon path 404, tombol Download CV & View Certificate mati, `dist/` di-commit, statistik About kembar.

**Desain:** semua seksi center + subjudul opacity-50 + kartu seragam ungu; hue tech generik; foto border ungu; icon-topper filler; alt gambar generik; opacity-50 fail WCAG.

**Teknis:** ScrollSmoother rapuh + duplikat, `<button href>`, tab bukan aria, hamburger tanpa aria, `useState` tak terpakai di App.jsx, keyframe disuntik via JS.

**Server:** deploy.sh pakai `rm -rf`, secret di query string, PM2 entry errored menganggur, potensi bentrok dengan GitHub Actions — TUNDA, tanya nanti.

## 6. Konten terverifikasi dari LinkedIn + GitHub

### Experience (baru — seksi baru di antara About & Projects)
1. **Data & Information Management** — Badan Pengembangan dan Pembinaan Bahasa (Bogor). Nov 2025 – Mei 2026 (6 bulan). Bangun dashboard SDM (Google Apps Script + HTML/CSS/JS + Google Sheets), CRUD data pegawai (personal, pendidikan, jabatan, pelatihan), otomasi dokumen via Google Forms + Autocrat.
2. **Web Development — MSIB Batch 3** — Infinite Learning Indonesia (Batam). Sep 2022 – Feb 2023 (5 bulan). Peran berurutan: UI/UX → Frontend Developer → Full Stack Engineer. Program Kampus Merdeka.

### Education
- S1 Ilmu Komputer, Universitas Pakuan (Bogor), 2019–2025, IPK 3.60.

### Sertifikasi (tambah 3 baru, total 8)
Existing: JNA Fundamental/Intermediate, Teknisi Drive Tester, Analisis DT, MS Office.
Tambah: AI Learning Hub Huawei (Okt 2025), MSIB Web Dev Batch 3 (Jan 2023), Maganghub Batch 2 (Mei 2026). Ketiganya tanpa gambar sertifikat lokal — tampilkan sebagai baris teks di seksi Certificates dengan issuer + tanggal (bukan kartu penuh).

### Projects (existing 6 + tambah SIMPEG = 7)
| # | Judul | Repo | Demo | Status |
|---|---|---|---|---|
| 1 | Website Portfolio | `myportfolio` | dhr.my.id | live |
| 2 | Bogor Landslide Risk | `bogor-landslide-risk` | dafahuda.github.io/bogor-landslide-risk | live |
| 3 | Mini Weather Station | — | — | tidak dipublikasi |
| 4 | Fintrack | `Fintrack` | fintrack-ten.vercel.app | live |
| 5 | Freedom | `macro_freedom` | — | arsip 2022 |
| 6 | Gabungin | — | — | tidak dipublikasi |
| 7 | **SIMPEG Dashboard** *(BARU)* | `MY-SIMPEG-APP` (Blade/Laravel) atau `MY-SIMPEG-ASN` (TS) | — | internal Badan Bahasa |

Data.js akan tambah field: `repo` (URL GitHub), `date` (bulan-tahun), `role` (Solo / Tim / Frontend / Full-stack), `status` (`live` / `archived` / `private`).

## 7. Batch eksekusi

### Batch 0 — Persiapan ✅ SELESAI
- [x] Backup git + webroot
- [x] Branch `feat/professional-redesign` dibuat
- [x] CV diunduh ke `public/assets/cv/Cv_ATS_Dafa_Huda_Rifai.pdf` (182KB, PDF v1.4 valid)

### Batch 1 — Fondasi (index.html, index.css, tailwind config, main.jsx cleanup)
1. `index.html`: `lang="id"`, title profesional, meta description ID, canonical, theme-color `#F2F1EC`, OG + Twitter card, JSON-LD Person (dengan `alumniOf` UNPAK, `worksFor` Badan Bahasa, `sameAs` GitHub+LinkedIn+Instagram), fix path favicon jadi `/assets/favicon/...`, ganti Poppins → Big Shoulders + Instrument Sans preload.
2. `src/index.css`: token CSS (palet, radius, spacing), reset body `bg-[--bg] text-[--ink]`, kelas `.section`, `.section-label`, `.card`, `.btn-primary`, `.btn-ghost`, `.reveal`, `@media (prefers-reduced-motion: reduce)`, `html { scroll-behavior: smooth }`.
3. `src/main.jsx`: hapus PreLoader + ScrollSmoother + injeksi style pulse. Ganti fade dengan hook `useReveal` (IntersectionObserver).
4. `src/App.jsx`: hapus `useState` tak terpakai. Tambah `Navbar`, urutan seksi: Hero → About → Experience → Tools → Projects → Certificates → Contact → Footer.
5. `tailwind.config.js`: extend fontFamily dengan display + sans dari CSS var.
6. Buat file `public/robots.txt` + `public/sitemap.xml`.
7. Verifikasi: `npm run build` sukses; `<head>` benar.

### Batch 2 — Navbar & Hero
1. Navbar: anchor `<a href="#...">` tanpa ScrollSmoother; `aria-label` + `aria-expanded` di hamburger; nama "Dafa Huda Rifa'i" (buang Dafa.dev); border-bottom `--line`.
2. Hero:
   - Label kecil "FRONT-END DEVELOPER · UI/UX DESIGNER"
   - H1: nama dengan `Big Shoulders Display` 800, ukuran clamp responsif
   - Paragraf pendek (revisi `heroParagraph.text`)
   - CTA primer: **"Unduh CV"** (link ke `/assets/cv/Cv_ATS_Dafa_Huda_Rifai.pdf`, `download` attr)
   - CTA sekunder: **"Lihat proyek"** (anchor `#proyek`)
   - Hapus `TextType` typing (import dan pemanggilan)
   - Hapus `<q>` kutipan di kotak
   - Foto: buang `border-4 border-violet-500`, ganti border `--line` radius 8px, `alt="Dafa Huda Rifa'i"`, `width`/`height`

### Batch 3 — About & Experience (baru)
1. About: paragraf ditulis ulang baku (buang "interested"/"day-to-day"). Hapus foto duplikat. Hapus blok "6+ Projects · 1+ Tahun" — ganti dengan 3 baris fokus area (Front-end · UI/UX · IoT & AI) + kredensial (S1 Ilkom UNPAK IPK 3.60).
2. **Experience baru** (`src/pages/ExperienceSection.jsx`): 2 entri dari LinkedIn, format timeline sederhana kiri-rata (tanggal · perusahaan · peran · 2-3 bullet output).

### Batch 4 — Tools & Projects
1. Tools: grid 4 kolom (mobile 2), tiap item logo + nama + peran. Peran diperbaiki: React JS "Library" (bukan Framework), Node JS "Runtime", dst. Hapus LogoLoop marquee.
2. Projects: `data.js` diperbarui dengan `repo`, `date`, `role`, `status` per entri (data lengkap di bagian 6). Tambah entri SIMPEG. Card baru: judul + tahun · peran · deskripsi (case study 3-4 baris: masalah → solusi → hasil bila ada) · tag tools pipa · footer dengan link **Demo** + **Repo** (atau label "Internal/Arsip" bila tidak publik).
3. `ProjectCard.jsx`: rombak — border `--line`, tanpa shadow tebal, tanpa tombol ungu penuh, CTA teks + arrow.

### Batch 5 — Certificates & Lightbox
1. Certificates: subseksi di bawah Projects (bukan tab sejajar). Tab hapus.
2. Kartu sertifikat existing (5 dengan gambar) → grid, klik buka lightbox.
3. Sertifikat tambahan (3, tanpa gambar) → daftar teks: `AI Learning Hub Huawei · Digital Talent Scholarship · Okt 2025`.
4. **Lightbox nyata**: state `selectedImage`, `<dialog>` HTML native atau overlay, tutup Esc/klik luar/tombol X, `aria-modal="true"`, fokus kembali ke tombol pemicu setelah tutup.
5. Buang paginasi Load More / Show Less.

### Batch 6 — Contact, Footer, Verifikasi
1. Contact: layout email + LinkedIn + Instagram menonjol, form `formsubmit.co` disederhanakan (label eksplisit, `aria-describedby`, status kirim). Endpoint tetap sampai user konfirmasi berbeda.
2. Footer: nama "Dafa Huda Rifa'i" konsisten + 4 tautan (Beranda, GitHub, LinkedIn, Email) + tahun otomatis + link "Unduh CV".
3. `README.md`: sesuaikan (hapus klaim AOS/Remix Icon).
4. Skor slop 10-tell sebelum vs sesudah (target ≤2).
5. Audit final via `dogfood` skill: cek tombol/link mati, konsol errors, kontras, keyboard nav, reduced-motion.
6. Lighthouse preview mobile: Performance ≥90, A11y ≥95, SEO ≥95.

### Batch 7 — Deploy
1. `git add -A && git commit -m "feat: professional redesign"`
2. Buka PR ke `main` (via `gh pr create`) — user review dulu, bukan langsung merge.
3. Setelah merge: backup webroot baru → POST webhook → verifikasi HTTPS 200 + <head> di production.

## 8. Blocker terbuka (untuk konfirmasi user nanti, bukan sekarang)

1. Palet terracotta `#C64F2E` — user akan tinjau visual; siap tukar bila kurang cocok.
2. Formsubmit.co aktivasi — belum dikonfirmasi; endpoint tetap sampai user putuskan.
3. Foto: pakai yang ada (`hero-img.webp` 800×912). OK.
4. Server hardening (deploy.sh, secret webhook, PM2, GitHub Actions) — TUNDA, batch terpisah setelah redesign live.

## 9. Larangan

- Tidak menambah konten fiktif (proyek, testimoni, metrik).
- Tidak menyentuh deploy.sh / nginx / PM2 tanpa persetujuan terpisah.
- Tidak menghapus file komponen lama (`TextType.jsx`, `LogoLoop.jsx`, `PreLoader.jsx`) — cukup stop import.
- Ragu antara ramai/tenang → pilih tenang.
- Tidak commit `dist/` (akan di-.gitignore).
