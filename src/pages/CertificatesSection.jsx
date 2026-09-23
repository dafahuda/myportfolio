import { useRef, useState } from "react";
import { certificateList, certificateExtras } from "../data";
import Lightbox from "../components/Lightbox";

const CertificatesSection = () => {
  const [box, setBox] = useState(null);
  // Simpan tombol pemicu supaya fokus bisa dikembalikan setelah lightbox ditutup.
  const triggerRef = useRef(null);

  const openBox = (payload) => (event) => {
    triggerRef.current = event.currentTarget;
    setBox(payload);
  };

  const closeBox = () => {
    setBox(null);
    // Tunggu React selesai unmount, baru pindahkan fokus kembali.
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <section id="sertifikat" className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14">
          <div className="md:col-span-5" data-reveal>
            <span className="section-label">Sertifikat</span>
            <h2 className="section-title">Pelatihan tersertifikasi.</h2>
          </div>
          <div className="md:col-span-7" data-reveal>
            <p className="lead">
              Pelatihan yang saya selesaikan — sebagian dengan berkas lengkap,
              sebagian sebagai catatan referensi.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificateList.map((c) => {
            const cover = c.imageList[0];
            return (
              <li key={c.id} data-reveal>
                <button
                  type="button"
                  onClick={openBox({
                    src: cover.image,
                    alt: `${c.name} — ${cover.text}`,
                    caption: `${c.name} · ${c.issuer}`,
                  })}
                  className="card overflow-hidden text-left w-full h-full flex flex-col group"
                >
                  <div className="aspect-[4/3] overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg)]">
                    <img
                      src={cover.image}
                      alt={`Sampul ${c.name}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="text-lg mb-1"
                      style={{
                        fontFamily: "var(--font-sans)",
                        letterSpacing: 0,
                        lineHeight: 1.3,
                        fontWeight: 600,
                      }}
                    >
                      {c.name}
                    </h3>
                    <p className="text-xs text-[var(--color-muted)]">
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        {certificateExtras.length > 0 && (
          <div className="mt-14 pt-10 border-t border-[var(--color-line)]" data-reveal>
            <p className="section-label mb-4">Referensi lain</p>
            <ul className="divide-y divide-[var(--color-line)]">
              {certificateExtras.map((c) => (
                <li key={c.id} className="py-3 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-[15px] font-medium">{c.name}</p>
                    <p className="text-xs text-[var(--color-muted)]">{c.issuer}</p>
                  </div>
                  <span className="text-xs text-[var(--color-muted)] font-mono">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {box && <Lightbox {...box} onClose={closeBox} />}
    </section>
  );
};

export default CertificatesSection;
