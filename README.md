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

Deploy **manual saja**:

```bash
npm run build && sudo rsync -a --delete dist/ /var/www/portfolio/ \
  && sudo chown -R www-data:www-data /var/www/portfolio
```

> **Auto-deploy sudah dihapus dengan sengaja** (24 Sep 2026), jangan
> ditambahkan kembali tanpa persetujuan pemilik. Alasannya: endpoint webhook-nya
> publik sehingga secretnya pernah bocor di repo ini, dan setiap deploy
> menjalankan `npm install` + build di VPS 2 GB yang juga menjalankan Docker,
> Postgres, dan Redis — cukup untuk mengganggu layanan lain.
>
> Yang dibuang: berkas workflow GitHub Actions, layanan systemd
> `portfolio-webhook`, blok `location /webhook` di nginx, dan berkas secret.
> `deploy.sh` di server masih ada sebagai alternatif manual, tapi tidak dipanggil
> apa pun secara otomatis.

Penting: `rsync --delete` dan `sudo rm -rf /var/www/portfolio/*` menghapus apa
pun yang tidak ada di `dist/`. Selalu salin dulu webroot ke
`/home/ubuntu/portfolio-webroot-backup-$(date +%Y%m%d%H%M%S)` sebelum deploy
yang berisiko.

## Kontak

Email: dafahudarifai147@gmail.com
LinkedIn: [in/dafa-huda-rifa-i](https://www.linkedin.com/in/dafa-huda-rifa-i)
