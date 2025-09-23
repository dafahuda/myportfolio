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
import "remixicon/fonts/remixicon.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

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
