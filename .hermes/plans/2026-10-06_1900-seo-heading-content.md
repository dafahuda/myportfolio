# Plan: SEO Bagian E (heading) + F (konten)

## E. Heading
- HeroSection.jsx: H1 ganti menjadi keyword "Front-end Developer & UI/UX Designer"
  dengan gaya .section-label (visual tetap); tagline puitis pindah jadi <p>
  besar display dengan AnimatedWords (visual tidak berubah).
- H2 baru: Tentang Dafa Huda Rifa'i. / Pengalaman Front-end & UI/UX. /
  Perkakas React, Tailwind & Figma. / Proyek Front-end, UI/UX & IoT. /
  Sertifikat & pelatihan. / Kontak & kolaborasi.
- Label mono #sertifikat ganti daftar penyelenggara (DTS · Huawei · TTP).

## F. Konten
- AboutSection.jsx: paragraf tentang diri (IPK 3.60, React/Next/Tailwind,
  Figma design thinking, IoT, AI tools, terbuka Jakarta/Bogor/remote).
- data.js: deskripsi 2 pengalaman + 7 proyek, keyword-rich, tanpa angka
  karangan (R-17), tanpa kata ban DESIGN.md, tanpa em dash (R-02).

## Verifikasi
- ESLint + build, cek H1/H2 live di preview, deploy manual + backup,
  commit author sesuai aturan.
