function Skills({ skills }) {
  return (
    <section id="skills" className="section-shell scroll-mt-28 py-16 sm:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Skills</p>
          <h2 className="section-title mt-4">Tools I rely on to ship modern web apps.</h2>
        </div>
        <p className="section-copy">
          My stack is shaped around backend reliability, secure authentication, and
          frontends that stay fast, responsive, and easy to maintain.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => (
          <article
            key={skill.name}
            className="surface-card group p-6 hover:border-accent"
          >
            <div className="flex min-w-0 items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="font-display text-lg font-medium text-text-primary">
                  {skill.name}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {skill.description}
                </p>
              </div>
              <span className="rounded-lg border px-2.5 py-1 text-xs font-medium uppercase tracking-[0.1em] text-text-muted transition-all duration-300 group-hover:border-accent group-hover:text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
