import { listProyek } from "../data";
import ProjectCard from "../components/ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="proyek" className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14">
          <div className="md:col-span-5" data-reveal>
            <span className="section-label">Proyek</span>
            <h2 className="section-title">Yang saya kerjakan.</h2>
          </div>
          <div className="md:col-span-7">
            <p className="lead">
              Kumpulan proyek nyata, sebagian tim, sebagian solo. Klik demo untuk
              melihat versi langsung, atau repo untuk masuk ke kodenya.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listProyek.map((p) => (
            <div key={p.id}>
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
