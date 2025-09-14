# Portofolio Pribadi - Dafa Huda Rifa'i

Ini adalah repositori untuk website portofolio pribadi saya, yang dibuat menggunakan React dan Vite. Website ini menampilkan proyek-proyek yang pernah saya kerjakan, keahlian yang saya miliki, serta sertifikat yang telah saya peroleh.

## ✨ Fitur

- **Animasi Ketik**: Efek animasi ketik pada bagian hero untuk menampilkan berbagai peran (UI/UX Designer, Front-end Developer, Back-end Developer).
- **Tentang Saya**: Bagian yang menjelaskan profil singkat saya.
- **Daftar Keahlian**: Menampilkan berbagai *tools* dan teknologi yang saya kuasai.
- **Galeri Proyek**: Menampilkan daftar proyek dengan fitur "Lihat Lebih Banyak" untuk memuat lebih banyak proyek.
- **Galeri Sertifikat**: Menampilkan sertifikat dengan *lightbox* untuk melihat gambar lebih jelas.
- **Formulir Kontak**: Formulir untuk mengirim pesan yang terintegrasi dengan [FormSubmit](https://formsubmit.co/).
- **Animasi Scroll**: Menggunakan `AOS` untuk memberikan efek animasi saat *scroll*.

## 🚀 Teknologi yang Digunakan

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Ikon**: [Remix Icon](https://remixicon.com/)
- **Animasi**:
  - [Animate.css](https://animate.style/)
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
  - [React Type Animation](https://www.npmjs.com/package/react-type-animation)
- **Linting**: [ESLint](https://eslint.org/)

## 📦 Instalasi dan Setup

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/username/nama-repositori.git
    ```

2.  **Masuk ke direktori proyek:**
    ```bash
    cd nama-repositori
    ```

3.  **Install semua *dependency* yang dibutuhkan:**
    ```bash
    npm install
    ```

4.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```

    Aplikasi akan berjalan di `http://localhost:5173`.

## 📂 Struktur Folder

```
react-portfolio/
├── public/
│   └── assets/         # Aset gambar (proyek, tools, dll.)
├── src/
│   ├── components/     # Komponen React (Navbar, Footer, dll.)
│   ├── App.jsx         # Komponen utama aplikasi
│   ├── data.js         # Data untuk proyek, tools, dan sertifikat
│   └── main.jsx        # Titik masuk utama aplikasi
├── package.json        # Daftar dependency dan skrip
└── vite.config.js      # Konfigurasi Vite
```