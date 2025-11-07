import DataImage from "../data";
import { aboutParagraph, listProyek } from "../data";

const AboutSection = () => {
  return (
    <div className="about mt-32 py-30" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg fade-in">
        <p className="text-4xl md:text-5xl/tight font-bold mb-2">
          Tentang Saya
        </p>
        <p className="text-base/loose mb-10">{aboutParagraph.text}</p>
        <div className="flex items-center justify-between">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md sm:block hidden"
            loading="lazy"
          />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                {listProyek.length}
                <span className="text-violet-500">+</span>
              </h1>
              <p>Proyek Selesai</p>
            </div>

            <div>
              <h1 className="text-4xl mb-1">
                1<span className="text-violet-500">+</span>
              </h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
