function ArrowIcon() {
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
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function DownloadIcon() {
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
      <path d="M12 3v11M7.5 10.5 12 15l4.5-4.5M5 19h14" />
    </svg>
  );
}

function Hero({ resumeUrl, highlights }) {
  return (
    <section
      id="home"
      className="section-shell scroll-mt-28 pt-36 pb-16 sm:pt-40 sm:pb-24"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="eyebrow">Backend-Driven MERN Portfolio</p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary min-[420px]:text-5xl sm:text-6xl lg:text-7xl">
            Mayur Khamkar
            <span className="mt-3 block text-2xl font-normal text-text-muted sm:text-3xl">
              Full Stack Developer
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl">
            I build backend-focused web products with secure JWT auth, clean API
            layers, and scalable system design that still feels polished on the
            frontend.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={resumeUrl}
              download="Mayur_Khamkar_FullStack_Developer_Resume.pdf"
              className="primary-link"
            >
              <DownloadIcon />
              Download Resume
            </a>
            <a href="#projects" className="ghost-link">
              View Projects
              <ArrowIcon />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="surface-card p-4">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
                  {item.label}
                </p>
                <p className="mt-3 text-sm font-medium text-text-primary">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card-strong relative overflow-hidden p-6 sm:p-8">
          <div className="grid-outline absolute inset-0" />
          <div className="absolute inset-x-10 top-0 h-24 rounded-full bg-accent-soft blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent-soft px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-accent">
              Current Focus
            </div>

            <div className="mt-6 rounded-xl border bg-background/60 p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>

              <div className="space-y-3 font-mono text-xs text-text-muted [overflow-wrap:anywhere] sm:text-sm">
                <p>
                  <span className="text-accent font-medium">const</span> developer ={" "}
                  <span className="text-text-primary">{"{"}</span>
                </p>
                <p className="pl-4">
                  focus: <span className="text-text-primary">"Scalable APIs"</span>,
                </p>
                <p className="pl-4">
                  auth: <span className="text-text-primary">"JWT + RBAC"</span>,
                </p>
                <p className="pl-4">
                  architecture:{" "}
                  <span className="text-text-primary">"MVC patterns"</span>,
                </p>
                <p className="pl-4">
                  stack:{" "}
                  <span className="text-text-primary">["React", "Node", "MongoDB"]</span>
                </p>
                <p>
                  <span className="text-text-primary">{"}"}</span>;
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="surface-card p-5">
                <p className="text-sm font-medium text-text-primary">
                  Backend-first thinking
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  I enjoy turning business logic into reliable APIs and protected
                  workflows.
                </p>
              </div>
              <div className="surface-card p-5">
                <p className="text-sm font-medium text-text-primary">
                  Recruiter-ready presentation
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  Clean UI, clear communication, and practical project storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
