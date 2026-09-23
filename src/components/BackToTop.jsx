import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

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

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const footerH = document.querySelector("footer")?.offsetHeight ?? 0;
      const footerTop = docH - footerH - winH;

      setVisible(scrollY > 500);
      // Switch to light button when footer (dark section) is in view
      setOverDark(scrollY >= footerTop - 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (reduced) return null;

  // Light section -> dark button. Dark footer -> light button.
  const bg = overDark ? "var(--color-bg)" : "var(--color-ink)";
  const fg = overDark ? "var(--color-ink)" : "var(--color-bg)";

  return (
    <a
      onClick={handleClick}
      aria-label="Kembali ke atas"
      className="fixed right-6 bottom-6 z-40 flex size-12 items-center justify-center rounded-full shadow-lg md:right-10 md:bottom-10"
      style={{
        transform: visible ? "translateY(0)" : "translateY(24px)",
        opacity: visible ? 1 : 0,
        transition: [
          "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          "opacity 0.35s ease",
          "background-color 0.3s ease, color 0.3s ease",
          "box-shadow 0.3s ease",
        ].join(", "),
        pointerEvents: visible ? "auto" : "none",
        backgroundColor: bg,
        color: fg,
      }}
    >
      <Icon icon="lucide:arrow-up" className="size-5" />
    </a>
  );
};

export default BackToTop;
