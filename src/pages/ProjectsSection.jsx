import { useState } from "react";
import { listProyek, certificateList } from "../data";
import { CertificateCard } from "../components/CertificateCard";
import { ProjectCard } from "../components/ProjectCard";
import { Icon } from "@iconify/react";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeTab, setActiveTab] = useState("projects"); // 'projects' or 'certificates'

  const projectsToShow = listProyek.slice(0, visibleProjects);
  const certificatesToShow = certificateList.slice(0, visibleProjects);

  return (
    <>
      <div className="proyek mt-32 py-25" id="proyek">
        <h1
          className="text-center text-3xl md:text-4xl font-bold mb-2 fade-in"
        >
          Proyek & Sertifikat
        </h1>
        <p
          className="text-base/loose text-center opacity-50 fade-in"
        >
          Berikut ini beberapa proyek dan sertifikat yang sudah saya dapatkan
        </p>

        {/* Tab Navigation */}
        <div
          className="flex justify-center mt-8 gap-4 fade-in"
        >
          <button
            onClick={() => {
              setActiveTab("projects");
              setVisibleProjects(6);
            }}
            className={`px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium cursor-pointer ${
              activeTab === "projects"
                ? "bg-violet-700 text-white"
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            {activeTab === "projects" ? (
              <Icon icon="lucide:layout-grid" className="ri-lg" />
            ) : (
              <Icon icon="lucide:layout-list" className="ri-lg" />
            )}
            <span>Proyek</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("certificates");
              setVisibleProjects(6);
            }}
            className={`px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium cursor-pointer ${
              activeTab === "certificates"
                ? "bg-violet-700 text-white"
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            {activeTab === "certificates" ? (
              <Icon icon="bi:award-fill" className="ri-lg" />
            ) : (
              <Icon icon="bi:award" className="ri-lg" />
            )}
            <span>Sertifikat</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {activeTab === "projects"
            ? projectsToShow.map((project) => (
                <div
                  key={project.id}
                  className="fade-in"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    thumbnail={project.thumbnail}
                    tools={project.tools}
                  />
                </div>
              ))
            : certificatesToShow.map((sertifikat) => (
                <div
                  key={sertifikat.id}
                  className="fade-in"
                >
                  <CertificateCard
                    title={sertifikat.name}
                    description={sertifikat.description}
                    issuer={sertifikat.issuer}
                    certificates={sertifikat.imageList}
                    onButtonClick={() => {}}
                    maxVisible={2}
                  />
                </div>
              ))}
        </div>

        {/* Pagination Controls */}
        <div>
          {activeTab === "projects" ? (
            <>
              {visibleProjects < listProyek.length && (
                <div
                  className="text-center mt-8 fade-in"
                >
                  <button
                    onClick={() =>
                      setVisibleProjects((prevCount) => prevCount + 3)
                    }
                    className="flex items-center justify-center gap-2 text-violet-800 hover:text-white cursor-pointer mx-auto group"
                  >
                    Lihat Lebih Banyak
                    <span className="animate__animated animate__heartBeat animate__infinite">
                      <Icon icon="lucide:chevrons-down" className="ri-2x group-hover:text-white" />
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
                      <Icon icon="lucide:chevrons-up" className="ri-xl" />
                    </button>
                  </div>
                )}
            </>
          ) : (
            <>
              {visibleProjects < certificateList.length && (
                <div
                  className="text-center mt-8 fade-in"
                >
                  <button
                    onClick={() =>
                      setVisibleProjects((prevCount) => prevCount + 3)
                    }
                    className="flex items-center justify-center gap-2 text-violet-800 hover:text-white cursor-pointer mx-auto group"
                  >
                    Lihat Lebih Banyak
                    <span className="animate__animated animate__heartBeat animate__infinite">
                      <Icon icon="lucide:chevrons-down" className="ri-2x group-hover:text-white" />
                    </span>
                  </button>
                </div>
              )}
              {visibleProjects >= certificateList.length &&
                certificateList.length > 6 && (
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
                      <Icon icon="lucide:chevrons-up" className="ri-xl" />
                    </button>
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
