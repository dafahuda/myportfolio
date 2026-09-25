import { useEffect } from "react";

/**
 * Global reveal-on-scroll hook.
 * Mount once (in the app root). Any element with `data-reveal` fades up when
 * it enters the viewport. Respects prefers-reduced-motion.
 *
 * Stagger: elemen yang masuk viewport dalam satu batch diberi delay
 * bertingkat (index dalam batch × 90ms) supaya konten muncul berurutan
 * lembut, bukan serentak kaku — pola scroll-reveal collectiveminds.
 */
export function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targets = document.querySelectorAll("[data-reveal]");

    if (prefersReduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => {
        el.classList.add("is-visible");
        el.style.transitionDelay = "0ms";
      });
      return;
    }

    targets.forEach((el) => el.classList.add("reveal"));

    let staggerIndex = 0;
    let staggerTimer = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // Batch: elemen yang tampil hampir bersamaan diberi delay
          // bertingkat, lalu counter direset setelah jeda singkat.
          entry.target.style.transitionDelay = `${Math.min(staggerIndex, 3) * 90}ms`;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
          staggerIndex += 1;
        });

        if (staggerTimer) clearTimeout(staggerTimer);
        staggerTimer = setTimeout(() => {
          staggerIndex = 0;
        }, 350);
      },
      { threshold: 0.12, rootMargin: "0px 0px -20px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      if (staggerTimer) clearTimeout(staggerTimer);
    };
  }, []);
}
