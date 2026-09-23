/**
 * Menanam berkas SVG langsung ke dalam DOM (bukan lewat <img>) supaya
 * `currentColor` di dalam berkas benar-benar mewarisi warna teks.
 *
 * Dipakai untuk dua merek tools yang tidak tersedia di Tabler
 * (CodeIgniter dan Canva) — berkasnya sudah diseragamkan jadi monokrom.
 *
 * Markup-nya berasal dari aset statis milik repo ini sendiri, bukan dari
 * masukan pengguna, jadi aman dirender sebagai HTML.
 */
export default function InlineSvg({ markup, size = 30, className = "", label }) {
  return (
    <span
      className={`inline-svg ${className}`}
      style={{ width: size, height: size }}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
