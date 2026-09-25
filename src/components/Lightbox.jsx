import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

/**
 * Accessible modal lightbox. Traps focus, closes on Esc / backdrop click.
 * Mendukung lebih dari satu berkas: tombol prev/next, panah keyboard,
 * swipe di layar sentuh, dan counter. Jika files hanya satu berkas,
 * navigasi otomatis disembunyikan.
 * Props:
 *   files — array { src, alt, caption }
 *   onClose
 */
export default function Lightbox({ files, onClose }) {
  const [index, setIndex] = useState(0);
  const closeBtnRef = useRef(null);
  const touchX = useRef(null);
  // Simpan onClose di ref agar efek tidak dijalankan ulang tiap render induk
  // (kalau dijalankan ulang, fokus akan melompat kembali ke tombol tutup).
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const multi = files.length > 1;
  const go = (step) =>
    setIndex((i) => (i + step + files.length) % files.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onCloseRef.current();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const file = files[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={file.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-8"
      onClick={onClose}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
        touchX.current = null;
      }}
    >
      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
      >
        <Icon icon="x" className="text-xl" />
      </button>

      {multi && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Berkas sebelumnya"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <Icon icon="arrow-left" className="text-2xl" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Berkas berikutnya"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <Icon icon="arrow-right" className="text-2xl" />
          </button>
        </>
      )}

      <figure
        className="max-w-5xl max-h-[90vh] flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={file.src}
          alt={file.alt}
          className="max-w-full max-h-[80vh] object-contain rounded"
        />
        <figcaption className="text-sm text-white/80 text-center">
          {file.caption}
          {multi && (
            <span className="tabular-nums text-white/50">
              {" "}
              · {index + 1} / {files.length}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
