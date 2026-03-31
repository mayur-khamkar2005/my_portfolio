function About({ focusAreas }) {
  return (
    <section id="about" className="section-shell scroll-mt-28 py-16 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="eyebrow">About Me</p>
          <h2 className="section-title mt-4">
            A full stack developer with a strong backend core.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-text-muted sm:text-lg">
          <p>
            My work is centered on building dependable MERN applications where the
            backend carries real weight. I enjoy structuring clean Node.js and
            Express services, designing REST APIs, and keeping application logic
            organized through MVC architecture.
          </p>
          <p>
            Security and maintainability matter to me, so I pay close attention to
            JWT authentication flows, protected routes, role-based access, and the
            kind of code structure that stays readable as a product grows.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {focusAreas.map((area) => (
          <article
            key={area.title}
            className="surface-card h-full p-6"
          >
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
        ))}
      </div>
    </section>
  );
}

export default About;
