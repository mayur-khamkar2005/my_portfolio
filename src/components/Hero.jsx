import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  gsap,
  prefersReducedMotion,
  supportsInteractiveMotion,
  useIsomorphicLayoutEffect,
} from "../lib/gsap";

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
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const highlightItems = Array.isArray(highlights)
    ? highlights.filter(
        (item) => typeof item?.label === "string" && typeof item?.value === "string",
      )
    : [];
  const hasResume = typeof resumeUrl === "string" && resumeUrl.trim().length > 0;

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) {
      return undefined;
    }

    const scope = sectionRef.current;
    const panel = panelRef.current;

    if (!scope) {
      return undefined;
    }

    const cleanupFns = [];
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          "[data-hero-copy]",
          { y: 24, autoAlpha: 0, scale: 0.985 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.46,
            stagger: 0.06,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform",
          },
        )
        .fromTo(
          "[data-hero-stat]",
          { y: 18, autoAlpha: 0, scale: 0.975 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.3,
            stagger: 0.04,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform",
          },
          0.2,
        )
        .fromTo(
          "[data-hero-panel]",
          { y: 28, autoAlpha: 0, rotateY: -6, rotateX: 3, scale: 0.985 },
          {
            y: 0,
            autoAlpha: 1,
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform",
          },
          0.1,
        );

      gsap.to("[data-hero-float]", {
        yPercent: -1.8,
        duration: 4.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-hero-glow]", {
        xPercent: 8,
        scale: 1.06,
        duration: 7.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      if (panel) {
        gsap.set(panel, {
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50%",
        });
      }

      if (panel && supportsInteractiveMotion()) {
        const layers = gsap.utils.toArray("[data-hero-depth]", panel);
        const rotateXTo = gsap.quickTo(panel, "rotateX", {
          duration: 0.38,
          ease: "power3.out",
        });
        const rotateYTo = gsap.quickTo(panel, "rotateY", {
          duration: 0.38,
          ease: "power3.out",
        });
        const layerSetters = layers.map((layer, index) => {
          const factor = 4 + index * 1.5;

          return {
            x: gsap.quickTo(layer, "x", { duration: 0.42, ease: "power3.out" }),
            y: gsap.quickTo(layer, "y", { duration: 0.42, ease: "power3.out" }),
            factor,
          };
        });

        const handlePointerMove = (event) => {
          const bounds = panel.getBoundingClientRect();
          const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
          const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

          rotateYTo(horizontal * 3.2);
          rotateXTo(vertical * -3.2);

          layerSetters.forEach(({ x, y, factor }) => {
            x(horizontal * factor);
            y(vertical * factor * 0.75);
          });
        };

        const resetPointer = () => {
          rotateXTo(0);
          rotateYTo(0);
          layerSetters.forEach(({ x, y }) => {
            x(0);
            y(0);
          });
        };

        panel.addEventListener("pointermove", handlePointerMove);
        panel.addEventListener("pointerleave", resetPointer);
        panel.addEventListener("pointercancel", resetPointer);

        cleanupFns.push(() => {
          panel.removeEventListener("pointermove", handlePointerMove);
          panel.removeEventListener("pointerleave", resetPointer);
          panel.removeEventListener("pointercancel", resetPointer);
        });
      }
    }, scope);

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, [highlightItems.length]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="section-shell scroll-mt-28 pt-36 pb-16 sm:pt-40 sm:pb-24"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="eyebrow" data-hero-copy>
            Full Stack Developer
          </p>
          <h1
            className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary min-[420px]:text-5xl sm:text-6xl lg:text-7xl"
            data-hero-copy
          >
            Mayur Khamkar
            <span className="mt-3 block text-2xl font-normal text-text-muted sm:text-3xl">
              Full Stack Developer
            </span>
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl"
            data-hero-copy
          >
            I build full stack web apps with most of my attention on the backend.
            A lot of my work goes into APIs, auth, and clean structure, while
            keeping the frontend clear and easy to use.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-hero-copy>
            {hasResume ? (
              <a
                href={resumeUrl}
                download="Mayur_Khamkar_FullStack_Developer_Resume.pdf"
                className="primary-link"
              >
                <DownloadIcon />
                Download Resume
              </a>
            ) : (
              <span className="inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-medium text-text-muted">
                Resume Available On Request
              </span>
            )}
            <Link to="/projects" className="ghost-link">
              View Projects
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlightItems.length ? (
              highlightItems.map((item) => (
                <div key={item.label} className="surface-card p-4" data-hero-stat>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-medium text-text-primary">
                    {item.value}
                  </p>
                </div>
              ))
            ) : (
              <div className="surface-card p-4 sm:col-span-3" data-hero-stat>
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

        <div
          ref={panelRef}
          className="surface-card-strong motion-plane relative overflow-hidden p-6 will-change-transform sm:p-8"
          data-hero-panel
          data-hero-float
        >
          <div className="grid-outline absolute inset-0" />
          <div
            className="absolute inset-x-10 top-0 h-24 rounded-full bg-accent-soft blur-3xl"
            data-hero-glow
          />

          <div className="relative">
            <div
              className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent-soft px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-accent"
              data-hero-depth
            >
              What I&apos;m Building
            </div>

            <div className="mt-6 rounded-xl border bg-background/60 p-5" data-hero-depth>
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
                  focus: <span className="text-text-primary">"Practical APIs"</span>,
                </p>
                <p className="pl-4">
                  auth: <span className="text-text-primary">"JWT + role checks"</span>,
                </p>
                <p className="pl-4">
                  architecture:{" "}
                  <span className="text-text-primary">"Clean MVC structure"</span>,
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
              <div className="surface-card p-5" data-hero-depth>
                <p className="text-sm font-medium text-text-primary">
                  Backend-first thinking
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  I like turning product requirements into APIs, auth flows, and backend features that stay manageable.
                </p>
              </div>
              <div className="surface-card p-5" data-hero-depth>
                <p className="text-sm font-medium text-text-primary">
                  Frontend that stays simple
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  I care about clean layout, readable content, and interfaces that feel straightforward to use.
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
