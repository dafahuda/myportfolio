import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// CSS smooth scroll + animations
const style = document.createElement('style');
style.textContent = `
  html {
    scroll-behavior: smooth;
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  .pulse-animation {
    animation: pulse 1s infinite;
  }
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Intersection Observer for fade-in animations
const initFadeAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

const MainApp = () => {
  const [loading, setLoading] = useState(true);

  useGSAP(
    () => {
      if (loading) return;

      // GSAP ScrollTrigger for fade-in (only for elements that need it)
      gsap.utils.toArray(".gsap-fade").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Init CSS fade animations for others
      initFadeAnimations();

      // Cleanup is handled by GSAP ScrollTrigger automatically
    },
    { dependencies: [loading] }
  );

  return (
    <>
      {loading ? (
        <PreLoader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <div>
            <div className="container mx-auto px-4 pt-16 md:pt-20">
              <App />
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
