import HeroImage from "/assets/hero-img.webp";
import HeroImageSmall from "/assets/hero-img-400.webp";

const Image = { HeroImage, HeroImageSmall };
export default Image;

/* ============================================================
 * Tools & tech stack
 * Monokrom: ikon merek dari Tabler yang mewarisi warna teks, sehingga
 * menyatu dengan palet situs (ink di latar cream). Dua merek tidak ada di
 * Tabler, jadi memakai berkas SVG lokal yang sudah diseragamkan warnanya.
 * ============================================================ */
import ToolsCodeigniter from "/assets/tools/codeigniter.svg?raw";
import ToolsCanva from "/assets/tools/canva.svg?raw";

export const listTools = [
  { id: 1, icon: "brand-html5", nama: "HTML", ket: "Markup" },
  { id: 2, icon: "brand-css3", nama: "CSS", ket: "Styling" },
  { id: 3, icon: "brand-javascript", nama: "JavaScript", ket: "Bahasa" },
  { id: 4, icon: "brand-php", nama: "PHP", ket: "Bahasa" },
  { id: 5, icon: "brand-react", nama: "React", ket: "Library" },
  { id: 6, icon: "brand-nextjs", nama: "Next.js", ket: "Framework" },
  { id: 7, icon: "brand-nodejs", nama: "Node.js", ket: "Runtime" },
  { id: 8, gambar: ToolsCodeigniter, nama: "CodeIgniter", ket: "Framework" },
  { id: 9, icon: "brand-tailwind", nama: "Tailwind CSS", ket: "Framework" },
  { id: 10, icon: "brand-bootstrap", nama: "Bootstrap", ket: "Framework" },
  { id: 11, icon: "brand-mysql", nama: "MySQL", ket: "Database" },
  { id: 12, icon: "brand-figma", nama: "Figma", ket: "Design" },
  { id: 13, gambar: ToolsCanva, nama: "Canva", ket: "Design" },
  { id: 14, icon: "brand-github", nama: "GitHub", ket: "Versioning" },
];

/* ============================================================
 * Projects
 * ============================================================ */
import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";
import ProyekSimpeg from "/assets/proyek/simpeg.svg";
import ProyekSimpegDark from "/assets/proyek/simpeg-dark.svg";

export const listProyek = [
  {
    id: 7,
    thumbnail: ProyekSimpeg,
    thumbnailDark: ProyekSimpegDark,
    title: "SIMPEG Dashboard",
    year: "2025–2026",
    role: "Full-stack · Magang",
    description:
      "Dashboard SDM internal Badan Pengembangan dan Pembinaan Bahasa: CRUD data pribadi, pendidikan, riwayat jabatan, kepangkatan, dan pelatihan pegawai. Dibangun dengan Google Apps Script, HTML, CSS, dan JavaScript di atas Google Sheets, lengkap dengan alur input Google Forms dan otomasi dokumen Autocrat.",
    tools: ["Google Apps Script", "HTML", "CSS", "JavaScript", "Google Sheets"],
    repo: "https://github.com/dafahuda/MY-SIMPEG-APP",
    link: "",
    status: "internal",
  },
  {
    id: 2,
    thumbnail: Proyek2,
    title: "Bogor Landslide Risk",
    year: "2025",
    role: "Solo",
    description:
      "Peta interaktif risiko longsor Kota Bogor. Skoring fuzzy logic dihitung di JavaScript untuk tiap parameter lereng, curah hujan, dan jenis tanah, lalu divisualisasikan sebagai peta berwarna dengan Leaflet.js dan grafik Chart.js.",
    tools: ["JavaScript", "Leaflet.js", "Chart.js", "Fuzzy Logic"],
    repo: "https://github.com/dafahuda/bogor-landslide-risk",
    link: "https://dafahuda.github.io/bogor-landslide-risk",
    status: "live",
  },
  {
    id: 1,
    thumbnail: Proyek1,
    title: "Portfolio Redesign 2026",
    year: "Sep 2026",
    role: "Solo",
    description:
      "Situs portfolio ini, ditulis ulang dari nol dengan React 19, Vite, dan Tailwind CSS: palet editorial cream, tipografi Big Shoulders Display, animasi scroll terukur, serta SEO teknis berupa JSON-LD, Open Graph, dan sitemap.",
    tools: ["React", "Vite", "Tailwind CSS"],
    repo: "https://github.com/dafahuda/myportfolio",
    link: "https://portfolio.dhr.my.id",
    status: "live",
  },
  {
    id: 3,
    thumbnail: Proyek3,
    title: "Mini Weather Station",
    year: "2024",
    role: "Solo · Skripsi",
    description:
      "Skripsi: stasiun cuaca IoT real-time. Sensor Arduino membaca suhu, kelembapan, dan tekanan udara, datanya masuk ke dashboard web CodeIgniter 3 + Bootstrap dengan estimasi kondisi cuaca fuzzy logic via Chart.js.",
    tools: ["Arduino", "CodeIgniter 3", "Bootstrap", "Chart.js", "Fuzzy Logic"],
    repo: "",
    link: "",
    status: "private",
  },
  {
    id: 4,
    thumbnail: Proyek4,
    title: "Fintrack",
    year: "2023",
    role: "Tim · MSIB",
    description:
      "Capstone MSIB Batch 3: platform edukasi keuangan. Sebagai Frontend Developer dalam tim, saya membangun antarmuka React + Tailwind CSS dan integrasi API ke backend Node.js, Express, dan MongoDB.",
    tools: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    repo: "https://github.com/dafahuda/Fintrack",
    link: "https://fintrack-ten.vercel.app",
    status: "live",
  },
  {
    id: 5,
    thumbnail: Proyek5,
    title: "Freedom",
    year: "2022",
    role: "Tim · MSIB",
    description:
      "Capstone MSIB Batch 3: platform edukasi antar-kelompok. Peran saya UI Designer, menyusun wireframe dan prototipe interaktif di Figma sebelum diimplementasikan ke React dan Tailwind CSS.",
    tools: ["React", "Tailwind CSS"],
    repo: "https://github.com/Raihan32/Freedom-macro-ReactJS",
    link: "",
    status: "archived",
  },
  {
    id: 6,
    thumbnail: Proyek6,
    title: "Gabungin",
    year: "2022",
    role: "Solo",
    description:
      "Prototipe aplikasi kolaborasi tim: chat, pembagian tugas, dan penjadwalan. Dibangun dengan HTML, CSS, dan JavaScript murni; alur desainnya disusun di Figma.",
    tools: ["HTML", "CSS", "JavaScript", "Figma"],
    repo: "",
    link: "",
    status: "private",
  },
];

/* ============================================================
 * Experience (from LinkedIn, verified)
 * ============================================================ */
export const experienceList = [
  {
    id: 1,
    period: "Nov 2025 – Mei 2026",
    company: "Badan Pengembangan dan Pembinaan Bahasa",
    role: "Data & Information Management",
    location: "Bogor",
    bullets: [
      "Membangun SIMPEG, dashboard informasi pegawai lengkap dengan modul CRUD data pribadi, pendidikan, riwayat jabatan, kepangkatan, pelatihan, dan administrasi, menggunakan Google Apps Script, HTML, CSS, dan JavaScript.",
      "Menata dan membersihkan data pegawai dari berbagai format sumber menggunakan Google Sheets.",
      "Menyusun alur input data terstruktur lewat Google Forms dan Google Sheets.",
      "Mengotomasi pembuatan dokumen menggunakan Google Forms, Google Sheets, dan Autocrat.",
      "Mendukung validasi data, debugging, perbaikan UI, dan penulisan dokumentasi sistem.",
    ],
    stack: ["Google Apps Script", "HTML", "CSS", "JavaScript", "Google Sheets"],
  },
  {
    id: 2,
    period: "Sep 2022 – Feb 2023",
    company: "Infinite Learning Indonesia",
    role: "MSIB Batch 3 · Web Development",
    location: "Batam",
    bullets: [
      "Program Kampus Merdeka jalur Studi Independen di Nongsa Digital Park, Batam.",
      "Mengikuti alur belajar bertahap: UI/UX Designer (Figma, design thinking) → Frontend Developer (React, Tailwind CSS) → Full Stack Engineer (Node.js, MongoDB).",
      "Menyelesaikan capstone project Fintrack sebagai bagian dari tim pengembang.",
    ],
    stack: ["Figma", "React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
];

/* ============================================================
 * Certificates
 * ============================================================ */
import CertJnaSertifikat from "/assets/sertifikat/Fundamental Junior Network Administrator Sertifikat.webp";
import CertJnaNilai from "/assets/sertifikat/Fundamental Junior Network Administrator Nilai.webp";
import CertInaSertifikat from "/assets/sertifikat/Intermediate Junior Network Administrator Sertifikat.webp";
import CertInaNilai from "/assets/sertifikat/Intermediate Junior Network Administrator Nilai.webp";
import CertDtSertifikat from "/assets/sertifikat/Teknisi Drive Tester Sertifikat.webp";
import CertDtNilai from "/assets/sertifikat/Teknisi Drive Tester  Nilai.webp";
import CertAdtSertifikat from "/assets/sertifikat/Analisi Teknisi Drive Tester Sertifikat.webp";
import CertAdtNilai from "/assets/sertifikat/Analisi Teknisi Drive Tester Nilai.webp";
import CertMsSertifikat from "/assets/sertifikat/Sertifikat Microsoft Office Desktop Training.webp";
import CertMsNilai from "/assets/sertifikat/Sertifikat Microsoft Office Desktop Training Nilai.webp";

export const certificateList = [
  {
    id: 1,
    name: "Junior Network Administrator — Fundamental & Intermediate",
    issuer: "Digital Talent Scholarship",
    date: "2025",
    description:
      "Dua level sertifikasi jaringan komputer: Fundamental (dasar jaringan, administrasi server) dan Intermediate (konfigurasi jaringan tingkat menengah, layanan server).",
    imageList: [
      { image: CertJnaSertifikat, text: "Fundamental — Sertifikat" },
      { image: CertJnaNilai, text: "Fundamental — Transkrip" },
      { image: CertInaSertifikat, text: "Intermediate — Sertifikat" },
      { image: CertInaNilai, text: "Intermediate — Transkrip" },
    ],
  },
  {
    id: 3,
    name: "Teknisi Drive Tester — Fundamental & Intermediate",
    issuer: "Digital Talent Scholarship",
    date: "2025",
    description:
      "Dua level sertifikasi drive test: Fundamental (metodologi pengujian dan analisis performa jaringan seluler) dan Intermediate (post-processing data untuk optimasi jaringan).",
    imageList: [
      { image: CertDtSertifikat, text: "Fundamental — Sertifikat" },
      { image: CertDtNilai, text: "Fundamental — Transkrip" },
      { image: CertAdtSertifikat, text: "Intermediate — Sertifikat" },
      { image: CertAdtNilai, text: "Intermediate — Transkrip" },
    ],
  },
  {
    id: 5,
    name: "Microsoft Office Desktop Training",
    issuer: "Trust Training Partners",
    date: "2019",
    description:
      "Pelatihan Word, Excel, dan PowerPoint untuk penggunaan profesional.",
    imageList: [
      { image: CertMsSertifikat, text: "Sertifikat" },
      { image: CertMsNilai, text: "Transkrip" },
    ],
  },
];

// Sertifikat tanpa berkas gambar — tampil sebagai baris teks.
export const certificateExtras = [
  {
    id: "e1",
    name: "Data & Information Management — Maganghub Batch 2",
    issuer: "Kementerian Ketenagakerjaan Republik Indonesia",
    date: "Mei 2026",
  },
  {
    id: "e2",
    name: "Artificial Intelligence Learning Hub Huawei",
    issuer: "Digital Talent Scholarship",
    date: "Okt 2025",
  },
  {
    id: "e3",
    name: "Web Development — MSIB Batch 3",
    issuer: "Kampus Merdeka",
    date: "Jan 2023",
  },
];

/* ============================================================
 * Copy blocks
 * ============================================================ */
export const heroParagraph = {
  text: "Sarjana Ilmu Komputer, Universitas Pakuan. Membangun dashboard kepegawaian internal di Badan Bahasa menggunakan Google Apps Script. Fokus di front-end development, UI/UX design, dan alur kerja AI modern.",
};

export const aboutParagraph = {
  text: "Saya Dafa Huda Rifa'i, lulusan S1 Ilmu Komputer Universitas Pakuan (2019-2025, IPK 3.60) yang berkarya sebagai front-end developer dan UI/UX designer. Saya membangun antarmuka dengan React, Next.js, dan Tailwind CSS, serta merancang alurnya di Figma lewat design thinking, wireframing, dan prototyping. Terbaru, saya membangun dashboard kepegawaian (SIMPEG) internal di Badan Pengembangan dan Pembinaan Bahasa. Latar belakang IoT dari skripsi stasiun cuaca membuat saya nyaman menghubungkan web dengan perangkat dan data nyata, dan sehari-hari saya memakai AI tools untuk mempercepat pekerjaan tanpa menyerahkan kualitas ke mesin. Saat ini saya terbuka untuk posisi Front-end Developer atau UI/UX Designer, remote maupun onsite di Jakarta dan Bogor.",
  // Kata yang diberi ornamen stabilo di mode gelap (lihat .mark-accent).
  highlights: ["dashboard kepegawaian", "stasiun cuaca"],
};

/* ============================================================
 * BIDANG MINAT — isi marquee di bawah hero.
 * Sebelumnya marquee memakai daftar tools yang sama dengan section
 * "Perkakas" (duplikat); kini memakai bidang yang ditekuni supaya
 * marquee menjawab "orang ini bidang apa", bukan "pakai apa".
 * ============================================================ */
export const listMinat = [
  "Computer Science",
  "Front-end Web Development",
  "Embedded Systems & IoT Enthusiast",
  "Modern AI Tools Enthusiast",
  "AI-Assisted Workflow Enthusiast",
  "HR Information Systems",
];
