import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx";

import "remixicon/fonts/remixicon.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

// Komponen utama aplikasi
const MainApp = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <PreLoader onFinish={() => setLoading(false)} />
      ) : (
        <div className="container mx-auto px-4 pt-20 md:pt-24">
          <Navbar />
          <App />
          <Footer />
        </div>
      )}
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
