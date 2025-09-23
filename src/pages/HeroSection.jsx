import DataImage from "../data";
import { heroParagraph } from "../data";


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
                        Dafa Huda Rifa'i
          </p>
        </h1>
        <p className="text-base/loose mb-6 opacity-90">{heroParagraph.text}</p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a
            href="#"
            className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
          >
            Download CV <i className="ri-file-download-line ri-lg"></i>
          </a>
          <a
            href="#proyek"
            className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
          >
            Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
