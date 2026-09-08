import { listTools } from "../data";
import { Icon } from "@iconify/react";

const ToolsSection = () => {
  return (
    <div className="tools mt-32 py-25" id="tools">
      <h2 className="text-center text-3xl md:text-4xl/snug font-bold mb-4 fade-in">
        Tools & Tech Stack
      </h2>
      <p className="text-center mx-auto xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 mb-14 fade-in">
        Tech stack yang saya gunakan day-to-day untuk build website dan design.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 fade-in">
        {listTools.map((tool) => (
          <div
            key={tool.id}
            className="flex flex-col items-center gap-3 p-4 bg-zinc-800/50 rounded-xl hover:bg-zinc-800 transition-colors group"
            title={tool.nama}
          >
            <img
              src={tool.gambar}
              alt={tool.nama}
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
              loading="lazy"
            />
            <span className="text-xs text-center text-gray-400">{tool.nama}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
