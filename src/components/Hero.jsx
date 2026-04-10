import { Link } from "react-router-dom";
import useRevealAnimation from "../hooks/useRevealAnimation";

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
  const sectionRef = useRevealAnimation({ y: 28, stagger: 0.08, scale: 0.985, rotateX: 1.4 });
  const highlightItems = Array.isArray(highlights)
    ? highlights.filter(
        (item) => typeof item?.label === "string" && typeof item?.value === "string",
      )
    : [];
  const hasResume = typeof resumeUrl === "string" && resumeUrl.trim().length > 0;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="section-shell scroll-mt-28 pt-36 pb-16 sm:pt-40 sm:pb-24"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="eyebrow" data-reveal>
            Full Stack Developer
          </p>
          <h1
            className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary min-[420px]:text-5xl sm:text-6xl lg:text-7xl"
            data-reveal
          >
            Mayur Khamkar
            <span className="mt-3 block text-2xl font-normal text-text-muted sm:text-3xl">
              Full Stack Developer
            </span>
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl"
            data-reveal
          >
            I am a fresher developer who enjoys full stack development, especially
            backend work. Most of my project time goes into APIs, auth, and keeping
            the code structure simple and clean.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-reveal>
            {hasResume ? (
              <a
                href={resumeUrl}
                download="Mayur_Khamkar_FullStack_Developer_Resume.pdf"
                className="primary-link w-full sm:w-auto"
              >
                <DownloadIcon />
                Download Resume
              </a>
            ) : (
              <span className="inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-medium text-text-muted">
                Resume Available On Request
              </span>
            )}
            <Link to="/projects" className="ghost-link w-full sm:w-auto">
              View Projects
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlightItems.length ? (
              highlightItems.map((item) => (
                <div key={item.label} className="surface-card p-4" data-reveal>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-medium text-text-primary">
                    {item.value}
                  </p>
                </div>
              ))
            ) : (
              <div className="surface-card p-4 sm:col-span-3" data-reveal>
                <p className="text-sm font-medium text-text-primary">
                  A quick summary will show up here.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  It is meant for the parts of development I spend the most time on.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="surface-card-strong hero-panel relative overflow-hidden p-6 sm:p-8" data-reveal>
          <div className="grid-outline absolute inset-0" />
          <div className="absolute inset-x-10 top-0 h-24 rounded-full bg-accent-soft opacity-75 blur-[72px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent-soft px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-accent">
              What I Work On
            </div>

            <div className="mt-6 rounded-xl border bg-background/70 p-5">
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
                  focus: <span className="text-text-primary">"Backend and APIs"</span>,
                </p>
                <p className="pl-4">
                  auth: <span className="text-text-primary">"JWT auth"</span>,
                </p>
                <p className="pl-4">
                  architecture:{" "}
                  <span className="text-text-primary">"Simple project structure"</span>,
                </p>
                <p className="pl-4">
                  stack:{" "}
                  <span className="text-text-primary">["React", "Node.js", "MongoDB"]</span>
                </p>
                <p>
                  <span className="text-text-primary">{"}"}</span>;
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="surface-card p-5">
                <p className="text-sm font-medium text-text-primary">
                  Backend side
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  I enjoy working on routes, auth flow, controllers, and database-related parts of a project.
                </p>
              </div>
              <div className="surface-card p-5">
                <p className="text-sm font-medium text-text-primary">
                  Frontend side
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  On the frontend, I try to keep the UI clean, responsive, and easy to use.
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
