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
          <ol className="md:col-span-7 space-y-10">
            {experienceList.map((job) => (
              <li
                key={job.id}
                className="pb-10 border-b border-[var(--color-line)] last:border-b-0 last:pb-0"
                data-reveal
              >
                <p className="text-sm text-[var(--color-muted)]">{job.period}</p>
                <h3
                  className="mt-1 text-2xl md:text-3xl"
                  style={{ letterSpacing: "-0.01em", lineHeight: 1.05 }}
                >
                  {job.company}
                </h3>
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
