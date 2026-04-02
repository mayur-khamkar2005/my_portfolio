import { useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  supportsInteractiveMotion,
  useIsomorphicLayoutEffect,
} from "../lib/gsap";
import { isSafeExternalHref } from "../lib/url";

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
  const cardRef = useRef(null);
  const category =
    typeof project?.category === "string" && project.category.trim()
      ? project.category
      : "Featured Project";
  const title =
    typeof project?.title === "string" && project.title.trim()
      ? project.title
      : "Project details coming soon";
  const year =
    typeof project?.year === "string" && project.year.trim() ? project.year : "Concept";
  const description =
    typeof project?.description === "string" && project.description.trim()
      ? project.description
      : "More details will be added here.";
  const techStack = Array.isArray(project?.techStack)
    ? project.techStack.filter((tech) => typeof tech === "string" && tech.trim())
    : [];
  const features = Array.isArray(project?.features)
    ? project.features.filter((feature) => typeof feature === "string" && feature.trim())
    : [];
  const githubUrl = isSafeExternalHref(project?.githubUrl) ? project.githubUrl.trim() : "";
  const liveUrl = isSafeExternalHref(project?.liveUrl) ? project.liveUrl.trim() : "";

  useIsomorphicLayoutEffect(() => {
    const card = cardRef.current;

    if (!card || prefersReducedMotion() || !supportsInteractiveMotion()) {
      return undefined;
    }

    const chips = card.querySelectorAll("[data-project-chip]");
    const dots = card.querySelectorAll("[data-project-dot]");
    const depthLayers = Array.from(card.querySelectorAll("[data-project-depth]"));
    const sheen = card.querySelector("[data-project-sheen]");

    gsap.set(card, {
      transformPerspective: 1000,
      transformStyle: "preserve-3d",
      transformOrigin: "50% 50%",
    });

    const rotateXTo = gsap.quickTo(card, "rotateX", {
      duration: 0.34,
      ease: "power3.out",
    });
    const rotateYTo = gsap.quickTo(card, "rotateY", {
      duration: 0.34,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(card, "y", {
      duration: 0.34,
      ease: "power3.out",
    });
    const scaleTo = gsap.quickTo(card, "scale", {
      duration: 0.34,
      ease: "power3.out",
    });
    const sheenXTo = sheen
      ? gsap.quickTo(sheen, "xPercent", { duration: 0.42, ease: "power3.out" })
      : null;
    const sheenOpacityTo = sheen
      ? gsap.quickTo(sheen, "opacity", { duration: 0.28, ease: "power2.out" })
      : null;
    const layerSetters = depthLayers.map((layer, index) => {
      const factor = 3.5 + index * 1.4;

      return {
        x: gsap.quickTo(layer, "x", { duration: 0.4, ease: "power3.out" }),
        y: gsap.quickTo(layer, "y", { duration: 0.4, ease: "power3.out" }),
        factor,
      };
    });

    const handlePointerMove = (event) => {
      const bounds = card.getBoundingClientRect();
      const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
      const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

      rotateYTo(horizontal * 3.8);
      rotateXTo(vertical * -3.8);
      yTo(-6);
      scaleTo(1.003);
      sheenXTo?.(horizontal * 18);

      layerSetters.forEach(({ x, y, factor }) => {
        x(horizontal * factor);
        y(vertical * factor * 0.75);
      });
    };

    const handlePointerEnter = () => {
      sheenOpacityTo?.(0.9);
      gsap.to(chips, {
        y: -1.5,
        duration: 0.24,
        stagger: 0.016,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(dots, {
        scale: 1.12,
        duration: 0.2,
        stagger: 0.016,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const resetPointer = () => {
      rotateXTo(0);
      rotateYTo(0);
      yTo(0);
      scaleTo(1);
      sheenXTo?.(0);
      sheenOpacityTo?.(0.55);

      layerSetters.forEach(({ x, y }) => {
        x(0);
        y(0);
      });

      gsap.to(chips, {
        y: 0,
        duration: 0.22,
        stagger: 0.014,
        overwrite: "auto",
      });
      gsap.to(dots, {
        scale: 1,
        duration: 0.2,
        stagger: 0.014,
        overwrite: "auto",
      });
    };

    card.addEventListener("pointerenter", handlePointerEnter);
    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerleave", resetPointer);
    card.addEventListener("pointercancel", resetPointer);

    return () => {
      card.removeEventListener("pointerenter", handlePointerEnter);
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", resetPointer);
      card.removeEventListener("pointercancel", resetPointer);
    };
  }, [features.length, techStack.length]);

  return (
    <article
      ref={cardRef}
      className="surface-card-strong motion-plane relative flex h-full flex-col overflow-hidden p-6 hover:border-accent will-change-transform"
      data-reveal
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[-20%] w-2/3 bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-55 blur-2xl dark:via-white/8"
        data-project-sheen
      />

      <div
        className="relative flex flex-col items-start gap-4 sm:flex-row sm:justify-between"
        data-project-depth
      >
        <div className="min-w-0">
          <p className="eyebrow">{category}</p>
          <h3 className="mt-3 font-display text-xl font-medium text-text-primary">
            {title}
          </h3>
        </div>
        <span className="rounded-lg border px-2.5 py-1 text-xs font-medium uppercase tracking-[0.1em] text-text-muted">
          {year}
        </span>
      </div>

      <p className="relative mt-5 text-sm leading-relaxed text-text-muted" data-project-depth>
        {description}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-2" data-project-depth>
        {techStack.length ? (
          techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
              data-project-chip
            >
              {tech}
            </span>
          ))
        ) : (
          <span className="rounded-lg border px-2.5 py-1 text-xs font-medium text-text-muted">
            Stack details coming soon
          </span>
        )}
      </div>

      <div className="relative mt-6" data-project-depth>
        <p className="text-xs font-medium uppercase tracking-[0.1em] text-text-muted">
          Key Features
        </p>
        {features.length ? (
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-text-primary">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent"
                  data-project-dot
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            Feature notes will be added here.
          </p>
        )}
      </div>

      <div
        className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        data-project-depth
      >
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="ghost-link w-full sm:w-auto"
          >
            GitHub
            <ArrowUpRightIcon />
          </a>
        ) : (
          <span className="inline-flex w-full items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-medium text-text-muted sm:w-auto">
            Code Link On Request
          </span>
        )}
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="primary-link w-full sm:w-auto"
          >
            Live Demo
            <ArrowUpRightIcon />
          </a>
        ) : (
          <span className="inline-flex w-full items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-medium text-text-muted sm:w-auto">
            Demo Not Added Yet
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
