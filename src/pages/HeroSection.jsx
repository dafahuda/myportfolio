import { Icon } from "@iconify/react";
import DataImage from "../data";
import { listTools } from "../data";
import LogoLoop from "../components/LogoLoop";

// Dimensi intrinsik tiap logo (diambil dari viewBox SVG) supaya browser
// tahu ruang yang dibutuhkan sebelum gambar selesai dimuat.
const LOGO_SIZE = {
  HTML: [21, 24], CSS: [24, 24], JavaScript: [24, 24], PHP: [44, 24],
  React: [27, 24], "Next.js": [24, 24], "Node.js": [24, 24], CodeIgniter: [24, 24],
  "Tailwind CSS": [39, 24], Bootstrap: [30, 24], MySQL: [24, 24],
  Figma: [16, 24], Canva: [24, 24], GitHub: [24, 24],
};

const HeroSection = () => {
  const logos = listTools.map((t) => {
    const [width, height] = LOGO_SIZE[t.nama] ?? [24, 24];
    return { src: t.gambar, alt: t.nama, width, height };
  });

  return (
    <section id="beranda" className="pt-28 md:pt-36 pb-14 md:pb-20">
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
            Merancang antarmuka
            <br />
            yang tidak minta
            <br />
            perhatian.
          </h1>
          <p className="lead mb-8">
            Saya Dafa Huda Rifa&apos;i — sarjana Ilmu Komputer Universitas
            Pakuan. Fokus di front-end web, sistem SDM internal, dan penerapan
            AI seperti Fuzzy Logic untuk pemetaan risiko.
          </p>
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
              <span>Lihat yang saya kerjakan</span>
              <Icon icon="lucide:arrow-down" />
            </a>
          </div>
        </div>

        <div className="md:col-span-5 order-first md:order-last" data-reveal>
          <img
            src={DataImage.HeroImage}
            srcSet={`${DataImage.HeroImageSmall} 400w, ${DataImage.HeroImage} 800w`}
            sizes="(min-width: 768px) 40vw, 100vw"
            alt="Foto Dafa Huda Rifa'i"
            width="800"
            height="912"
            loading="eager"
            fetchpriority="high"
            className="w-full h-auto block rounded-lg"
          />
        </div>
      </div>

      <div className="mt-16 md:mt-24 border-y border-[var(--color-line)] py-5 overflow-hidden">
        <LogoLoop
          logos={logos}
          speed={30}
          direction="left"
          logoHeight={24}
          gap={56}
          pauseOnHover={false}
          scaleOnHover={false}
          fadeOut
          fadeOutColor="#F2F1EC"
          ariaLabel="Tools yang saya pakai"
        />
      </div>
    </section>
  );
};

export default HeroSection;
