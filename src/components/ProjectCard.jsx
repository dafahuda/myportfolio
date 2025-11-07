import { Icon } from "@iconify/react";

export function ProjectCard({ title, description, thumbnail, tools, link }) {
  const mainImage = thumbnail;
  const isDisabled = !link || link === "#";

  return (
    <div className="group w-full h-full rounded-2xl bg-zinc-800 shadow-lg transition-all duration-300 hover:shadow-2xl flex flex-col">
      <div className="overflow-hidden rounded-t-2xl h-56">
        {mainImage ? (
          <img
            src={mainImage}
            alt={`Gambar untuk proyek ${title}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="bg-gray-700/20 h-full w-full flex flex-col items-center justify-center">
            <Icon icon="lucide:image-off" className="text-5xl text-gray-400" />
            <p className="text-1xl text-gray-500">No Image</p>
          </div>
        )}
      </div>
      <div className="flex-grow flex flex-col p-6 transition-all duration-300 group-hover:pt-8 flex-1 flex-col justify-between">
        <div className="flex-grow flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-violet-400">
            {title}
          </h1>
          <p className="text-base/loose text-gray-300 transition-colors duration-300 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <p
                className="py-1 px-3 border border-zinc-600 bg-zinc-600 rounded-md font-semibold text-white text-sm transition-colors duration-300"
                key={index}
              >
                {tool}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-auto text-center pt-4">
          <a
            href={isDisabled ? undefined : link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-violet-700 px-4 text-sm font-medium text-slate-50 shadow transition-colors hover:bg-violet-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 group-hover:gap-4 ${
              isDisabled && "opacity-50 pointer-events-none"
            }`}
          >
            Lihat Website
            <Icon
              icon="lucide:arrow-right"
              className="h-4 w-4 flex items-center transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
