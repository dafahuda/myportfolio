import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconArrowUpRight,
  IconDownload,
  IconMenu2,
  IconMoon,
  IconPhotoOff,
  IconSend,
  IconSun,
  IconX,
} from "@tabler/icons-react";
import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandHtml5,
  IconBrandInstagramFilled,
  IconBrandJavascript,
  IconBrandLinkedinFilled,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  IconFileTextFilled,
  IconMailFilled,
} from "@tabler/icons-react";

/**
 * Satu pembungkus ikon untuk seluruh situs. Semua ikon dari Tabler Icons.
 *
 * Aturan (selaras DESIGN.md):
 *   - Ikon aksi (panah, unduh, tutup, kirim)   -> bergaris, stroke 2px
 *   - Ikon identitas & dokumen (merek, surat)  -> terisi
 *
 * Tabler memakai grid 24px dengan stroke 2px — sama seperti yang dipakai
 * sebelumnya, jadi ukuran dan ketebalan di tombol tidak berubah.
 *
 * Ikon ikut dibundel bersama JS (tidak ada permintaan ke API pihak ketiga)
 * dan mewarisi warna teks di sekitarnya lewat currentColor, sehingga otomatis
 * menyesuaikan latar section: ink di bagian cream, cream di footer gelap.
 *
 * Prop `icon` memakai nama polos, mis. "arrow-up", "linkedin".
 */
const ACTIONS = {
  "arrow-up": IconArrowUp,
  "arrow-down": IconArrowDown,
  "arrow-left": IconArrowLeft,
  "arrow-right": IconArrowRight,
  "arrow-up-right": IconArrowUpRight,
  download: IconDownload,
  "image-off": IconPhotoOff,
  menu: IconMenu2,
  moon: IconMoon,
  send: IconSend,
  sun: IconSun,
  x: IconX,
};

const MARKS = {
  github: IconBrandGithubFilled,
  linkedin: IconBrandLinkedinFilled,
  instagram: IconBrandInstagramFilled,
  envelope: IconMailFilled,
  "file-lines": IconFileTextFilled,
};

// Merek tools di section "Perkakas" — monokrom, mengikuti warna teks.
const TOOLS = {
  "brand-html5": IconBrandHtml5,
  "brand-css3": IconBrandCss3,
  "brand-javascript": IconBrandJavascript,
  "brand-php": IconBrandPhp,
  "brand-react": IconBrandReact,
  "brand-nextjs": IconBrandNextjs,
  "brand-nodejs": IconBrandNodejs,
  "brand-tailwind": IconBrandTailwind,
  "brand-bootstrap": IconBrandBootstrap,
  "brand-mysql": IconBrandMysql,
  "brand-figma": IconBrandFigma,
  "brand-github": IconBrandGithub,
};

export default function Icon({
  icon,
  name,
  size = "1em",
  className = "",
  ...rest
}) {
  const key = name ?? icon;
  const Action = ACTIONS[key];
  const Mark = MARKS[key];
  const Tool = TOOLS[key];
  if (!Action && !Mark && !Tool) return null;

  if (Action) {
    return (
      <Action
        className={className}
        size={size}
        stroke={2}
        aria-hidden="true"
        focusable="false"
        {...rest}
      />
    );
  }

  if (Tool) {
    return (
      <Tool
        className={className}
        size={size}
        stroke={1.5}
        aria-hidden="true"
        focusable="false"
        {...rest}
      />
    );
  }

  return (
    <Mark
      className={className}
      size={size}
      aria-hidden="true"
      focusable="false"
      {...rest}
    />
  );
}
