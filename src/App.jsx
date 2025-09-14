import { useState } from "react";
import DataImage from "./data";
import {
  listTools,
  listProyek,
  listSertifikat,
  heroParagraph,
  aboutParagraph,
} from "./data";
import { TypeAnimation } from "react-type-animation";

function App() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeTab, setActiveTab] = useState("projects"); // 'projects' atau 'certificates'
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const projectsToShow = listProyek.slice(0, visibleProjects);
  const certificatesToShow = listSertifikat.slice(0, visibleProjects);

  const openLightbox = (sertifikat) => {
    setSelectedCertificate(sertifikat);
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
    setSelectedCertificate(null);
  };

  return (
    <>
      <div className="hero grid md:grid-cols-2 item-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-4s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Kode Yang Indah, Lahir Dari Ketakunan.😊</q>
          </div>
          <h1 className="text-4xl md:text-5xl/tight font-bold mb-6">
            Hi I'm{" "}
            <TypeAnimation
              sequence={[
                "Dafa Huda Rifa'i",
                1000,
                "UI/UX Designer",
                1000,
                "Front-end Developer",
                1000,
                "Back-end Developer",
                1000,
              ]}
              wrapper="span"
              speed={{ type: "keyStrokeDelayInMs", value: 250 }}
              deletionSpeed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            {heroParagraph.text}
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-file-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-full max-w-md md:ml-auto animate__animated animate__fadeInDown animate__delay-5s"
          loading="lazy"
        />
      </div>

      {/* Tentang */}
      <div
        className="about mt-32 py-10 scroll-mt-20 md:scroll-mt-0"
        id="tentang"
      >
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">{aboutParagraph.text}</p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  {listProyek.length}
                  <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>

              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-3xl md:text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Berikut ini beberapa tools yang saya pakai untuk pembuatan website
            ataupun desain
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1
                group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Proyek */}
      <div
        className="proyek mt-32 py-10 scroll-mt-20 md:scroll-mt-0"
        id="proyek"
      >
        <h1
          className="text-center text-3xl md:text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Proyek & Sertifikat
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut ini beberapa proyek dan sertifikat yang sudah saya dapatkan
        </p>

        {/* Tab Navigation */}
        <div
          className="flex justify-center mt-8 gap-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <button
            onClick={() => {
              setActiveTab("projects");
              setVisibleProjects(6);
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "projects"
                ? "bg-violet-700 text-white"
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            Proyek
          </button>
          <button
            onClick={() => {
              setActiveTab("certificates");
              setVisibleProjects(6);
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "certificates"
                ? "bg-violet-700 text-white"
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            Sertifikat
          </button>
        </div>

        {/* Tab Content */}
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {activeTab === "projects"
            ? projectsToShow.map((proyek) => (
                <div
                  key={proyek.id}
                  className="p-4 bg-zinc-800 rounded-lg flex flex-col h-full"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={proyek.dad}
                  data-aos-once="true"
                >
                  <div className="overflow-hidden rounded-lg h-48 mb-4">
                    <img
                      src={proyek.gambar}
                      alt="Proyek Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyek.tools.map((tool, index) => (
                      <p
                        className="py-1 px-3 border border-zinc-600 bg-zinc-600 rounded-md font-semibold"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div className="mt-auto text-center">
                    <a
                      href="#"
                      className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                    >
                      Lihat Website
                    </a>
                  </div>
                </div>
              ))
            : certificatesToShow.map((sertifikat) => (
                <div
                  key={sertifikat.id}
                  className="p-4 bg-zinc-800 rounded-lg flex flex-col h-full"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={sertifikat.dad}
                  data-aos-once="true"
                >
                  <div className="overflow-hidden rounded-lg h-48 mb-4">
                    {sertifikat.gambar ? (
                      <img
                        src={sertifikat.gambar}
                        alt="Sertifikat Image"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                        <i className="ri-file-text-line text-5xl text-gray-400"></i>
                      </div>
                    )}
                  </div>
                  <h1 className="text-2xl font-bold my-4">{sertifikat.nama}</h1>
                  <p className="text-base/loose mb-4">{sertifikat.desk}</p>
                  <div className="mt-auto">
                    <p className="text-sm opacity-75 mb-4">
                      Diterbitkan: {sertifikat.tanggal}
                    </p>
                    <div className="text-center">
                      <button
                        onClick={() => openLightbox(sertifikat)}
                        className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 w-full"
                      >
                        Lihat Sertifikat
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Pagination Controls */}
        <div>
          {activeTab === "projects" ? (
            <>
              {visibleProjects < listProyek.length && (
                <div
                  className="text-center mt-8"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  <button
                    onClick={() =>
                      setVisibleProjects((prevCount) => prevCount + 3)
                    }
                    className="flex items-center justify-center gap-2 text-violet-800 hover:text-white cursor-pointer mx-auto group"
                  >
                    Lihat Lebih Banyak
                    <span className="animate__animated animate__heartBeat animate__infinite">
                      <i className="ri-arrow-down-double-line ri-2x group-hover:text-white"></i>
                    </span>
                  </button>
                </div>
              )}
              {visibleProjects >= listProyek.length &&
                listProyek.length > 6 && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => {
                        setVisibleProjects(6);
                        document
                          .getElementById("proyek")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-white-800 hover:text-violet-800 cursor-pointer gap-2"
                    >
                      Tampilkan Lebih Sedikit
                      <i className="ri-arrow-up-double-line ri-xl"></i>
                    </button>
                  </div>
                )}
            </>
          ) : (
            <>
              {visibleProjects < listSertifikat.length && (
                <div
                  className="text-center mt-8"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  <button
                    onClick={() =>
                      setVisibleProjects((prevCount) => prevCount + 3)
                    }
                    className="flex items-center justify-center gap-2 text-violet-800 hover:text-white cursor-pointer mx-auto group"
                  >
                    Lihat Lebih Banyak
                    <span className="animate__animated animate__heartBeat animate__infinite">
                      <i className="ri-arrow-down-double-line ri-2x group-hover:text-white"></i>
                    </span>
                  </button>
                </div>
              )}
              {visibleProjects >= listSertifikat.length &&
                listSertifikat.length > 6 && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => {
                        setVisibleProjects(6);
                        document
                          .getElementById("proyek")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-white-800 hover:text-violet-800 cursor-pointer gap-2"
                    >
                      Tampilkan Lebih Sedikit
                      <i className="ri-arrow-up-double-line ri-xl"></i>
                    </button>
                  </div>
                )}
            </>
          )}
        </div>
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div
        className="kontak mt-32 sm:p-10 p-0 scroll-mt-28 md:scroll-mt-0"
        id="kontak"
      >
        <h1
          className="text-center text-3xl md:text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Mari Terhubung dengan saya.
        </p>

        <div
          className="grid lg:grid-cols-2 gap-10 mt-14"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {/* Informasi Kontak */}
          <div className="bg-zinc-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <i className="ri-mail-line ri-xl text-violet-500 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="opacity-75">dafahudarifai147@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="ri-map-pin-line ri-xl text-violet-500 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg">Lokasi</h3>
                  <p className="opacity-75">Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="ri-links-line ri-xl text-violet-500 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg">Media Sosial</h3>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className="bg-zinc-700 p-3 rounded-lg hover:bg-violet-600 transition-colors"
                    >
                      <i className="ri-github-line ri-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-zinc-700 p-3 rounded-lg hover:bg-violet-600 transition-colors"
                    >
                      <i className="ri-linkedin-line ri-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-zinc-700 p-3 rounded-lg hover:bg-violet-600 transition-colors"
                    >
                      <i className="ri-instagram-line ri-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="bg-zinc-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
            <form
              action="https://formsubmit.co/dafahudarifai147@gmail.com"
              method="POST"
              autoComplete="off"
            >
              <div className="space-y-6">
                <div>
                  <label className="font-semibold block mb-2">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
                      <i className="ri-user-line"></i>
                    </div>
                    <input
                      type="text"
                      name="nama"
                      placeholder="Masukkan Nama"
                      required
                      className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold block mb-2">E-mail</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
                      <i className="ri-mail-line"></i>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Masukkan E-mail"
                      required
                      className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold block mb-2">Pesan</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-zinc-400">
                      <i className="ri-edit-line"></i>
                    </div>
                    <textarea
                      name="pesan"
                      id="pesan"
                      rows="5"
                      placeholder="Tulis pesan Anda..."
                      required
                      className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-violet-700 p-3 rounded-lg font-semibold hover:bg-violet-600 transition-colors"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Kontak */}

      {lightboxVisible && selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCertificate.gambar}
              alt={selectedCertificate.nama}
              className="w-full h-full object-contain lightbox-image"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white bg-zinc-800 rounded-full p-2 leading-none"
            >
              <i className="ri-close-line ri-xl"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
