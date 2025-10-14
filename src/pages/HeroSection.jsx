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
    console.error(
      `GSAP ScrollSmoother not found or target "${target}" does not exist.`,
      error
    );
  }
};

const HeroSection = () => {
  return (
    <div
      id="beranda"
      className="hero grid md:grid-cols-2 item-center xl:gap-0 gap-6 grid-cols-1 pt-4 md:pt-0"
    >
      <img
        src={DataImage.HeroImage}
        alt="Hero Image"
        className="w-full max-w-md md:order-2 md:ml-auto animate__animated animate__fadeInDown animate__delay-1s"
        loading="lazy"
      />
      <div className="animate__animated animate__fadeInUp animate__delay-1s md:order-1">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-10 rounded-md sm:hidden"
            loading="lazy"
          />
          <q>Kode Yang Indah, Lahir Dari Ketakunan.😊</q>
        </div>
        <h1 className="text-4xl md:text-5xl/tight font-bold mb-6">
          Hi I'm <br />
          <p className="text-violet-500 inline-block">
            <TextType
              text={[
                "Dafa Huda Rifa'i",
                "Front-end Developer",
                "UI/UX Designer",
                "Website Developer",
              ]}
              textColors={["text-violet-500"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="▎"
            />
          </p>
        </h1>
        <p className="text-base/loose mb-6 opacity-90">{heroParagraph.text}</p>
        <div className="flex items-center sm:gap-4 gap-2">
          <button
            onClick={goToSection}
            className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 flex items-center gap-2"
          >
            <span>Lihat Proyek</span>
            <Icon icon="lucide:arrow-down" />
          </button>
          <button className="bg-zinc-800 p-4 rounded-2xl hover:bg-zinc-700 flex items-center gap-2">
            <span>Download CV</span>
            <Icon icon="lucide:download" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
