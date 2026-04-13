import ProjectCard from "./ProjectCard";
import useRevealAnimation from "../hooks/useRevealAnimation";

function Projects({ projects }) {
  const sectionRef = useRevealAnimation({ y: 34, stagger: 0.14 });
  const projectItems = Array.isArray(projects)
    ? projects.filter((project) => project && typeof project === "object")
    : [];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-shell scroll-mt-28 py-16 sm:py-24"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div data-reveal>
          <p className="eyebrow">Projects</p>
          <h2 className="section-title mt-4">
            Some projects I made while learning full stack development.
          </h2>
        </div>
        <p className="section-copy" data-reveal>
          Most of these were built to practice things I wanted to get better at,
          like auth, APIs, dashboards, e-commerce flow, and CRUD operations.
        </p>
      </div>

      <div className="mt-10 grid gap-5 xl:grid-cols-3">
        {projectItems.length ? (
          projectItems.map((project, index) => (
            <ProjectCard
              key={project.title ?? project.category ?? `project-${index}`}
              project={project}
            />
          ))
        ) : (
          <article
            className="surface-card sketch-card-lift sketch-tilt-left p-6 xl:col-span-3"
            data-reveal
          >
            <h3 className="font-display text-lg font-medium text-text-primary">
              More projects will be added here.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              I will keep adding more project work here over time.
            </p>
          </article>
        )}
      </div>
    </section>
  );
}

export default Projects;
