import { Icon } from "@iconify/react";
import DataImage, { heroParagraph } from "../data";

const HeroSection = () => {
  return (
    <section id="beranda" className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="container-page grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-7" data-reveal>
          <span className="section-label">
            Front-end Developer · UI/UX Designer
          </span>
          <h1
            className="mt-2 mb-6"
            style={{
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.015em",
            }}
          >
            Dafa Huda
            <br />
            Rifa&apos;i.
          </h1>
          <p className="lead mb-8">{heroParagraph.text}</p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/assets/cv/Cv_ATS_Dafa_Huda_Rifai.pdf"
              download
              className="btn btn-primary"
            >
              <Icon icon="lucide:download" />
              <span>Unduh CV</span>
            </a>
            <a href="#proyek" className="btn btn-ghost">
              <span>Lihat proyek</span>
              <Icon icon="lucide:arrow-down" />
            </a>
          </div>
        </div>

        <div className="md:col-span-5 order-first md:order-last" data-reveal>
          <div className="relative overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)]">
            <img
              src={DataImage.HeroImage}
              alt="Foto Dafa Huda Rifa'i"
              width="800"
              height="912"
              loading="eager"
              fetchpriority="high"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
