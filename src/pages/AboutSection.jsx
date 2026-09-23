import { aboutParagraph } from "../data";

const FOCUS = [
  {
    title: "Front-end Development",
    detail: "React, Next.js, Tailwind CSS. Antarmuka bersih dan responsif.",
  },
  {
    title: "UI/UX Design",
    detail: "Design thinking, wireframing, dan prototyping di Figma.",
  },
  {
    title: "IoT & AI",
    detail:
      "Sistem berbasis mikrokontroler dan penerapan AI seperti Fuzzy Logic.",
  },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5" data-reveal>
            <span className="section-label">Tentang</span>
            <h2 className="section-title">Kenalan singkat.</h2>
          </div>
          <div className="md:col-span-7 space-y-8" data-reveal>
            <p className="text-[17px] leading-[1.75] text-[var(--color-ink)]">
              {aboutParagraph.text}
            </p>
            <ul className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-[var(--color-line)]">
              {FOCUS.map((f) => (
                <li key={f.title}>
                  <h3 className="font-sans text-base font-semibold mb-1" style={{ fontFamily: "var(--font-sans)", letterSpacing: 0 }}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {f.detail}
                  </p>
                </li>
              ))}
            </ul>
            <div className="border border-[var(--color-line)] rounded-lg p-5 bg-[var(--color-surface)]">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] mb-2">Posisi yang saya incar</p>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                Front-end Developer atau UI/UX Designer. Terbuka untuk kerja jarak jauh maupun onsite di Jakarta atau Bogor. Tersedia mulai Juni 2026.
              </p>
            </div>
            <p className="text-sm text-[var(--color-muted)]">
              S1 Ilmu Komputer · Universitas Pakuan · 2019–2025 · IPK 3.60
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
