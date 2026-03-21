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
  return (
    <article className="surface-card-strong flex h-full flex-col p-6 hover:-translate-y-1 hover:border-accent">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
        <div className="min-w-0">
          <p className="eyebrow !text-xs">{project.category}</p>
          <h3 className="mt-3 font-display text-2xl font-bold text-text-primary">
            {project.title}
          </h3>
        </div>
        <span className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
          {project.year}
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-text-muted">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-text-muted">
          Key Features
        </p>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-text-primary">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="ghost-link w-full sm:w-auto"
        >
          GitHub
          <ArrowUpRightIcon />
        </a>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="primary-link w-full sm:w-auto"
          >
            Live Demo
            <ArrowUpRightIcon />
          </a>
        ) : (
          <span className="inline-flex w-full items-center justify-center rounded-full border px-4 py-2.5 text-sm font-semibold text-text-muted sm:w-auto">
            Live Demo Soon
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
