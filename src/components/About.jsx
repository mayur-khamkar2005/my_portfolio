import useRevealAnimation from "../hooks/useRevealAnimation";

function About({ focusAreas }) {
  const sectionRef = useRevealAnimation();
  const areas = Array.isArray(focusAreas)
    ? focusAreas.filter(
        (item) =>
          typeof item?.tag === "string" &&
          typeof item?.title === "string" &&
          typeof item?.description === "string",
      )
    : [];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-shell scroll-mt-28 py-16 sm:py-24"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div data-reveal>
          <p className="eyebrow">About Me</p>
          <h2 className="section-title mt-4">
            I like building full stack apps that feel solid and stay easy to work on.
          </h2>
        </div>

        <div
          className="space-y-5 text-base leading-8 text-text-muted sm:text-lg"
          data-reveal
        >
          <p>
            Most of my work starts from the backend. I like building Node.js and
            Express services, designing REST APIs, and keeping business logic easy
            to follow.
          </p>
          <p>
            I also care a lot about structure and security. That means thinking
            through JWT auth, protected routes, role-based access, and code that
            still makes sense when a project gets bigger.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {areas.length ? (
          areas.map((area) => (
            <article key={area.title} className="surface-card h-full p-6" data-reveal>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-sm font-medium text-accent">
                {area.tag}
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-text-primary">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {area.description}
              </p>
            </article>
          ))
        ) : (
          <article className="surface-card p-6 md:col-span-3" data-reveal>
            <h3 className="font-display text-lg font-medium text-text-primary">
              This section is being updated.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              It will highlight the parts of development I spend the most time on.
            </p>
          </article>
        )}
      </div>
    </section>
  );
}

export default About;
