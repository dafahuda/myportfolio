import { experienceList } from "../data";

const ExperienceSection = () => {
  return (
    <section id="pengalaman" className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5" data-reveal>
            <span className="section-label">Pengalaman</span>
            <h2 className="section-title">Jejak kerja.</h2>
            <p className="lead">
              Dua tempat yang membentuk cara saya mendekati produk digital.
            </p>
          </div>
          <ol className="md:col-span-7">
            {experienceList.map((job) => (
              <li
                key={job.id}
                className="group border-b border-[var(--color-line)] py-8 first:pt-0 last:border-b-0 transition-colors duration-300 hover:border-[var(--color-accent)]"
                data-reveal
              >
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="text-3xl md:text-4xl transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-x-2"
                    style={{ letterSpacing: "-0.01em", lineHeight: 1.05 }}
                  >
                    {job.company}
                  </h3>
                  <span
                    className="font-display text-2xl md:text-3xl text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-accent)] flex-shrink-0"
                    style={{ fontFamily: "var(--font-display)", lineHeight: 1.05 }}
                    aria-label={job.period}
                  >
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-base font-medium text-[var(--color-ink)]">
                  {job.role}
                  <span className="text-[var(--color-muted)] font-normal">
                    {" "}
                    · {job.location}
                  </span>
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-[var(--color-ink)]">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 rounded-full bg-[var(--color-accent)] flex-shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {job.stack && (
                  <p className="mt-4 text-sm text-[var(--color-muted)]">
                    {job.stack.join(" · ")}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
