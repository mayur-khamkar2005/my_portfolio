import { isSafeExternalHref } from "../lib/url";

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function ProjectCard({ project }) {
  const category =
    typeof project?.category === "string" && project.category.trim()
      ? project.category
      : "Featured Project";
  const title =
    typeof project?.title === "string" && project.title.trim()
      ? project.title
      : "Project details coming soon";
  const year =
    typeof project?.year === "string" && project.year.trim() ? project.year : "Concept";
  const description =
    typeof project?.description === "string" && project.description.trim()
      ? project.description
      : "More details will be added here.";
  const techStack = Array.isArray(project?.techStack)
    ? project.techStack.filter((tech) => typeof tech === "string" && tech.trim())
    : [];
  const features = Array.isArray(project?.features)
    ? project.features.filter((feature) => typeof feature === "string" && feature.trim())
    : [];
  const githubUrl = isSafeExternalHref(project?.githubUrl) ? project.githubUrl.trim() : "";
  const liveUrl = isSafeExternalHref(project?.liveUrl) ? project.liveUrl.trim() : "";

  return (
    <article
      className="surface-card-strong sketch-project-card sketch-card-lift sketch-tilt-right group relative flex h-full flex-col overflow-hidden p-6"
      data-reveal
    >
      <div
        aria-hidden="true"
        className="sketch-project-sheen pointer-events-none absolute inset-x-6 top-5 h-3"
      />

      <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
        <div className="min-w-0">
          <p className="eyebrow">{category}</p>
          <h3 className="mt-3 font-display text-xl font-medium text-text-primary">
            {title}
          </h3>
        </div>
        <span className="sketch-badge px-2.5 py-1 text-xs font-medium uppercase tracking-[0.06em] text-text-muted">
          {year}
        </span>
      </div>

      <p className="relative mt-5 text-sm leading-relaxed text-text-muted">{description}</p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {techStack.length ? (
          techStack.map((tech) => (
            <span
              key={tech}
              className="sketch-chip px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))
        ) : (
          <span className="sketch-chip sketch-chip-muted px-2.5 py-1 text-xs font-medium text-text-muted">
            Stack details coming soon
          </span>
        )}
      </div>

      <div className="relative mt-6">
        <p className="text-xs font-medium uppercase tracking-[0.06em] text-text-muted">
          Key Features
        </p>
        {features.length ? (
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-text-primary">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="sketch-bullet mt-1.5 h-2.5 w-2.5 shrink-0 bg-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            Feature notes will be added here.
          </p>
        )}
      </div>

      <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="ghost-link w-full sm:w-auto"
          >
            GitHub
            <ArrowUpRightIcon />
          </a>
        ) : (
          <span className="sketch-note inline-flex w-full items-center justify-center px-4 py-2.5 text-sm font-medium text-text-muted sm:w-auto">
            Code Link On Request
          </span>
        )}
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="primary-link w-full sm:w-auto"
          >
            Live Demo
            <ArrowUpRightIcon />
          </a>
        ) : (
          <span className="sketch-note inline-flex w-full items-center justify-center px-4 py-2.5 text-sm font-medium text-text-muted sm:w-auto">
            Demo Not Added Yet
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
