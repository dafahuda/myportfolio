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
      "Dashboard SDM internal Badan Bahasa untuk mengelola data pegawai — CRUD data pribadi, pendidikan, jabatan, pelatihan, hingga otomasi dokumen via Google Forms dan Autocrat.",
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
    role: "Solo · Skripsi",
    description:
      "Peta interaktif batas wilayah Kota Bogor dengan kalkulasi risiko tanah longsor berbasis Fuzzy Logic. Visualisasi data multi-parameter di peta Leaflet.",
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
      "Ditulis ulang dari nol dengan React 19, Vite, dan Tailwind — palet editorial cream, tipografi Big Shoulders Display, dan animasi scroll yang minimum.",
    tools: ["React", "Vite", "Tailwind CSS"],
    repo: "https://github.com/dafahuda/myportfolio",
    link: "https://portfolio.dhr.my.id",
    status: "live",
  },
  {
    id: 4,
    thumbnail: Proyek4,
    title: "Fintrack",
    year: "2023",
    role: "Tim · MSIB",
    description:
      "Capstone MSIB Batch 3 — platform edukasi keuangan. Saya bagian tim frontend, membangun antarmuka dan integrasi API untuk konten interaktif dan feed informasi ekonomi.",
    tools: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    repo: "https://github.com/dafahuda/Fintrack",
    link: "https://fintrack-ten.vercel.app",
    status: "live",
  },
  {
    id: 3,
    thumbnail: Proyek3,
    title: "Mini Weather Station",
    year: "2023",
    role: "Solo · IoT",
    description:
      "Sistem monitoring cuaca real-time yang membaca data dari Arduino Mega WiFi dan menampilkannya di web dengan chart interaktif.",
    tools: ["CodeIgniter 3", "Bootstrap", "Chart.js", "Arduino"],
    repo: "",
    link: "",
    status: "private",
  },
  {
    id: 5,
    thumbnail: Proyek5,
    title: "Freedom",
    year: "2022",
    role: "Tim · MSIB",
    description:
      "Capstone MSIB Batch 3 — platform edukasi antarm kelompok. Bertugas sebagai UI designer, menyusun wireframe dan prototipe interaktif.",
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
      "Prototipe kolaborasi tim — fitur chat, pembagian tugas, dan penjadwalan. Dibuat dengan HTML, CSS, dan JavaScript; desain di Figma.",
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
      "Membangun dashboard informasi pegawai lengkap dengan modul CRUD data pribadi, pendidikan, riwayat jabatan, kepangkatan, pelatihan, dan administrasi.",
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
      "Program Kampus Merdeka jalur Studi Independen di Nongsa Digital Park.",
      "Mengikuti alur belajar bertahap: UI/UX Designer → Frontend Developer → Full Stack Engineer.",
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
  text: "Sarjana Ilmu Komputer, Universitas Pakuan. Membangun dashboard SDM untuk 1.284 pegawai di Badan Bahasa menggunakan Google Apps Script. Fokus di front-end development, UI/UX design, dan penerapan AI.",
};

export const aboutParagraph = {
  text: "Saya Dafa Huda Rifa'i — sarjana Ilmu Komputer Universitas Pakuan. Terbaru, saya membangun dan mengelola dashboard SDM untuk 1.284 pegawai di Badan Pengembangan dan Pembinaan Bahasa. Sebelumnya, melalui MSIB Batch 3 di Infinite Learning, saya melewati alur UI/UX Designer → Frontend Developer → Full Stack Engineer, dan menyelesaikan capstone Fintrack sebagai bagian dari tim. Saya juga menerapkan Fuzzy Logic untuk pemetaan risiko tanah longsor dan peramalan cuaca berbasis IoT.",
  // Kata yang diberi ornamen stabilo di mode gelap (lihat .mark-accent).
  highlights: ["1.284 pegawai", "Fuzzy Logic"],
};
