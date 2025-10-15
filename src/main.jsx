import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx";



gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

// CSS untuk animasi pulse
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  .pulse-animation {
    animation: pulse 1s infinite;
  }
`;
document.head.appendChild(style);

// Komponen utama aplikasi
const MainApp = () => {
  const [loading, setLoading] = useState(true);

  useGSAP(
    () => {
      if (loading) return; // wait for loading to finish

      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
      });

      // GSAP ScrollTrigger untuk animasi fade-in
      gsap.utils.toArray(".fade-in").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      return () => {
        // cleanup
        if (smoother) smoother.kill();
      };
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
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <div className="container mx-auto px-4 pt-16 md:pt-20">
                <App />
                <Footer />
              </div>
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
