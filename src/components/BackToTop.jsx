import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (reduced) return null;

  return (
    <a
      ref={ref}
      onClick={handleClick}
      aria-label="Kembali ke atas"
      className="fixed right-6 bottom-6 z-40 flex size-12 items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-bg)] shadow-lg transition-all duration-300 hover:bg-[var(--color-accent)] hover:shadow-xl md:right-10 md:bottom-10"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      <Icon icon="lucide:arrow-up" className="size-5" />
    </a>
  );
};

export default BackToTop;
