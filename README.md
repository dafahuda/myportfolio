# Portfolio — Dafa Huda Rifa'i

Portfolio pribadi. Front-end developer & UI/UX designer.
Sarjana Ilmu Komputer Universitas Pakuan.

**Live:** [portfolio.dhr.my.id](https://portfolio.dhr.my.id)

---

## Isi

- **Hero** — sudut pandang kerja, unduh CV, marquee tools
- **Tentang** — fokus area dan kredensial
- **Pengalaman** — Badan Pengembangan dan Pembinaan Bahasa, Infinite Learning MSIB
- **Tools** — tech stack sehari-hari
- **Proyek** — tujuh proyek nyata dengan tautan repo dan demo
- **Sertifikat** — lima sertifikat lengkap (lightbox) + tiga referensi
- **Kontak** — email, LinkedIn, GitHub, Instagram, form

## Stack

- React 19 + Vite 7
- Tailwind CSS 4
- Iconify
- GSAP (motion minimal, tanpa ScrollSmoother)

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
├── AGENTS.md              # router untuk AI coding agent
├── DESIGN.md              # arah style (palet, tipografi, voice)
├── ANTISLOP.md            # filter anti-slop UI
├── public/assets/         # aset statis (foto, ikon, CV, sertifikat)
├── src/
│   ├── MainApp.jsx        # root aplikasi
│   ├── App.jsx            # urutan seksi
│   ├── data.js            # semua konten
│   ├── index.css          # token desain + Tailwind
│   ├── hooks/useReveal.js # IntersectionObserver fade-up
│   ├── components/        # Navbar, Footer, ProjectCard, dst.
│   └── pages/             # tujuh seksi halaman
└── vite.config.js
```

## Deploy

Auto-deploy lewat webhook di VPS. `git push origin main` memicu:
`git pull → npm install → npm run build → rsync ke /var/www/portfolio`.

## Kontak

Email: dafahudarifai147@gmail.com
LinkedIn: [in/dafa-huda-rifa-i](https://www.linkedin.com/in/dafa-huda-rifa-i)
