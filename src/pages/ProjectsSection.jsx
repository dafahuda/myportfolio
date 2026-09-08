import { useState } from "react";
import { listProyek, certificateList } from "../data";
import { CertificateCard } from "../components/CertificateCard";
import { ProjectCard } from "../components/ProjectCard";
import { Icon } from "@iconify/react";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeTab, setActiveTab] = useState("projects");

  const projectsToShow = listProyek.slice(0, visibleProjects);
  const certificatesToShow = certificateList.slice(0, visibleProjects);

  return (
    <>
      <div className="proyek mt-32 py-25" id="proyek">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-2 fade-in">
          Projects & Certificates
        </h2>
        <p className="text-base/loose text-center opacity-50 mb-8 fade-in">
          Beberapa project yang pernah saya kerjakan dan sertifikasi yang saya punya.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-10 fade-in">
          <button
            onClick={() => {
              setActiveTab("projects");
              setVisibleProjects(6);
            }}
            className={`px-6 py-3 rounded-lg transition-colors flex items-center gap-2 font-medium cursor-pointer ${
              activeTab === "projects"
                ? "bg-violet-700 text-white"
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            <Icon icon={activeTab === "projects" ? "lucide:layout-grid" : "lucide:layout-list"} className="ri-lg" />
            <span>Projects</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("certificates");
              setVisibleProjects(6);
            }}
            className={`px-6 py-3 rounded-lg transition-colors flex items-center gap-2 font-medium cursor-pointer ${
              activeTab === "certificates"
                ? "bg-violet-700 text-white"
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            <Icon icon={activeTab === "certificates" ? "bi:award-fill" : "bi:award"} className="ri-lg" />
            <span>Certificates</span>
          </button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {activeTab === "projects"
            ? projectsToShow.map((project) => (
                <div key={project.id} className="fade-in">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    thumbnail={project.thumbnail}
                    tools={project.tools}
                    link={project.link}
                  />
                </div>
              ))
            : certificatesToShow.map((cert) => (
                <div key={cert.id} className="fade-in">
                  <CertificateCard
                    title={cert.name}
                    description={cert.description}
                    issuer={cert.issuer}
                    certificates={cert.imageList}
                    onButtonClick={() => {}}
                    maxVisible={2}
                  />
                </div>
              ))}
        </div>

        {/* Pagination */}
        <div className="mt-10">
          {activeTab === "projects" ? (
            visibleProjects < listProyek.length ? (
              <div className="text-center fade-in">
                <button
                  onClick={() => setVisibleProjects((p) => p + 3)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Load More</span>
                  <Icon icon="lucide:chevrons-down" className="ri-xl" />
                </button>
              </div>
            ) : listProyek.length > 6 ? (
              <div className="text-center">
                <button
                  onClick={() => {
                    setVisibleProjects(6);
                    document.getElementById("proyek")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Show Less</span>
                  <Icon icon="lucide:chevrons-up" className="ri-xl" />
                </button>
              </div>
            ) : null
          ) : visibleProjects < certificateList.length ? (
            <div className="text-center fade-in">
              <button
                onClick={() => setVisibleProjects((p) => p + 3)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>Load More</span>
                <Icon icon="lucide:chevrons-down" className="ri-xl" />
              </button>
            </div>
          ) : certificateList.length > 6 ? (
            <div className="text-center">
              <button
                onClick={() => {
                  setVisibleProjects(6);
                  document.getElementById("proyek")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Show Less</span>
                <Icon icon="lucide:chevrons-up" className="ri-xl" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
