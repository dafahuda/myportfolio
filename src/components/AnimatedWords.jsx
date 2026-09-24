/**
 * AnimatedWords — teks terungkap kata per kata naik dari balik masker,
 * seperti pada collectiveminds.com.sg. Didesain untuk headline display.
 *
 * Cara pakai:
 *   <AnimatedWords text="Merancang antarmuka yang tidak minta perhatian." />
 *   <AnimatedWords text="... yang ini aksen ..." accent="aksen" />
 *
 * - `accent`: kata (atau frasa yang dipisah spasi persis sama dengan potongan
 *   teks) yang diberi shimmer gradasi aksen, menggantikan warna solid.
 * - Kata dipecah berdasarkan spasi; animasi berjalan berurutan (stagger 60ms).
 * - Menghormati prefers-reduced-motion: teks langsung tampil tanpa animasi.
 */
import { useMemo } from "react";

export default function AnimatedWords({ text, accent = "", className = "", delay = 0 }) {
  const words = useMemo(() => text.split(" "), [text]);
  const accentSet = useMemo(
    () => new Set(accent.split(" ").filter(Boolean)),
    [accent]
  );

  return (
    <span className={`inline-block ${className}`}>
      {words.map((w, i) => {
        const isAccent = accentSet.has(w);
        return (
          <span
            key={`${w}-${i}`}
            className="mr-[0.18em] inline-block overflow-hidden pb-[0.08em] align-bottom"
          >
            <span
              className={`aw-word inline-block ${isAccent ? "aw-accent" : ""}`}
              style={{ animationDelay: `${delay + i * 60}ms` }}
            >
              {w}
            </span>
          </span>
        );
      })}
    </span>
  );
}
