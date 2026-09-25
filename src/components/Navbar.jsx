import { useState, useEffect } from "react";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#tools", label: "Perkakas" },
  { href: "#proyek", label: "Proyek" },
  { href: "#sertifikat", label: "Sertifikat" },
  { href: "#kontak", label: "Kontak" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-line)]"
          : "bg-transparent"
      }`}
      aria-label="Navigasi utama"
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#beranda"
          className="font-display text-lg font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Dafa Huda Rifa&apos;i
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-line)] text-[var(--color-ink)]"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Icon icon={isOpen ? "x" : "menu"} className="text-xl" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-bg)] transition-[max-height] duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="container-page py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-2.5 text-[var(--color-ink)] link-underline"
              onClick={closeMenu}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
