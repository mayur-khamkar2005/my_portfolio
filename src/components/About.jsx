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
            I'm still early in my journey, but I really enjoy building full stack projects and learning from them.
          </h2>
        </div>

        <div
          className="space-y-5 text-base leading-8 text-text-muted sm:text-lg"
          data-reveal
        >
          <p>
            I spend more time on the backend side of projects. I like working
            with Node.js, Express, APIs, authentication, and database related
            features.
          </p>
          <p>
            I also try to keep my code simple and easy to understand. Things
            like JWT auth, protected routes, reusable components, and a clean
            folder structure are things I keep practicing in real projects.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {areas.length ? (
          areas.map((area, index) => (
            <article
              key={area.title}
              className={`surface-card sketch-card-lift h-full p-6 ${
                index % 2 === 0 ? "sketch-tilt-left" : "sketch-tilt-right"
              }`}
              data-reveal
            >
              <div className="sketch-mark flex h-10 w-10 items-center justify-center text-sm font-medium text-accent">
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
          <article
            className="surface-card sketch-card-lift sketch-tilt-left p-6 md:col-span-3"
            data-reveal
          >
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
