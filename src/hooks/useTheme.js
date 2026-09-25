import { useCallback, useEffect, useState } from "react";

/**
 * Sumber kebenaran tema situs. Satu tempat untuk:
 *   - state light/dark (default: preferensi OS)
 *   - persistensi pilihan pengguna di localStorage("theme")
 *   - sinkronisasi lintas tab lewat event "storage"
 *
 * Kelas .dark dipasang pada <html> oleh skrip anti-FOUC di index.html
 * sebelum React render, jadi di sini cukup menyinkronkan state React.
 */
export function useTheme() {
  const [dark, setDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.style.colorScheme = dark ? "dark" : "light";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#1A1815" : "#F2F1EC");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* localStorage bisa diblokir — abaikan, tema tetap bekerja */
    }
  }, [dark]);

  // Ikuti perubahan OS selama pengguna belum memilih sendiri.
  useEffect(() => {
    let chose = false;
    try {
      chose = localStorage.getItem("theme") !== null;
    } catch {
      /* diabaikan */
    }
    if (chose) return undefined;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => setDark(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Sinkron antar tab.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== "theme") return;
      setDark(e.newValue === "dark");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = useCallback(() => setDark((d) => !d), []);

  return { dark, toggle };
}
