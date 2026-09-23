# Portfolio — Dafa Huda Rifa'i

Portfolio pribadi. Front-end developer & UI/UX designer.
Sarjana Ilmu Komputer Universitas Pakuan.

**Live:** [portfolio.dhr.my.id](https://portfolio.dhr.my.id)

---

## Isi

- **Hero** — sudut pandang kerja, tombol unduh CV, marquee tools monokrom
- **Tentang** — fokus area, posisi yang diincar, kredensial
- **Pengalaman** — Badan Pengembangan dan Pembinaan Bahasa, Infinite Learning MSIB
- **Tools** — 14 perkakas dengan ikon merek monokrom
- **Proyek** — tujuh proyek dengan tautan repo dan demo
- **Sertifikat** — empat sertifikat bergambar (lightbox) + tiga referensi teks
- **Kontak** — email, LinkedIn, GitHub, Instagram, form

## Stack

- React 19 + Vite 7
- Tailwind CSS 4
- [Tabler Icons](https://tabler.io/icons) — satu pustaka untuk ikon aksi maupun ikon merek
- Tanpa GSAP, tanpa pustaka animasi. Gerak memakai CSS dan `IntersectionObserver`

## Menjalankan lokal

```bash
git clone https://github.com/dafahuda/myportfolio.git
cd myportfolio
npm install
npm run dev        # http://localhost:5173
npm run build      # produksi ke dist/
npm run preview    # http://localhost:4173
```

## Struktur

```
├── AGENTS.md                 # router untuk AI coding agent
├── DESIGN.md                 # arah style (palet, tipografi, voice, ikon)
├── ANTISLOP.md               # filter anti-slop UI
├── public/assets/            # aset statis (foto, CV, sertifikat, 2 SVG tools)
├── src/
│   ├── MainApp.jsx           # root aplikasi
│   ├── App.jsx               # urutan seksi
│   ├── data.js               # seluruh konten
│   ├── index.css             # token desain + Tailwind
│   ├── hooks/useReveal.js    # IntersectionObserver fade-up
│   ├── components/
│   │   ├── Icon.jsx          # SATU sumber ikon untuk seluruh situs
│   │   ├── InlineSvg.jsx     # SVG yang ditanam agar mewarisi warna teks
│   │   ├── Navbar.jsx, Footer.jsx, BackToTop.jsx
│   │   ├── ProjectCard.jsx, Lightbox.jsx, LogoLoop.jsx
│   └── pages/                # tujuh seksi halaman
└── vite.config.js
```

## Ikon

Semua ikon berasal dari satu tempat: `src/components/Icon.jsx`. Aturannya:

- **Ikon aksi** (panah, unduh, tutup, kirim) → bergaris, `stroke={2}`
- **Ikon identitas & dokumen** (merek, surat, berkas) → terisi
- **Merek tools** → monokrom, mewarisi `currentColor` dari section

Jangan menambah pustaka ikon kedua. Jangan memakai `<img>` untuk SVG yang harus
mengikuti warna teks — `currentColor` tidak diwarisi lewat `<img>`; pakai
`InlineSvg` (lihat alasannya di komentar berkas itu).

## Deploy

Tiga jalur, semuanya berakhir di `/var/www/portfolio`:

```bash
# manual (yang dipakai sehari-hari)
npm run build && sudo rsync -a --delete dist/ /var/www/portfolio/ \
  && sudo chown -R www-data:www-data /var/www/portfolio
```

**Otomatis.** Setiap push ke `main` memicu GitHub Actions
(`.github/workflows/deploy.yml`) yang memanggil webhook di VPS:

```
GitHub Actions  ->  POST https://portfolio.dhr.my.id/webhook/deploy?secret=...
                ->  nginx mem-proxy ke 127.0.0.1:9000
                ->  deploy.sh (git pull, npm install, npm run build, rsync)
```

Webhook-nya adalah layanan systemd:

```bash
systemctl status portfolio-webhook
sudo systemctl restart portfolio-webhook
journalctl -u portfolio-webhook -n 50
```

Secret-nya **tidak** ada di dalam repo. Nilainya dibaca dari
`/home/ubuntu/.portfolio-deploy-secret` (mode 600) di sisi server, dan dari
GitHub Actions secret bernama `DEPLOY_SECRET` di sisi GitHub. Untuk merotasi:
ganti isi berkas itu, `systemctl restart portfolio-webhook`, lalu
`gh secret set DEPLOY_SECRET`.

Penting: `rsync --delete` dan `sudo rm -rf /var/www/portfolio/*` menghapus apa
pun yang tidak ada di `dist/`. Selalu salin dulu webroot ke
`/home/ubuntu/portfolio-webroot-backup-$(date +%Y%m%d%H%M%S)` sebelum deploy
yang berisiko.

## Kontak

Email: dafahudarifai147@gmail.com
LinkedIn: [in/dafa-huda-rifa-i](https://www.linkedin.com/in/dafa-huda-rifa-i)
