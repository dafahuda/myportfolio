import { Icon } from "@iconify/react";

const STATUS_LABEL = {
  live: "Live",
  archived: "Arsip",
  private: "Internal",
  internal: "Internal",
};

export function ProjectCard({
  title,
  year,
  role,
  description,
  thumbnail,
  tools,
  link,
  repo,
  status,
}) {
  const hasDemo = link && link !== "#";
  const hasRepo = repo && repo !== "#";

  return (
    <article className="card overflow-hidden flex flex-col h-full">
      <div className="aspect-[16/10] overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg)]">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={`Cuplikan proyek ${title}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--color-muted)]">
            <Icon icon="lucide:image-off" className="text-4xl" />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <h3
            className="text-2xl"
            style={{ letterSpacing: "-0.005em", lineHeight: 1.05 }}
          >
            {title}
          </h3>
          <span className="text-xs text-[var(--color-muted)] font-mono flex-shrink-0">
            {year}
          </span>
        </div>

        <p className="text-xs text-[var(--color-muted)] mb-4">
          {role}
          {status && (
            <>
              <span className="mx-2">·</span>
              <span>{STATUS_LABEL[status] || status}</span>
            </>
          )}
        </p>

        <p className="text-[15px] leading-relaxed text-[var(--color-ink)] mb-5">
          {description}
        </p>

        <p className="text-xs text-[var(--color-muted)] mb-6">
          {tools.join(" · ")}
        </p>

        <div className="mt-auto flex items-center gap-5 text-sm">
          {hasDemo && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 font-medium"
            >
              <span>Demo</span>
              <Icon icon="lucide:arrow-up-right" className="w-4 h-4" />
            </a>
          )}
          {hasRepo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 font-medium"
            >
              <span>Repo</span>
              <Icon icon="lucide:github" className="w-4 h-4" />
            </a>
          )}
          {!hasDemo && !hasRepo && (
            <span className="text-[var(--color-muted)] text-sm">
              Tidak dipublikasikan
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
