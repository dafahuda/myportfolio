import { useEffect, useState } from "react";
import Icon from "./Icon";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Muncul setelah scroll melewati hero.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Warna: berubah saat footer gelap berada tepat di belakang tombol.
  // IntersectionObserver lebih presisi daripada hitungan scroll.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      ([entry]) => setOverDark(entry.isIntersecting),
      { rootMargin: "0px 0px -72px 0px", threshold: 0 }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  if (reduced) return null;

  // Di atas section: ikut tema (terang -> tombol ink; gelap -> tombol cream).
  // Di atas footer: footer selalu gelap di kedua tema, jadi tombol selalu cream
  // memakai token footer yang nilainya tetap.
  const bg = overDark ? "var(--color-footer-fg)" : "var(--color-ink)";
  const fg = overDark ? "var(--color-footer-bg)" : "var(--color-bg)";

  return (
    <a
      href="#beranda"
      aria-label="Kembali ke atas"
      className="fixed right-6 bottom-6 z-40 flex size-12 items-center justify-center rounded-full shadow-lg md:right-10 md:bottom-10"
      style={{
        transform: visible ? "translateY(0)" : "translateY(24px)",
        opacity: visible ? 1 : 0,
        transition: [
          "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          "opacity 0.35s ease",
          "background-color 0.3s ease, color 0.3s ease",
        ].join(", "),
        pointerEvents: visible ? "auto" : "none",
        backgroundColor: bg,
        color: fg,
      }}
    >
      <Icon icon="arrow-up" className="size-5" />
    </a>
  );
};

export default BackToTop;
