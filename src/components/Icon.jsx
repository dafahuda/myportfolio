import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Download,
  ImageOff,
  Menu,
  Send,
  X,
} from "lucide-react";
import {
  FaEnvelope,
  FaFileLines,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

/**
 * Satu pembungkus ikon untuk seluruh situs.
 *
 * Aturan (selaras DESIGN.md):
 *   - Ikon aksi (panah, unduh, tutup, kirim)  -> bergaris, dari Lucide
 *   - Ikon identitas & dokumen (merek, surat) -> terisi, dari Font Awesome
 *
 * Ikon ikut dibundel bersama JS, jadi tidak ada permintaan ke API pihak ketiga
 * dan ikon tidak pernah gagal tampil karena jaringan.
 *
 * Nilai yang dipakai: nama polos tanpa awalan, mis. "arrow-up", "linkedin".
 * Ukuran bawaan 1em supaya ikut ukuran teks di sekelilingnya.
 */
const ACTIONS = {
  "arrow-up": ArrowUp,
  "arrow-down": ArrowDown,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  download: Download,
  "image-off": ImageOff,
  menu: Menu,
  send: Send,
  x: X,
};

const MARKS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  envelope: FaEnvelope,
  "file-lines": FaFileLines,
};

export default function Icon({
  icon,
  name,
  size = "1em",
  className = "",
  ...rest
}) {
  const key = name ?? icon;
  const Component = ACTIONS[key] ?? MARKS[key];
  if (!Component) return null;

  return (
    <Component
      className={className}
      size={size}
      aria-hidden="true"
      focusable="false"
      {...rest}
    />
  );
}
