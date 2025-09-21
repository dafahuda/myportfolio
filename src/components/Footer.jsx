const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-15 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">
        <a href="#beranda">My Portfolio</a>
      </h1>
      <div className="flex gap-5">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#tools">Tools</a>
        <a href="#proyek">Proyek</a>
        <a href="#kontak">Kontak</a>
      </div>
      <span>© {year}</span>
    </div>
  );
};

export default Footer;
