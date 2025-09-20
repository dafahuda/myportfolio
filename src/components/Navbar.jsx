import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#beranda"
            className="hover:text-violet-500 transition-colors"
          >
            Beranda
          </a>
          <a
            href="#tentang"
            className="hover:text-violet-500 transition-colors"
          >
            Tentang
          </a>
          <a href="#tools" className="hover:text-violet-500 transition-colors">
            Tools
          </a>
          <a href="#proyek" className="hover:text-violet-500 transition-colors">
            Proyek
          </a>
          <a href="#kontak" className="hover:text-violet-500 transition-colors">
            Kontak
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <i className="ri-close-line"></i>
          ) : (
            <i className="ri-menu-line"></i>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#beranda"
              className="hover:text-violet-500 transition-colors py-2"
              onClick={closeMenu}
            >
              Beranda
            </a>
            <a
              href="#tentang"
              className="hover:text-violet-500 transition-colors py-2"
              onClick={closeMenu}
            >
              Tentang
            </a>
            <a
              href="#tools"
              className="hover:text-violet-500 transition-colors py-2"
              onClick={closeMenu}
            >
              Tools
            </a>
            <a
              href="#proyek"
              className="hover:text-violet-500 transition-colors py-2"
              onClick={closeMenu}
            >
              Proyek
            </a>
            <a
              href="#kontak"
              className="hover:text-violet-500 transition-colors py-2"
              onClick={closeMenu}
            >
              Kontak
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
