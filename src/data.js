import HeroImage from "/assets/hero-img.webp";

const Image = { HeroImage };
export default Image;

/* ============================================================
 * Tools & tech stack
 * ============================================================ */
import Tools1 from "/assets/tools/html.svg";
import Tools2 from "/assets/tools/css.svg";
import Tools3 from "/assets/tools/javascript.svg";
import Tools4 from "/assets/tools/php.svg";
import Tools5 from "/assets/tools/react_light.svg";
import Tools6 from "/assets/tools/nextjs.svg";
import Tools7 from "/assets/tools/nodejs.svg";
import Tools8 from "/assets/tools/codeigniter.svg";
import Tools9 from "/assets/tools/tailwindcss.svg";
import Tools10 from "/assets/tools/bootstrap.svg";
import Tools11 from "/assets/tools/mysql.svg";
import Tools12 from "/assets/tools/figma.svg";
import Tools13 from "/assets/tools/canva.svg";
import Tools14 from "/assets/tools/github_dark.svg";

export const listTools = [
  { id: 1, gambar: Tools1, nama: "HTML", ket: "Markup" },
  { id: 2, gambar: Tools2, nama: "CSS", ket: "Styling" },
  { id: 3, gambar: Tools3, nama: "JavaScript", ket: "Bahasa" },
  { id: 4, gambar: Tools4, nama: "PHP", ket: "Bahasa" },
  { id: 5, gambar: Tools5, nama: "React", ket: "Library" },
  { id: 6, gambar: Tools6, nama: "Next.js", ket: "Framework" },
  { id: 7, gambar: Tools7, nama: "Node.js", ket: "Runtime" },
  { id: 8, gambar: Tools8, nama: "CodeIgniter", ket: "Framework" },
  { id: 9, gambar: Tools9, nama: "Tailwind CSS", ket: "Framework" },
  { id: 10, gambar: Tools10, nama: "Bootstrap", ket: "Framework" },
  { id: 11, gambar: Tools11, nama: "MySQL", ket: "Database" },
  { id: 12, gambar: Tools12, nama: "Figma", ket: "Design" },
  { id: 13, gambar: Tools13, nama: "Canva", ket: "Design" },
  { id: 14, gambar: Tools14, nama: "GitHub", ket: "Versioning" },
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

export const listProyek = [
  {
    id: 7,
    thumbnail: Proyek4,
    title: "SIMPEG Dashboard",
    year: "2026",
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
    title: "Website Portfolio",
    year: "2025",
    role: "Solo",
    description:
      "Situs ini. Ditulis ulang dengan React 19, Vite, dan Tailwind untuk tampilan editorial yang lebih tenang dan mudah dipelihara.",
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
      "Platform edukasi keuangan sebagai capstone MSIB. Membantu pengguna memahami manajemen finansial lewat konten interaktif dan informasi ekonomi terkurasi.",
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
      "Platform edukasi untuk mengurangi konflik SARA dengan pendekatan konten yang membangun empati antar kelompok.",
    tools: ["React", "Tailwind CSS"],
    repo: "https://github.com/dafahuda/macro_freedom",
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
      "Konsep website kolaborasi untuk berbagi ide dan menyusun jadwal tim. Prototipe awal berbasis HTML dan Figma.",
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
    name: "Fundamental Junior Network Administrator",
    issuer: "Digital Talent Scholarship",
    date: "2025",
    description:
      "Fundamental jaringan komputer dan administrasi server dasar.",
    imageList: [
      { image: CertJnaSertifikat, text: "Sertifikat" },
      { image: CertJnaNilai, text: "Transkrip" },
    ],
  },
  {
    id: 2,
    name: "Intermediate Junior Network Administrator",
    issuer: "Digital Talent Scholarship",
    date: "2025",
    description:
      "Konfigurasi jaringan tingkat menengah dan layanan server.",
    imageList: [
      { image: CertInaSertifikat, text: "Sertifikat" },
      { image: CertInaNilai, text: "Transkrip" },
    ],
  },
  {
    id: 3,
    name: "Teknisi Drive Tester",
    issuer: "Digital Talent Scholarship",
    date: "2025",
    description:
      "Metodologi drive test dan analisis performa jaringan seluler.",
    imageList: [
      { image: CertDtSertifikat, text: "Sertifikat" },
      { image: CertDtNilai, text: "Transkrip" },
    ],
  },
  {
    id: 4,
    name: "Analisis Teknisi Drive Tester",
    issuer: "Digital Talent Scholarship",
    date: "2025",
    description:
      "Post-processing data drive test untuk optimasi jaringan.",
    imageList: [
      { image: CertAdtSertifikat, text: "Sertifikat" },
      { image: CertAdtNilai, text: "Transkrip" },
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
  text: "Sarjana Ilmu Komputer dengan fokus di front-end development, UI/UX design, dan penerapan AI. Suka merancang antarmuka web yang bersih dan pengalaman pengguna yang tenang.",
};

export const aboutParagraph = {
  text: "Saya Dafa Huda Rifa'i, sarjana Ilmu Komputer dari Universitas Pakuan. Ketertarikan saya berpusat pada tiga hal: front-end development, UI/UX design, dan artificial intelligence — menjembatani teknologi yang kompleks menjadi antarmuka yang mudah dipahami. Pengalaman terbaru mencakup pengelolaan data dan pengembangan dashboard di Badan Pengembangan dan Pembinaan Bahasa, serta MSIB Batch 3 di Infinite Learning yang membawa saya melalui alur UI/UX, front-end, hingga full-stack. Saya juga pernah menerapkan Fuzzy Logic untuk pemetaan risiko dan peramalan cuaca berbasis IoT.",
};
