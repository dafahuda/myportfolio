# Penyelarasan tipografi referensi

Goal: Mendekatkan tipografi portfolio ke collectiveminds.com.sg tanpa mengulang perubahan SEO yang telah dibatalkan.
Baseline: 49cf50a (rollback ke isi d911f93). Referensi dan portfolio telah diperiksa live pada viewport yang sama.

Batasan: Jangan ubah teks/semantik H1/H2/H3, metadata SEO/JSON-LD/robots/sitemap, warna, layout, ukuran heading, padding, H3, konten proyek/pengalaman, animasi atau tema. Jangan menambahkan section agensi, testimonial, rc-wave, atau latar kuning. Setiap task berdiri sendiri; selesai verifikasi dan laporkan sebelum melanjutkan task berikutnya.

## Task 1: Paket font dan mono
Status: selesai. ESLint/build lulus; CDP actual platform font label = JetBrains Mono; tidak ada horizontal overflow 1366px dan 390px; HTML/CSS/JS live identik build. Backup /home/ubuntu/portfolio-webroot-backup-20261006204922. Task 2/3 tetap belum dikerjakan.
Files: index.html (link font saja), src/index.css (--font-mono saja).
Ganti Google Fonts ke link referensi Big Shoulders Display 400/700/800/900; Instrument Sans normal 400/500/600 dan italic 400; JetBrains Mono 400/500. Preconnect yang benar dipertahankan.
Ubah --font-mono menjadi "JetBrains Mono", ui-monospace, monospace. Nav/section-label/font-mono otomatis mengikuti. Jangan ubah marquee yang saat ini Instrument Sans sebelum diverifikasi gaya marquee referensi secara terpisah.
Verifikasi: eslint, build; computed font nav/label; actual platform font via CDP; responsive overflow desktop/mobile; metadata/heading/body/style lainnya tetap; backup webroot sebelum manual deploy; asset live sama byte dengan build; commit identitas owner.

## Task 2: Uppercase heading saja
Status: selesai. Uppercase melalui CSS saja. Build/eslint lulus; H3 tetap none; heading line-height/size tetap; tanpa overflow 1280x720,1366x768,1440x900,390x844; hero pas viewport. Live asset cocok dengan build. Backup 20261006205620.
Files: src/index.css.
Tambahkan text-transform: uppercase pada #beranda h1 dan h2.section-title saja. Jangan kapitalisasi string HTML/JSX. Jangan ubah H3, label yang sudah uppercase, ukuran atau line-height.
Verifikasi: semua teks heading identik baseline, transform uppercase terbatas selector, no horizontal overflow atau kata terpotong; hero marquee bottom <= viewport pada laptop umum. Bila uppercase menyebabkan masalah pemenggalan, laporkan tanpa mengubah layout sepihak.

## Task 3: Line-height heading
Status: selesai. Computed ratio H1/H2 desktop 0.82, mobile 0.90; build/eslint lulus; tanpa horizontal overflow pada 1280x720,1366x768,1440x900,390x844; hero pas viewport. Masker AnimatedWords tetap, verifikasi pixel glyph belum dilakukan. HTML/CSS/JS live identik build. Backup 20261006205947.
Files: src/index.css; src/pages/HeroSection.jsx hanya bila inline lineHeight perlu dipindahkan ke CSS selector H1.
Target desktop 0.82, mobile 0.90 untuk #beranda h1 dan h2.section-title saja. Jangan ubah ukuran heading, padding, margin, H3 atau animasi. Periksa masker AnimatedWords agar glyph tidak terpotong; apabila butuh penyesuaian di luar scope, minta persetujuan sebelum mengubahnya.
Verifikasi: computed ratio sesuai, pemenggalan/glyph terbaca, tidak bertabrakan; laptop 1280x720/1366x768/1440x900 dan mobile 390px; light/dark/reduced-motion tetap bekerja. Backup, build, deploy, hash asset, commit terpisah.

## Di luar scope
Variasi skala per section, pergantian latar, perubahan motion dan font marquee tidak otomatis diimplementasikan. Temuan perbandingan bukan izin menyalin seluruh situs referensi.
