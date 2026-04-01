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
            Backend-heavy product work built around real app patterns.
          </h2>
        </div>
        <p className="section-copy" data-reveal>
          These cards highlight the kind of MERN projects I enjoy building:
          authentication flows, secure APIs, structured architecture, and polished
          user-facing experiences.
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
          <article className="surface-card p-6 xl:col-span-3" data-reveal>
            <h3 className="font-display text-lg font-medium text-text-primary">
              Project case studies are on the way.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              This section will gracefully hold product stories, feature lists, and
              shipping details once more portfolio entries are added.
            </p>
          </article>
        )}
      </div>
    </section>
  );
}

export default Projects;
