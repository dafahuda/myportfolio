import { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur-sm">
      <div className="container mx-auto px-5 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <a href="#beranda" onClick={scrollToTop} className="hover:text-violet-400 transition-colors">
            Dafa.dev
          </a>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#beranda" onClick={scrollToSection} className="hover:text-violet-400 transition-colors">
            Home
          </a>
          <a href="#tentang" onClick={scrollToSection} className="hover:text-violet-400 transition-colors">
            About
          </a>
          <a href="#tools" onClick={scrollToSection} className="hover:text-violet-400 transition-colors">
            Tools
          </a>
          <a href="#proyek" onClick={scrollToSection} className="hover:text-violet-400 transition-colors">
            Projects
          </a>
          <a href="#kontak" onClick={scrollToSection} className="hover:text-violet-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <Icon icon="lucide:x" /> : <Icon icon="lucide:menu" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute w-full left-0 bg-zinc-900/95 backdrop-blur-sm transition-all duration-300 md:hidden ${isMenuOpen ? "top-16" : "-top-96"}`}>
        <div className="flex flex-col space-y-1 p-5">
          <a href="#beranda" onClick={scrollToSection} className="hover:text-violet-400 transition-colors py-3 px-4 rounded-lg hover:bg-zinc-800">
            Home
          </a>
          <a href="#tentang" onClick={scrollToSection} className="hover:text-violet-400 transition-colors py-3 px-4 rounded-lg hover:bg-zinc-800">
            About
          </a>
          <a href="#tools" onClick={scrollToSection} className="hover:text-violet-400 transition-colors py-3 px-4 rounded-lg hover:bg-zinc-800">
            Tools
          </a>
          <a href="#proyek" onClick={scrollToSection} className="hover:text-violet-400 transition-colors py-3 px-4 rounded-lg hover:bg-zinc-800">
            Projects
          </a>
          <a href="#kontak" onClick={scrollToSection} className="hover:text-violet-400 transition-colors py-3 px-4 rounded-lg hover:bg-zinc-800">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
