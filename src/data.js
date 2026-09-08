import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

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
  {
    id: 1,
    gambar: Tools1,
    nama: "HTML",
    ket: "Markup Language",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "CSS",
    ket: "Styling",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "JavaScript",
    ket: "Programming Language",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "PHP",
    ket: "Programming Language",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "React JS",
    ket: "Framework",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Next JS",
    ket: "Framework",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Runtime",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "CodeIgniter",
    ket: "Framework",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Tailwind CSS",
    ket: "Framework",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Bootstrap",
    ket: "Framework",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "MySQL",
    ket: "Database",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Figma",
    ket: "Design Tool",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Canva",
    ket: "Design Tool",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "GitHub",
    ket: "Repository",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    thumbnail: Proyek1,
    title: "Website Portfolio",
    description:
      "Portfolio pribadi yang menampilkan project, skill, dan info kontak. Dibangun dengan React dan Tailwind CSS.",
    tools: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
    animationDelay: "200",
    imageList: [],
    link: "https://dafahr-myportfolio.vercel.app",
  },
  {
    id: 2,
    thumbnail: Proyek2,
    title: "Bogor Landslide Risk",
    description:
      "Peta interaktif untuk visualisasi batas wilayah Kota Bogor. Menggunakan metode Fuzzy Logic untuk kalkulasi risiko tanah longsor.",
    tools: ["HTML", "CSS", "JavaScript", "Leaflet JS", "Chart.js"],
    animationDelay: "300",
    imageList: [
      { image: Proyek2, text: "Tampilan Utama" },
      { image: Proyek1, text: "Halaman Login" },
      { image: Proyek3, text: "Galeri" },
    ],
    link: "https://dafahuda.github.io/bogor-landslide-risk",
  },
  {
    id: 3,
    thumbnail: Proyek3,
    title: "Mini Weather Station",
    description:
      "Sistem monitoring cuaca real-time dari hardware Arduino Mega WiFi. Data ditampilkan di web app dengan chart interaktif.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "CodeIgniter 3",
      "Chart.js",
      "Bootstrap",
      "Arduino Mega WiFi",
    ],
    animationDelay: "400",
    imageList: [{ image: Proyek3, text: "Dashboard" }],
    link: "#",
  },
  {
    id: 4,
    thumbnail: Proyek4,
    title: "Fintrack",
    description:
      "Platform edukasi keuangan untuk masyarakat. Membantu memahami manajemen finansial dan informasi ekonomi dengan cara yang mudah.",
    tools: [
      "HTML",
      "CSS",
      "MongoDB",
      "Express.js",
      "React JS",
      "Node.js",
      "Tailwind CSS",
    ],
    animationDelay: "500",
    imageList: [
      { image: Proyek4, text: "Halaman Utama" },
      { image: Proyek5, text: "Detail Kursus" },
    ],
    link: "https://fintrack-ten.vercel.app",
  },
  {
    id: 5,
    thumbnail: Proyek5,
    title: "Freedom",
    description:
      "Platform edukasi untuk mengurangi konflik sosial dan SARA. Fokus pada pengembangan empati melalui content yang engage.",
    tools: ["HTML", "CSS", "React JS", "Tailwind CSS"],
    animationDelay: "600",
    imageList: [{ image: Proyek5, text: "Tampilan Utama" }],
    link: "#",
  },
  {
    id: 6,
    thumbnail: Proyek6,
    title: "Gabungin",
    description:
      "Website kolaborasi untuk berbagi ide dan jadwal dengan tim. Bisa diakses dari mana aja, kapan aja.",
    tools: ["HTML", "CSS", "JavaScript", "Figma"],
    animationDelay: "700",
    imageList: [{ image: Proyek6, text: "Interface" }],
    link: "#",
  },
];

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
    issuer: "Digitalent",
    description:
      "Sertifikasi jaringan komputer dasar dari Digitalent, mencakup fundamental networking dan administrasi server.",
    animationDelay: "200",
    imageList: [
      { image: CertJnaSertifikat, text: "Sertifikat" },
      { image: CertJnaNilai, text: "Transkrip Nilai" },
    ],
  },
  {
    id: 2,
    name: "Intermediate Junior Network Administrator",
    issuer: "Digitalent",
    description:
      "Sertifikasi jaringan komputer level intermediate. Menitikberatkan pada konfigurasi jaringan yang lebih kompleks.",
    animationDelay: "300",
    imageList: [
      { image: CertInaSertifikat, text: "Sertifikat" },
      { image: CertInaNilai, text: "Transkrip Nilai" },
    ],
  },
  {
    id: 3,
    name: "Teknisi Drive Tester",
    issuer: "Digitalent",
    description:
      "Sertifikasi untuk teknisi pengetes jaringan seluler. Mencakup metodologi drive test dan analisis performa.",
    animationDelay: "400",
    imageList: [
      { image: CertDtSertifikat, text: "Sertifikat" },
      { image: CertDtNilai, text: "Transkrip Nilai" },
    ],
  },
  {
    id: 4,
    name: "Analisis Teknisi Drive Tester",
    issuer: "Digitalent",
    description:
      "Sertifikasi advanced untuk analisis data drive test. Meliputi post-processing dan optimasi jaringan.",
    animationDelay: "500",
    imageList: [
      { image: CertAdtSertifikat, text: "Sertifikat" },
      { image: CertAdtNilai, text: "Transkrip Nilai" },
    ],
  },
  {
    id: 5,
    name: "Microsoft Office Desktop Training",
    issuer: "Trust Training Partners",
    description:
      "Pelatihan lengkap Microsoft Office: Word, Excel, dan PowerPoint untuk penggunaan profesional.",
    animationDelay: "600",
    imageList: [
      { image: CertMsSertifikat, text: "Sertifikat" },
      { image: CertMsNilai, text: "Transkrip Nilai" },
    ],
  },
];

export const heroParagraph = {
  text: "Lulusan Sarjana Ilmu Komputer dengan fokus di front-end development, UI/UX design, dan AI. Suka bikin tampilan web yang clean dan pengalaman pengguna yang nyaman. Kalau ada ide menarik, yuk ngobrol.",
};

export const aboutParagraph = {
  text: "Hai, saya Dafa Huda Rifa'i. Saya interested di tiga area: front-end development, UI/UX design, dan artificial intelligence. Saya suka jembatanin antara teknologi yang kompleks dengan antarmuka yang mudah dipahami. Pengalaman meliputi pengembangan web dari ide sampai jadi — salah satunya saat MSIB di Infinite Learning, dimana saya belajar design thinking, prototyping Figma, dan development front-end & back-end. Pernah juga implementasi AI kayak Fuzzy Logic untuk proyek pemetaan dan peramalan cuaca berbasis IoT. Kalau ada proyek atau ide yang bisa dikerjakan bareng, langsung aja hubungi.",
};
