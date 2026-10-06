import { listTools } from "../data";
import Icon from "../components/Icon";
import InlineSvg from "../components/InlineSvg";

const ToolsSection = () => {
  return (
    <section id="tools" className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5" data-reveal>
            <span className="section-label">Perkakas</span>
            <h2 className="section-title">Perkakas.</h2>
            <p className="lead">
              Yang saya pakai untuk membangun web dan menyusun desain sehari-hari.
            </p>
          </div>
          <ul className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6" data-reveal>
            {listTools.map((t) => (
              <li key={t.id} className="flex items-center gap-3 text-[var(--color-ink)]">
                {t.icon ? (
                  <Icon
                    icon={t.icon}
                    size={30}
                    className="flex-shrink-0"
                  />
                ) : (
                  <InlineSvg
                    markup={t.gambar}
                    size={30}
                    className="flex-shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[var(--color-ink)] truncate">
                    {t.nama}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">{t.ket}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
