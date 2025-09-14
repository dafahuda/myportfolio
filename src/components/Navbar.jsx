import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menutup mobile menu saat window diresize ke ukuran desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fungsi untuk menangani klik pada link navigasi
  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      // Tutup mobile menu
      setMobileMenuOpen(false);
      
      // Scroll ke section dengan offset
      setTimeout(() => {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - navbarHeight - 20; // 20px extra space
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const navLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#tentang", label: "Tentang" },
    { href: "#proyek", label: "Proyek" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <div className={`navbar py-4 md:py-7 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-zinc-900 bg-opacity-90 backdrop-blur-sm py-3 shadow-lg" : ""
    } ${
      mobileMenuOpen ? "bg-zinc-900" : ""
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="logo">
            <h1 className="text-2xl md:text-3xl font-bold text-white">Portfolio</h1>
          </div>
          
          {/* Desktop Menu */}
          <ul className="menu md:flex hidden items-center justify-center gap-4 md:gap-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-base md:text-lg font-medium hover:text-violet-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-white text-2xl focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <i className="ri-close-line"></i>
              ) : (
                <i className="ri-menu-line"></i>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-3 bg-zinc-900 rounded-lg px-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="block py-2 text-base font-medium hover:text-violet-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
