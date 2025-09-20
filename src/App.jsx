import { useState } from "react";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import ToolsSection from "./pages/ToolsSection";
import ProjectsSection from "./pages/ProjectsSection";
import ContactSection from "./pages/ContactSection";

function App() {
  return (
    <>
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <ToolsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
