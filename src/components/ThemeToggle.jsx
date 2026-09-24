import Icon from "./Icon";
import { useTheme } from "../hooks/useTheme.js";

/**
 * Tombol mode gelap/terang. Ikon bergaris (Tabler) — aturan Icon.jsx
 * memakai ikon terisi hanya untuk identitas merek, bukan aksi.
 * Tap target 44px (R-03) dan statusnya diumumkan lewat aria-pressed.
 *
 * Saat berganti, ikon baru masuk dengan rotasi singkat (lihat .theme-icon-in
 * di index.css); key berbasis nilai tema supaya React melepas-masang ikon
 * dan animasi terpicu setiap kali ganti.
 */
export default function ThemeToggle({ className = "" }) {
  const { dark, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      title={dark ? "Mode terang" : "Mode gelap"}
      className={`inline-flex items-center justify-center w-11 h-11 rounded-full text-[var(--color-ink)] hover:bg-[var(--color-line)]/60 focus-visible:bg-[var(--color-line)]/60 transition-colors ${className}`}
    >
      <span key={dark ? "sun" : "moon"} className="theme-icon-in">
        <Icon icon={dark ? "sun" : "moon"} className="w-5 h-5" />
      </span>
    </button>
  );
}
