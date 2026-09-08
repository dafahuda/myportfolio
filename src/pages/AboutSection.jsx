import DataImage from "../data";
import { aboutParagraph, listProyek } from "../data";

const AboutSection = () => {
  return (
    <div className="about mt-32 py-30" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg fade-in">
        <h2 className="text-3xl md:text-4xl/tight font-bold mb-6">
          About Me
        </h2>
        <p className="text-base/loose mb-10 leading-relaxed">
          {aboutParagraph.text}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-6">
          <img
            src={DataImage.HeroImage}
            alt="Profile"
            className="w-14 rounded-md hidden sm:block"
            loading="lazy"
          />

          <div className="flex items-center gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold">
                {listProyek.length}
                <span className="text-violet-500">+</span>
              </h3>
              <p className="text-sm text-gray-400">Projects</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold">
                2
                <span className="text-violet-500">+</span>
              </h3>
              <p className="text-sm text-gray-400">Years Exp.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
