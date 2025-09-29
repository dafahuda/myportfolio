import { useState } from "react";
import { listProyek, listSertifikat } from "../data";

const ProjectsSection = () => {
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
      <div className="proyek mt-32 py-25" id="proyek">
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
            className={`px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium ${
              activeTab === "projects"
                ? "bg-violet-700 text-white"
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            {activeTab === "projects" ? (
              <i className="ri-gallery-view ri-lg"></i>
            ) : (
              <i className="ri-gallery-view-2 ri-lg"></i>
            )}
            <span>Proyek</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("certificates");
              setVisibleProjects(6);
            }}
            className={`px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium ${
              activeTab === "certificates"
                ? "bg-violet-700 text-white"
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            {activeTab === "certificates" ? (
              <i className="ri-verified-badge-fill ri-lg"></i>
            ) : (
              <i className="ri-verified-badge-line ri-lg"></i>
            )}
            <span>Sertifikat</span>
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
                    {proyek.gambar ? (
                      <img
                        src={proyek.gambar}
                        alt="Proyek Image"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex flex-col items-center justify-center">
                        <i className="ri-image-2-line text-5xl text-gray-400"></i>
                        <p className="text-1xl text-gray-500">No Image</p>
                      </div>
                    )}
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
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex flex-col items-center justify-center">
                        <i className="ri-file-text-line text-5xl text-gray-400"></i>
                        <p className="text-1xl text-gray-500">No Sertifikat</p>
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
};

export default ProjectsSection;
