import Icon from "../components/Icon";
import InlineSvg from "../components/InlineSvg";
import { listMinat } from "../data";
import LogoLoop from "../components/LogoLoop";
import AnimatedWords from "../components/AnimatedWords";

// Marquee di bawah hero memuat BIDANG MINAT, bukan daftar tools — section
// "Perkakas" sudah memuat tools lengkap, marquee menjawab "bidang apa".
// Teks memakai font display (Big Shoulders), pemisah titik tengah terracotta.
const HeroSection = () => {
  const logos = listMinat.map((m) => ({
    node: (
      <span className="hero-marquee-item">
        <span className="hero-marquee-dot" aria-hidden="true">
          ·
        </span>
        {m}
      </span>
    ),
    ariaLabel: m,
  }));

  return (
    <section id="beranda" className="pt-28 md:pt-36 pb-14 md:pb-20">
      <div className="container-page">
        <div className="md:max-w-[75%]">
          <span className="section-label" data-reveal data-reveal-delay="600">
            Front-end Developer · UI/UX Designer
          </span>
          <h1
            className="mt-2 mb-6"
            aria-label="Merancang antarmuka yang tidak minta perhatian."
            style={{
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.015em",
            }}
          >
            <AnimatedWords text="Merancang antarmuka" />
            <br />
            <AnimatedWords text="yang tidak minta" highlight="tidak minta" delay={240} />
            <br />
            <AnimatedWords text="perhatian." delay={480} accent="perhatian." />
          </h1>
          <p className="lead mb-8" data-reveal data-reveal-delay="850">
            Saya Dafa Huda Rifa&apos;i, sarjana Ilmu Komputer Universitas
            Pakuan. Fokus di front-end web, sistem informasi internal, dan
            pemanfaatan alat AI modern untuk mempercepat pengembangan.
          </p>
          <div className="flex flex-wrap items-center gap-3" data-reveal data-reveal-delay="1100">
            <a
              href="/assets/cv/Cv_ATS_Dafa_Huda_Rifai.pdf"
              download
              className="btn btn-primary"
            >
              <Icon icon="download" />
              <span>Unduh CV</span>
            </a>
            <a href="#proyek" className="btn btn-ghost">
              <span>Lihat yang saya kerjakan</span>
              <Icon icon="arrow-down" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24 border-y border-[var(--color-line)] py-4 overflow-hidden text-[var(--color-muted)]">
        <LogoLoop
          logos={logos}
          speed={30}
          direction="left"
          logoHeight={22}
          gap={0}
          pauseOnHover={false}
          scaleOnHover={false}
          fadeOut
          ariaLabel="Bidang yang saya tekuni"
        />
      </div>
    </section>
  );
};

export default HeroSection;
