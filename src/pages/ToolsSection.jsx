import { listTools } from "../data";
import LogoLoop from "../components/LogoLoop";

const ToolsSection = () => {
  const logos = listTools.map((tool) => ({
    src: tool.gambar,
    alt: tool.nama,
  }));

  return (
    <div className="tools mt-32 py-25" id="tools">
      <h1
        className="text-center text-3xl md:text-4xl/snug font-bold mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Tools yang dipakai
      </h1>
      <p
        className="text-center mx-auto xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Berikut ini beberapa tools yang saya pakai untuk pembuatan website
        ataupun desain
      </p>
      <div
        className="w-full overflow-hidden mt-14"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <LogoLoop
          logos={logos}
          speed={100}
          direction="left"
          logoHeight={80}
          gap={40}
          pauseOnHover
          scaleOnHover
          ariaLabel="Tools I use"
        />
      </div>
    </div>
  );
};

export default ToolsSection;
