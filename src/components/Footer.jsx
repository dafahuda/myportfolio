const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-15 py-8 border-t border-zinc-800 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">
        <a href="#beranda" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-violet-400 transition-colors">
          Dafa.dev
        </a>
      </h1>
      <div className="flex gap-6 text-sm text-gray-400">
        <a href="#beranda" onClick={(e) => { e.preventDefault(); document.querySelector("#beranda")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-white transition-colors">Home</a>
        <a href="#tentang" onClick={(e) => { e.preventDefault(); document.querySelector("#tentang")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-white transition-colors">About</a>
        <a href="#tools" onClick={(e) => { e.preventDefault(); document.querySelector("#tools")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-white transition-colors">Tools</a>
        <a href="#proyek" onClick={(e) => { e.preventDefault(); document.querySelector("#proyek")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-white transition-colors">Projects</a>
        <a href="#kontak" onClick={(e) => { e.preventDefault(); document.querySelector("#kontak")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-white transition-colors">Contact</a>
      </div>
      <span className="text-sm text-gray-500">© {year} Dafa Huda</span>
    </div>
  );
};

export default Footer;
