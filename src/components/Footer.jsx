import Icon from "./Icon";

const LINKS = [
  { href: "https://github.com/dafahuda", icon: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/dafa-huda-rifa-i", icon: "linkedin", label: "LinkedIn" },
  { href: "mailto:dafahudarifai147@gmail.com", icon: "envelope", label: "Email" },
  { href: "/assets/cv/Cv_ATS_Dafa_Huda_Rifai.pdf", icon: "file-lines", label: "CV", download: true },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-footer-bg)] text-[var(--color-footer-fg)] mt-8">
      <div className="container-page py-16 md:py-20 border-b border-white/10" data-reveal>
        <p className="section-label !text-[var(--color-footer-fg)] opacity-60">
          Mari terhubung
        </p>
        <a
          href="mailto:dafahudarifai147@gmail.com"
          className="block font-display hover:text-[var(--color-accent)] transition-colors duration-300"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
          }}
        >
          Bicara soal pekerjaan.
        </a>
        <p className="mt-4 text-sm opacity-60 max-w-md">
          Front-end Developer atau UI/UX Designer. Terbuka untuk remote maupun
          onsite di Jakarta atau Bogor.
        </p>
      </div>
      <div
        className="container-page py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <p className="font-display text-xl" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
            Dafa Huda Rifa&apos;i
          </p>
          <p className="text-sm mt-1 opacity-60">
            © {year} · Dibangun dengan React & Tailwind
          </p>
        </div>
        <ul className="flex flex-wrap gap-4">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                download={l.download || undefined}
                className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <Icon icon={l.icon} />
                <span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
