import { Icon } from "@iconify/react";



/**
 * A card component that displays project or certificate information with a stacking hover effect.
 * @param {{
 *   certificates: { image: string, text: string }[],
 *   title: string,
 *   description: string,
 *   onButtonClick: () => void,
 *   maxVisible?: number
 * }} props
 */
export function CertificateCard({
  certificates,
  title,
  description,
  issuer,
  onButtonClick,
  maxVisible = 4,
  ...rest
}) {
  const visibleCerts = certificates.slice(0, maxVisible);

  return (
    <div
      {...rest}
      className="group relative w-full overflow-visible rounded-2xl bg-zinc-800 shadow-lg transition-all duration-300 hover:shadow-2xl grid grid-rows-[theme(height.56)_1fr]"
    >
      {/* Image Container with Stacking Effect */}
      <div className="relative h-56 overflow-visible">
        {visibleCerts.map((cert, index) => (
          <div
            key={index}
            style={{
              "--i": index,
              zIndex: visibleCerts.length - index,
              transitionDelay: `${index * 50}ms`,
            }}
            className={`absolute inset-0 transition-all duration-500 ease-out
              ${index > 0 ? "opacity-0" : "opacity-100"}
              group-hover:opacity-100
              group-hover:[transform:translateY(calc(var(--i)_*_-50px))]
            `}
          >
            <div className="relative h-full w-full overflow-hidden rounded-t-2xl bg-zinc-800 shadow-xl transition-all duration-500 group-hover:shadow-2xl">
              <img
                src={cert.image || "/placeholder.svg"}
                alt={`${title} - ${cert.text}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 rounded-full bg-zinc-700 px-3 py-1 text-sm font-semibold text-gray-200 shadow-md">
                {cert.text}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="relative p-6 transition-all duration-300 group-hover:pt-8 grid grid-rows-[auto_1fr_auto_auto] gap-4">
        <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-violet-400">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed">{description}</p>
        <p className="text-gray-400 text-sm font-semibold">Issuer: {issuer}</p>

        <button
          onClick={onButtonClick}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-violet-700 px-4 text-sm font-medium text-slate-50 shadow transition-colors hover:bg-violet-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 group-hover:gap-4"
        >
          Lihat Sertifikat
          <Icon icon="lucide:arrow-right" className="h-4 w-4 flex items-center transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
