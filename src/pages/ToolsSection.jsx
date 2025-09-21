import { listTools } from "../data";

const ToolsSection = () => {
  const extendedTools = [...listTools, ...listTools];

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
        className="relative w-full overflow-hidden mt-14 group"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="flex w-max animate-infinite-scroll">
          {extendedTools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md bg-zinc-900 hover:bg-zinc-800 w-52 mx-4 flex-shrink-0 force-3d"
            >
              <img
                src={tool.gambar}
                alt={tool.nama}
                className="w-14 bg-zinc-800 p-1 rounded-md"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50 text-sm">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
