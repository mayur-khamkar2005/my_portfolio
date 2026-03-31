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

function Contact({ contactMethods, resumeUrl, primaryEmailHref }) {
  return (
    <section id="contact" className="section-shell scroll-mt-28 py-16 sm:py-24">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        <div className="surface-card-strong relative overflow-hidden p-7 sm:p-8">
          <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-accent-soft blur-3xl" />
          <div className="relative">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-4 max-w-lg">
              Let&apos;s build secure, scalable products together.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
              If you&apos;re hiring for backend, MERN, or full stack roles, I&apos;d
              love to connect. I care about dependable APIs, clean architecture,
              and interfaces that make the product feel complete.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={primaryEmailHref}
                target="_blank"
                rel="noreferrer"
                className="primary-link w-full sm:w-auto"
              >
                Email Mayur
                <ArrowUpRightIcon />
              </a>
              <a
                href={resumeUrl}
                download="Mayur_Khamkar_FullStack_Developer_Resume.pdf"
                className="ghost-link w-full sm:w-auto"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {contactMethods.map((item) => (
            <article
              key={item.label}
              className="surface-card group flex h-full min-w-0 flex-col p-5 hover:border-accent sm:p-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-text-muted">
                {item.label}
              </p>
              <p className="mt-4 min-w-0 max-w-full font-display text-base font-medium leading-tight text-text-primary [overflow-wrap:anywhere] sm:text-lg">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="ghost-link mt-auto w-full sm:w-fit"
              >
                {item.actionLabel}
                <ArrowUpRightIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
