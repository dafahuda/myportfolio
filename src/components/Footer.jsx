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
      <div
        className="container-page py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        data-reveal
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
