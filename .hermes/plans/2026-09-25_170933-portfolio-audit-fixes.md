# Task: Perbaiki temuan audit portfolio secara aman

## Target

Repo: `/home/ubuntu/portfolio`

Live: `https://portfolio.dhr.my.id`

Stack: React 19, Vite 7, Tailwind 4, Tabler Icons.

Baseline terverifikasi:

- Commit terakhir: `d9025ca`
- Working tree saat audit: bersih
- Build terakhir: sukses
- ESLint: 0 error
- Lighthouse median mobile: Performance 90, Accessibility 100, Best Practices 100, SEO 100
- Lighthouse median desktop: Performance 98, Accessibility 100, Best Practices 100, SEO 100
- Total live reveal: 28 elemen
- Footer sudah memiliki reveal dan sudah live

## Aturan keras

1. Bahasa konten tetap Bahasa Indonesia. Jangan ubah copy, proyek, angka, sertifikat, pengalaman, atau kredensial tanpa sumber nyata.
2. Pertahankan desain cream+terracotta editorial.
3. Pertahankan headline hero, marquee Enthusiast, foto di section Tentang, stabilo, mode gelap/terang, dan animasi reveal.
4. Jangan menghapus atau mengurangi animasi hanya karena audit. Semua konten tetap memakai reveal smooth.
5. Jangan menambah dependency baru.
6. Jangan memakai `npm audit fix --force`.
7. Jangan menyentuh `deploy.sh`, nginx, PM2, webhook, GitHub Actions, atau auto-deploy.
8. Deploy manual saja setelah semua verifikasi selesai.
9. Sebelum deploy, buat backup:
   ```bash
   sudo cp -a /var/www/portfolio /home/ubuntu/portfolio-webroot-backup-$(date +%Y%m%d%H%M%S)
   ```
10. Commit author wajib:
    `Dafa Huda Rifa'i <dafahudarifai147@gmail.com>`
11. Jangan menulis secret, token, password, API key, atau credential ke repo publik.
12. Kerjakan satu batch ini sampai selesai. Jangan meminta keputusan baru jika acceptance criteria sudah jelas.

## Temuan yang wajib diperbaiki

### 1. Hapus duplicate ID `beranda`

Masalah aktual:

- `index.html` memiliki `<body id="beranda">`.
- `HeroSection.jsx` memiliki `<section id="beranda">`.
- Selector `#beranda` sekarang menghasilkan dua elemen.

Perbaikan:

- Hapus hanya `id="beranda"` dari `<body>`.
- Pertahankan `id="beranda"` pada section Hero.
- Jangan mengubah skip link, navbar, atau anchor hero.

Acceptance:

```bash
! grep -q '<body[^>]*id="beranda"' index.html
```

Browser harus menghasilkan tepat satu `document.querySelectorAll('#beranda').length === 1`.

### 2. Sinkronkan `theme-color` dengan mode terang/gelap

Masalah aktual:

- `index.html` hanya memiliki:
  `<meta name="theme-color" content="#F2F1EC" />`
- Saat mode gelap, browser masih dapat memakai warna terang.

Implementasi minimum:

- Gunakan dua meta theme-color dengan media query jika kompatibel dengan target browser, atau satu meta yang diperbarui oleh `useTheme` saat tema berubah.
- Warna terang: `#F2F1EC`.
- Warna gelap: `#1A1815`.
- Jangan merusak anti-FOUC.
- Jangan menambahkan library.

Acceptance browser:

- Mode terang: meta theme-color bernilai `#F2F1EC`.
- Mode gelap: meta theme-color bernilai `#1A1815`.
- Toggle tetap mengubah class HTML dan localStorage.
- Reload mode gelap tidak menampilkan flash terang.

### 3. Batasi stagger reveal global

Masalah aktual:

- Hook `src/hooks/useReveal.js` memakai counter global.
- Scroll normal terlihat baik.
- Lompat langsung ke footer dapat memberi delay sampai sekitar `0.9s`.

Perbaikan:

- Pertahankan reveal semua konten.
- Pertahankan durasi CSS `0.65s` dan easing sekarang.
- Pertahankan stagger dasar `90ms`.
- Batasi delay maksimum menjadi `270ms` atau reset counter per batch/section.
- Elemen yang muncul bersama tidak boleh menunggu elemen dari section sebelumnya.
- Jangan membuat konten opacity 0 permanen di desktop kecil/mobile.
- Pertahankan `prefers-reduced-motion`.
- `rootMargin` saat ini `0px 0px -20px 0px`; jangan mengembalikan ke `-40px` tanpa alasan dan pengujian viewport pendek.

Acceptance browser:

- Hero label, paragraf, tombol tampil semua.
- Saat scroll normal, konten muncul bertahap.
- Saat langsung scroll ke footer, delay tiap elemen <= `270ms`.
- Semua elemen yang masuk viewport menjadi `opacity: 1`.
- Reduced motion: semua reveal langsung tampil, transition/animation mati.

### 4. Periksa dan perbarui dependency rentan

Audit aktual:

```text
npm audit --omit=dev
6 vulnerability: 1 critical, 5 high
```

Paket terdampak:

- `vite` direct dependency; versi saat audit berada pada range rentan 7.0.0–7.3.3.
- `tar`
- `nanoid`
- `picomatch`
- `postcss`
- `rollup`

Aturan:

- Jangan menjalankan `npm audit fix --force`.
- Baca `package.json` dan `package-lock.json` dahulu.
- Update hanya ke versi patch/minor aman yang kompatibel dengan React 19, Tailwind 4, dan Vite 7.
- Jangan upgrade major tanpa bukti kebutuhan dan jangan mengubah framework.
- Jalankan setelah update:
  ```bash
  npm install
  npm audit --omit=dev
  npm run build
  npx eslint .
  ```
- Jika vulnerability tersisa hanya berasal dari dev/build tooling yang tidak masuk runtime production, laporkan paket dan alasan. Jangan menyembunyikannya.
- Jika update merusak build, batalkan perubahan dependency dan laporkan blocker; jangan memaksa.

Acceptance dependency:

- Build sukses.
- ESLint 0 error.
- `npm audit --omit=dev` tidak memiliki critical/high yang dapat diperbaiki tanpa breaking change; jika masih ada, tulis alasan konkret.
- Tidak ada dependency baru.

## Validasi wajib sebelum deploy

### Source/build

```bash
git diff --check
npm run build
npx eslint .
npm audit --omit=dev
```

Jika ada test script:

```bash
npm test -- --run
```

### DOM/browser

Dengan browser nyata, cache-bypass live/preview, cek:

1. `document.querySelectorAll('#beranda').length === 1`
2. Hero label, headline, paragraf, dua tombol tampil.
3. Semua section dan footer memiliki reveal.
4. Reveal tidak tersisa opacity 0 setelah scroll semua section.
5. Animasi marquee bergerak.
6. Toggle terang/gelap bekerja, label ARIA berubah, localStorage berubah.
7. Theme-color berubah mengikuti tema.
8. Reduced motion menonaktifkan reveal movement dan shimmer.
9. Modal sertifikat terbuka, `aria-modal="true"`, Escape menutup.
10. Form kosong memblokir submit dengan validasi nama/email/pesan.
11. Menu mobile terbuka, link Tentang/section bekerja, menu menutup.
12. Tidak ada horizontal overflow pada viewport 390px.
13. Tidak ada broken image setelah semua section discroll.
14. Tidak ada console error atau unhandled rejection.
15. Focus keyboard terlihat dan skip link bekerja.

### HTTP/SEO

```bash
curl -sSI https://portfolio.dhr.my.id/
curl -sSI https://portfolio.dhr.my.id/robots.txt
curl -sSI https://portfolio.dhr.my.id/sitemap.xml
curl -sSI https://portfolio.dhr.my.id/site.webmanifest
curl -sSI https://portfolio.dhr.my.id/favicon.ico
```

Pastikan HTTP 200 dan content type benar.

### Lighthouse

Jalankan minimum 3 run mobile dan 3 run desktop:

```bash
npx lighthouse https://portfolio.dhr.my.id/ \
  --quiet \
  --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage" \
  --only-categories=performance,accessibility,best-practices,seo
```

Desktop boleh memakai `--preset=desktop`.

Target tidak boleh turun dari baseline tanpa alasan:

- Accessibility: 100
- Best Practices: 100
- SEO: 100
- Performance mobile median >= 90
- Performance desktop median >= 95
- CLS tetap <= 0.1

## Deploy hanya setelah semua acceptance lulus

1. Catat status git dan hasil build.
2. Buat backup webroot:
   ```bash
   STAMP=$(date +%Y%m%d%H%M%S)
   sudo cp -a /var/www/portfolio /home/ubuntu/portfolio-webroot-backup-$STAMP
   ```
3. Deploy manual:
   ```bash
   sudo rsync -a --delete dist/ /var/www/portfolio/
   sudo chown -R www-data:www-data /var/www/portfolio
   ```
4. Verifikasi:
   ```bash
   curl -sS -o /dev/null -w 'HTTP %{http_code}\n' https://portfolio.dhr.my.id/
   ```
5. Commit Conventional Commit, contoh:
   ```text
   fix(audit): perbaiki id, theme-color, stagger, dan dependency
   ```
6. Push `main`.
7. Cache-bypass live, ulangi smoke test DOM utama.

Jangan menyatakan selesai tanpa menyebut:

- commit hash
- backup path
- HTTP status live
- build/lint/audit result
- Lighthouse median sebelum/sesudah
- temuan yang masih tersisa

## Jangan lakukan

- Jangan mengubah copy portfolio.
- Jangan memindahkan foto profil lagi.
- Jangan menghapus marquee.
- Jangan menghapus animasi konten.
- Jangan mengganti cream+terracotta.
- Jangan menambah GSAP, Framer Motion, AOS, atau library animasi baru.
- Jangan mengaktifkan kembali auto-deploy.
- Jangan mengubah nginx/PM2/webhook.
- Jangan mengklaim submit form sukses tanpa benar-benar mengirim data dan membaca responsnya.
