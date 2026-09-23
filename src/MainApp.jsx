import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { useReveal } from "./hooks/useReveal.js";

export default function MainApp() {
  useReveal();
  return (
    <>
      <a
        href="#beranda"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[var(--color-ink)] focus:text-[var(--color-bg)] focus:px-4 focus:py-2 focus:rounded"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <main>
        <App />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
