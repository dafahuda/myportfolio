import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUp,
  IconArrowUpRight,
  IconDownload,
  IconMenu2,
  IconPhotoOff,
  IconSend,
  IconX,
} from "@tabler/icons-react";
import {
  IconBrandGithubFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
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
  "arrow-right": IconArrowRight,
  "arrow-up-right": IconArrowUpRight,
  download: IconDownload,
  "image-off": IconPhotoOff,
  menu: IconMenu2,
  send: IconSend,
  x: IconX,
};

const MARKS = {
  github: IconBrandGithubFilled,
  linkedin: IconBrandLinkedinFilled,
  instagram: IconBrandInstagramFilled,
  envelope: IconMailFilled,
  "file-lines": IconFileTextFilled,
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
  if (!Action && !Mark) return null;

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
