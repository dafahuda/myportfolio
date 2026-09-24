/**
 * HighlightText — menandai frasa di dalam sebuah paragraf dengan <mark>.
 *
 * Dipakai untuk ornamen stabilo di mode gelap (lihat .mark-accent di
 * index.css): blok terracotta dengan teks gelap, hanya tampil saat html.dark.
 * Di mode terang mark transparan sehingga teks tidak berubah.
 *
 * Frasa dicocokkan apa adanya (case-sensitive) dan tidak boleh bertumpuk.
 */
import { useMemo } from "react";

export default function HighlightText({ text, phrases = [], markClass = "mark-accent" }) {
  const parts = useMemo(() => {
    if (!phrases.length) return [{ t: text, mark: false }];
    const pattern = new RegExp(
      `(${phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
      "g"
    );
    return text.split(pattern).map((chunk, i) => ({
      t: chunk,
      mark: phrases.includes(chunk),
      key: i,
    }));
  }, [text, phrases]);

  return (
    <>
      {parts.map((p) =>
        p.mark ? (
          <mark key={p.key} className={markClass}>
            {p.t}
          </mark>
        ) : (
          p.t
        )
      )}
    </>
  );
}
