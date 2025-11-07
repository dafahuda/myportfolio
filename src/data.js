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
    title: "Website Portfolio",
    description:
      "Website portfolio pribadi yang menampilkan informasi tentang diri saya, keterampilan, proyek, dan cara menghubungi saya.",
    tools: ["HTML", "CSS", "Javascript", "ReactJS", "TailwindCSS"],
    animationDelay: "200",
    imageList: [],
    link: "https://dafahr-myportfolio.vercel.app",
  },
  {
    id: 2,
    thumbnail: Proyek2,
    title: "Bogor Landslide Risk",
    description:
      "Aplikasi web interaktif untuk menampilkan peta batas wilayah Kota Bogor dan perhitungan risiko longsor menggunakan metode Fuzzy Logic.",
    tools: ["HTML", "CSS", "Javascript", "LeafletJS", "ChartJS"],
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
      "Aplikasi web untuk memantau data cuaca secara real-time dari Mini Weather Station menggunakan arduino mega wifi dan website sebagai tampilan data.",
    tools: [
      "HTML",
      "CSS",
      "Javascript",
      "Codeigniter 3",
      "ChartJS",
      "Bootstrap",
      "Arduino Mega Wifi",
    ],
    animationDelay: "400",
    imageList: [{ image: Proyek3, text: "Desain Baru" }],
    link: "#",
  },
  {
    id: 4,
    thumbnail: Proyek4,
    title: "Fintrack",
    description:
      "sebuah permasalahan yang sering dilakukan oleh masyarakat umun yang tidak menggetahui financial dan juga informasi terbaru menggenai dunia perekonomian",
    tools: [
      "HTML",
      "CSS",
      "MongoDB",
      "ExpressJS",
      "ReactJS",
      "NodeJS",
      "TaildwindCSS",
    ],
    animationDelay: "500",
    imageList: [
      { image: Proyek4, text: "Halaman Kursus" },
      { image: Proyek5, text: "Detail Materi" },
    ],
    link: "https://fintrack-ten.vercel.app",
  },
  {
    id: 5,
    thumbnail: Proyek5,
    title: "Freedom",
    description:
      "sebuah ide untuk meminimalisir tindakan rasis atau kejadian yang terjadi bertentangan dengan sosial seperti konflik SARA dengan mengembangkan website yang berfungsi untuk menumbuhkan sebuah rasa empati",
    tools: ["HTML", "CSS", "ReactJS", "TailwindCSS"],
    animationDelay: "600",
    imageList: [{ image: Proyek5, text: "Tampilan Dummy 1" }],
    link: "#",
  },
  {
    id: 6,
    thumbnail: Proyek6,
    title: "Gabungin",
    description:
      "Gabungin.com hadir dengan website  yang memungkinkan diakses dimana saja dan berbagi ide serta jadwal dengan siapa saja",
    tools: ["HTML", "CSS", "JavaScript", "Figma"],
    animationDelay: "700",
    imageList: [{ image: Proyek6, text: "Tampilan Dummy 2" }],
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
      "Sertifikat kelulusan untuk Fundamental Junior Network Administrator.",
    animationDelay: "200",
    imageList: [
      { image: CertJnaSertifikat, text: "Agustus 2025" },
      { image: CertJnaNilai, text: "Transkrip Nilai" },
    ],
  },
  {
    id: 2,
    name: "Intermediate Junior Network Administrator",
    issuer: "Digitalent",
    description:
      "Sertifikat kelulusan untuk Intermediate Junior Network Administrator.",
    animationDelay: "300",
    imageList: [
      { image: CertInaSertifikat, text: "Agustus 2025" },
      { image: CertInaNilai, text: "Transkrip Nilai" },
    ],
  },
  {
    id: 3,
    name: "Teknisi Drive Tester",
    issuer: "Digitalent",
    description: "Sertifikat kelulusan untuk Teknisi Drive Tester.",
    animationDelay: "400",
    imageList: [
      { image: CertDtSertifikat, text: "September 2025" },
      { image: CertDtNilai, text: "Transkrip Nilai" },
    ],
  },
  {
    id: 4,
    name: "Analisis Teknisi Drive Tester",
    issuer: "Digitalent",
    description: "Sertifikat kelulusan untuk Analisis Teknisi Drive Tester.",
    animationDelay: "500",
    imageList: [
      { image: CertAdtSertifikat, text: "Oktober 2025" },
      { image: CertAdtNilai, text: "Transkrip Nilai" },
    ],
  },
  {
    id: 5,
    name: "Microsoft Office Desktop Training",
    issuer: "Trust Training Partners",
    description: "Sertifikat pelatihan Microsoft Office.",
    animationDelay: "600",
    imageList: [
      { image: CertMsSertifikat, text: "September 2019" },
      { image: CertMsNilai, text: "Transkrip Nilai" },
    ],
  },
];

export const heroParagraph = {
  text: "Halo! Saya adalah lulusan Sarjana Ilmu Komputer dengan minat kuat dalam pengembangan Front-End, Desain UI/UX, dan antusiasme terhadap AI. Saya bersemangat dalam menciptakan pengalaman digital yang menarik dan selalu bertekad untuk memberikan solusi terbaik di setiap proyek. Mari berkolaborasi dan mengubah ide-ide luar biasa menjadi kenyataan!",
};

export const aboutParagraph = {
  text: "Halo! Saya Dafa Huda Rifa'i , seorang lulusan Sarjana Ilmu Komputer  yang bersemangat dalam menjembatani data kompleks dengan pengalaman digital yang intuitif. Minat saya ada pada tiga pilar: Front-End Development, UI/UX Design, dan Artificial Intelligence. Saya tidak hanya membuat aplikasi yang terlihat bagus, tetapi juga cerdas. Pengalaman saya mencakup pengembangan web dari ide hingga implementasi, seperti pada MSIB di Infinite Learning , di mana saya mendalami Design Thinking, prototyping Figma , serta pengembangan front-end & back-end. Saya juga telah menerapkan teknik AI seperti Fuzzy Logic dalam proyek pemetaan web dan peramalan cuaca berbasis IoT. Saya bertekad untuk memberikan solusi terbaik di setiap proyek. Mari berkolaborasi dan mengubah ide luar biasa menjadi kenyataan!",
};
