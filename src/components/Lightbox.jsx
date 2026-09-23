import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

/**
 * Accessible modal lightbox. Traps focus, closes on Esc / backdrop click.
 * Props:
 *   src, alt, caption, onClose
 */
export default function Lightbox({ src, alt, caption, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-8"
      onClick={onClose}
    >
      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
      >
        <Icon icon="lucide:x" className="text-xl" />
      </button>
      <figure
        className="max-w-5xl max-h-[90vh] flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[80vh] object-contain rounded"
        />
        {caption && (
          <figcaption className="text-sm text-white/80 text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
