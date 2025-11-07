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
    nama: "Html",
    ket: "Progamming Language",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "CSS",
    ket: "Progamming Language",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Javascript",
    ket: "Progamming Language",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "PHP",
    ket: "Progamming Language",
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
    nama: "Node JS ",
    ket: "Framework",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Codeigniter",
    ket: "Framework",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Taildwind",
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
    nama: "Mysql",
    ket: "Database",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Figma",
    ket: "Design App",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Canva",
    ket: "Design App",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Github",
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
    title: "Website Sekolah",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    animationDelay: "200",
    imageList: [],
  },
  {
    id: 2,
    thumbnail: Proyek2,
    title: "Company Profile",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: [
      "HTML",
      "CSS",
      "Javascript",
      "AOS",
      "Swiper",
      "Lightbox Gallery",
      "Framermotion",
      "Bootstrap",
      "jQuery",
    ],
    animationDelay: "300",
    imageList: [
      { image: Proyek2, text: "Tampilan Utama" },
      { image: Proyek1, text: "Halaman Login" },
      { image: Proyek3, text: "Galeri" },
    ],
  },
  {
    id: 3,
    thumbnail: Proyek3,
    title: "Web Pernikahan 2.0",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    animationDelay: "400",
    imageList: [{ image: Proyek3, text: "Desain Baru" }],
  },
  {
    id: 4,
    thumbnail: Proyek4,
    title: "Website Course",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: [
      "Vite",
      "ReactJS",
      "Bootstrap",
      "AOS",
      "swiper",
      "Lightbox Gallery",
      "Framermotion",
    ],
    animationDelay: "500",
    imageList: [
      { image: Proyek4, text: "Halaman Kursus" },
      { image: Proyek5, text: "Detail Materi" },
    ],
  },
  {
    id: 5,
    thumbnail: Proyek5,
    title: "Proyek Dummy 5",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["ReactJS", "TailwindCSS"],
    animationDelay: "600",
    imageList: [
      { image: Proyek5, text: "Tampilan Dummy 1" },
    ],
  },
  {
    id: 6,
    thumbnail: Proyek6,
    title: "Proyek Dummy 6",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "JavaScript"],
    animationDelay: "700",
    imageList: [
      { image: Proyek6, text: "Tampilan Dummy 2" },
    ],
  },
];

import Sertifikat1 from "/assets/proyek/proyek1.webp";
import Sertifikat2 from "/assets/proyek/proyek2.webp";
import Sertifikat3 from "/assets/proyek/proyek3.webp";
import Sertifikat4 from "/assets/proyek/proyek4.webp";

export const certificateList = [
  {
    id: 1,
    name: "Sertifikat Web Stacks",
    issuer: "Dicoding",
    description: "Sertifikat kelulusan untuk React, JS, dan pengembangan Web.",
    animationDelay: "200",
    imageList: [
      { image: Sertifikat1, text: "Januari 2023" },
      { image: Sertifikat2, text: "React" },
      { image: Sertifikat3, text: "JavaScript" },
      { image: Sertifikat4, text: "HTML/CSS" },
    ],
  },
  {
    id: 2,
    name: "Sertifikat UI/UX Design",
    issuer: "Google",
    description: "Sertifikat kelulusan kursus UI/UX Design menggunakan Figma.",
    animationDelay: "300",
    imageList: [
      { image: Proyek2, text: "Maret 2023" },
      { image: Proyek1, text: "Figma" },
    ],
  },
  {
    id: 3,
    name: "Sertifikat JavaScript",
    issuer: "FreeCodeCamp",
    description: "Sertifikat fundamental untuk bahasa pemrograman JavaScript.",
    animationDelay: "400",
    imageList: [{ image: Proyek3, text: "Mei 2023" }],
  },
  {
    id: 4,
    name: "Sertifikat Web Development",
    issuer: "Udemy",
    description: "Sertifikat kelulusan kursus Web Development dari awal.",
    animationDelay: "500",
    imageList: [
      { image: Proyek4, text: "Juli 2023" },
      { image: Proyek1, text: "Fundamental" },
    ],
  },
  {
    id: 5,
    name: "Sertifikat Frontend Framework",
    issuer: "Coursera",
    description: "Sertifikat untuk penguasaan framework frontend modern.",
    animationDelay: "600",
    imageList: [
      { image: Sertifikat1, text: "Januari 2023" },
      { image: Sertifikat2, text: "React" },
      { image: Sertifikat3, text: "JavaScript" },
      { image: Sertifikat4, text: "HTML/CSS" },
    ],
  },
  {
    id: 6,
    name: "Sertifikat Backend Development",
    issuer: "Dicoding",
    description: "Sertifikat untuk pengembangan sisi server.",
    animationDelay: "700",
    imageList: [{ image: Proyek1, text: "November 2023" }],
  },
  {
    id: 7,
    name: "Sertifikat React Lanjutan",
    issuer: "Udemy",
    description: "Sertifikat React tingkat lanjut dan manajemen state.",
    animationDelay: "200",
    imageList: [
      { image: Proyek6, text: "Desember 2023" },
      { image: Proyek5, text: "Advanced" },
    ],
  },
];

export const heroParagraph = {
  text: "Hello! I am a Bachelor of Computer Science graduate with a strong interest in Front-End development, UI/UX Design, and an enthusiasm for AI. I am passionate about creating engaging digital experiences and am always determined to provide the best solutions in every project. Let's collaborate and turn extraordinary ideas into reality!",
};

export const aboutParagraph = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minima praesentium quo libero rerum quidem maiores nostrum nobis vitae saepe placeat, incidunt perferendis nulla deserunt! A eaque quam ipsum impedit!",
};
