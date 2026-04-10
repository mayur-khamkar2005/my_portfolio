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
            I am still early in my journey, but I really enjoy building full stack projects.
          </h2>
        </div>

        <div
          className="space-y-5 text-base leading-8 text-text-muted sm:text-lg"
          data-reveal
        >
          <p>
            I spend more time on the backend side of projects. I like working with
            Node.js, Express, APIs, and database-related features.
          </p>
          <p>
            I also try to write code in a clean way. Things like JWT auth,
            protected routes, and proper folder structure are areas I keep
            practicing in real projects.
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
              I will add more about my learning and project work here soon.
            </p>
          </article>
        )}
      </div>
    </section>
  );
}

export default About;
