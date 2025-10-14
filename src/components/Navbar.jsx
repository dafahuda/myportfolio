import { useState } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fungsi untuk menangani klik navigasi & memicu ScrollSmoother
  const goToSection = (e) => {
    e.preventDefault();
    const smoother = ScrollSmoother.get();
    const target = e.currentTarget.getAttribute("href");
    try {
      smoother.scrollTo(target, true);
    } catch (error) {
      console.error(
        `GSAP ScrollSmoother not found or target "${target}" does not exist.`,
        error
      );
    }
  };

  // Fungsi gabungan untuk menu mobile
  const handleMobileLinkClick = (e) => {
    closeMenu();
    goToSection(e);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-5 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <a href="#beranda" onClick={goToSection}>
            <p>My Portfolio</p>
          </a>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#beranda"
            className="hover:text-violet-500 transition-colors"
            onClick={goToSection}
          >
            Beranda
          </a>
          <a
            href="#tentang"
            className="hover:text-violet-500 transition-colors"
            onClick={goToSection}
          >
            Tentang
          </a>
          <a
            href="#tools"
            className="hover:text-violet-500 transition-colors"
            onClick={goToSection}
          >
            Tools
          </a>
          <a
            href="#proyek"
            className="hover:text-violet-500 transition-colors"
            onClick={goToSection}
          >
            Proyek
          </a>
          <a
            href="#kontak"
            className="hover:text-violet-500 transition-colors"
            onClick={goToSection}
          >
            Kontak
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <Icon icon="lucide:x" />
          ) : (
            <Icon icon="lucide:menu" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute w-full left-0 bg-zinc-900/90 backdrop-blur-sm transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "top-16" : "-top-96"
        }`}
      >
        <div className="flex flex-col space-y-4 p-5">
          <a
            href="#beranda"
            className="hover:text-violet-500 transition-colors py-2"
            onClick={handleMobileLinkClick}
          >
            Beranda
          </a>
          <a
            href="#tentang"
            className="hover:text-violet-500 transition-colors py-2"
            onClick={handleMobileLinkClick}
          >
            Tentang
          </a>
          <a
            href="#tools"
            className="hover:text-violet-500 transition-colors py-2"
            onClick={handleMobileLinkClick}
          >
            Tools
          </a>
          <a
            href="#proyek"
            className="hover:text-violet-500 transition-colors py-2"
            onClick={handleMobileLinkClick}
          >
            Proyek
          </a>
          <a
            href="#kontak"
            className="hover:text-violet-500 transition-colors py-2"
            onClick={handleMobileLinkClick}
          >
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
