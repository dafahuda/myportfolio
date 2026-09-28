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
    <section id="beranda" className="min-h-[100svh] flex flex-col">
      <div className="container-page flex-1 flex items-center pt-24 md:pt-28 pb-8">
        <div className="md:max-w-[90%]">
          <span className="section-label hero-rise" style={{ animationDelay: "600ms" }}>
            Front-end Developer · UI/UX Designer
          </span>
          <h1
            className="mt-3 font-extrabold"
            aria-label="Merancang antarmuka yang tidak minta perhatian."
            style={{
              fontSize: "clamp(2.5rem, min(8vw, 10.5vh), 6.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
              marginBottom: "clamp(1rem, 3vh, 2rem)",
            }}
          >
            <AnimatedWords text="Merancang antarmuka" className="mb-1" />
            <br />
            <AnimatedWords text="yang tidak minta" className="mb-1" delay={240} />
            <br />
            <AnimatedWords text="perhatian." delay={480} accent="perhatian." />
          </h1>
          <p className="lead text-[18px] md:text-[19px] leading-[1.7] hero-rise" style={{ marginBottom: "clamp(1.25rem, 3.5vh, 2.5rem)", animationDelay: "850ms" }}>
            Saya Dafa Huda Rifa&apos;i, sarjana Ilmu Komputer Universitas
            Pakuan. Fokus di front-end web, sistem informasi internal, dan
            pemanfaatan alat AI modern untuk mempercepat pengembangan.
          </p>
          <div className="flex flex-wrap items-center gap-3 hero-rise" style={{ animationDelay: "1100ms" }}>
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

      <div className="border-y border-[var(--color-line)] py-4 overflow-hidden text-[var(--color-muted)]">
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
