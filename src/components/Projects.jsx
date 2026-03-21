import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
  return (
    <section id="projects" className="section-shell scroll-mt-28 py-16 sm:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Projects</p>
          <h2 className="section-title mt-4">
            Backend-heavy product work built around real app patterns.
          </h2>
        </div>
        <p className="section-copy">
          These cards highlight the kind of MERN projects I enjoy building:
          authentication flows, secure APIs, structured architecture, and polished
          user-facing experiences.
        </p>
      </div>

      <div className="mt-10 grid gap-5 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
