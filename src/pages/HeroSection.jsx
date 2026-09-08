import DataImage from "../data";
import { heroParagraph } from "../data";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import TextType from "../components/TextType";
import { Icon } from "@iconify/react";

const goToSection = (e) => {
  e.preventDefault();
  const smoother = ScrollSmoother.get();
  const target = e.currentTarget.getAttribute("href");
  try {
    smoother.scrollTo(target, true);
  } catch (error) {
    // fallback to native scroll
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection = () => {
  return (
    <div
      id="beranda"
      className="hero grid md:grid-cols-2 items-center xl:gap-0 gap-8 grid-cols-1 pt-4 md:pt-0"
    >
      <div className="fade-in md:order-2 md:text-right">
        <img
          src={DataImage.HeroImage}
          alt="Dafa Huda Rifa'i"
          className="w-full max-w-md h-auto md:ml-auto border-4 border-violet-500 rounded-2xl"
          loading="eager"
        />
      </div>

      <div className="fade-in md:order-1 md:text-left">
        <div className="inline-flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <span className="text-2xl">👋</span>
          <q className="text-sm md:text-base">Kode yang Bagus, Lahir Dari Kepercayaan.</q>
        </div>

        <h1 className="text-4xl md:text-5xl/tight font-bold mb-6">
          Hi, I'm <br />
          <span className="text-violet-500 inline-block">
            <TextType
              text={[
                "Dafa Huda",
                "Front-End Dev",
                "UI/UX Designer",
              ]}
              textColors={["text-violet-500"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="▎"
            />
          </span>
        </h1>

        <p className="text-base/loose mb-6 opacity-90 max-w-lg">
          {heroParagraph.text}
        </p>

        <div className="flex items-center sm:gap-4 gap-2 flex-wrap">
          <button
            onClick={goToSection}
            href="#proyek"
            className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 flex items-center gap-2 cursor-pointer transition-colors"
          >
            <span>View Projects</span>
            <Icon icon="lucide:arrow-down" />
          </button>
          <a
            href="mailto:dafahudarifai147@gmail.com?subject=Hi%20Dafa&body=Hi%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
            className="bg-zinc-800 p-4 rounded-2xl hover:bg-zinc-700 flex items-center gap-2 transition-colors"
          >
            <span>Get in Touch</span>
            <Icon icon="lucide:mail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
