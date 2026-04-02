import { Link, useParams } from "react-router-dom";
import useRevealAnimation from "../hooks/useRevealAnimation";
import { getRelatedSkills, getSkillBySlug } from "../lib/siteContent";

function SkillDetailPage() {
  const { skillSlug } = useParams();
  const sectionRef = useRevealAnimation({ y: 18, stagger: 0.05 });
  const skill = typeof skillSlug === "string" ? getSkillBySlug(skillSlug) : null;
  const relatedSkills = skill ? getRelatedSkills(skill.slug).slice(0, 4) : [];

  if (!skill) {
    return (
      <div className="pt-24 sm:pt-28">
        <section ref={sectionRef} className="section-shell py-16 sm:py-24">
          <div className="surface-card-strong p-8 sm:p-10" data-reveal>
            <p className="eyebrow">Skill Not Found</p>
            <h1 className="section-title mt-4">This skill page could not be found.</h1>
            <p className="section-copy mt-4">
              The link may be outdated, or the page may have moved. You can still browse the full skills section from here.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/skills" className="primary-link">
                Browse Skills
              </Link>
              <Link to="/" className="ghost-link">
                Go Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const safeHighlights = Array.isArray(skill.highlights)
    ? skill.highlights.filter((item) => typeof item === "string" && item.trim())
    : [];
  const safeStack = Array.isArray(skill.stack)
    ? skill.stack.filter((item) => typeof item === "string" && item.trim())
    : [];

  return (
    <div className="pt-24 sm:pt-28">
      <section ref={sectionRef} className="section-shell py-16 sm:py-24">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-3xl" data-reveal>
            <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
              <Link to="/skills" className="transition-colors duration-200 hover:text-accent">
                Skills
              </Link>
              <span>/</span>
              <Link
                to={`/skills#${skill.categorySlug}`}
                className="transition-colors duration-200 hover:text-accent"
              >
                {skill.category}
              </Link>
            </div>

            <p className="eyebrow mt-6">{skill.category}</p>
            <h1 className="section-title mt-4">{skill.name}</h1>
            <p className="section-copy mt-5 max-w-3xl">
              {typeof skill.description === "string" ? skill.description : skill.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/skills" className="primary-link">
                View All Skills
              </Link>
              <Link to="/projects" className="ghost-link">
                See Projects
              </Link>
            </div>
          </div>

          <div className="surface-card-strong w-full max-w-md p-6 sm:p-7" data-reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Overview
            </p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-line/80 bg-background/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-text-muted">Category</p>
                <p className="mt-2 font-display text-lg font-medium text-text-primary">
                  {skill.category}
                </p>
              </div>

              <div className="rounded-2xl border border-line/80 bg-background/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-text-muted">Focus</p>
                <p className="mt-2 text-sm leading-relaxed text-text-primary">
                  {typeof skill.summary === "string" ? skill.summary : skill.description}
                </p>
              </div>

              <div className="rounded-2xl border border-line/80 bg-background/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-text-muted">
                  Related Topics
                </p>
                <p className="mt-2 font-display text-lg font-medium text-text-primary">
                  {safeStack.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="surface-card-strong p-6 sm:p-8" data-reveal>
            <p className="eyebrow">What I Focus On</p>
            <div className="mt-6 grid gap-3">
              {safeHighlights.length ? (
                safeHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-line/80 bg-background/45 px-4 py-4"
                  >
                    <p className="text-sm leading-relaxed text-text-primary">{highlight}</p>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-line/80 bg-background/45 px-4 py-4">
                  <p className="text-sm leading-relaxed text-text-muted">
                    More notes for this skill will be added here.
                  </p>
                </div>
              )}
            </div>
          </article>

          <article className="surface-card-strong p-6 sm:p-8" data-reveal>
            <p className="eyebrow">Core Topics</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {safeStack.length ? (
                safeStack.map((item) => (
                  <span
                    key={`${skill.slug}-${item}`}
                    className="rounded-full border px-4 py-2 text-sm font-medium text-text-primary"
                  >
                    {item}
                  </span>
                ))
              ) : (
                <p className="text-sm leading-relaxed text-text-muted">
                  Core topics for this skill will be listed here.
                </p>
              )}
            </div>
          </article>
        </div>

        {relatedSkills.length ? (
          <div className="mt-12">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div data-reveal>
                <p className="eyebrow">Related Skills</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-text-primary sm:text-3xl">
                  More from {skill.category}
                </h2>
              </div>
              <p className="section-copy" data-reveal>
                These are a few related tools and concepts that often show up alongside {skill.name} in my work.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {relatedSkills.map((relatedSkill) => (
                <Link
                  key={relatedSkill.slug}
                  to={`/skills/${relatedSkill.slug}`}
                  className="surface-card group block p-5 transition-[border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-accent"
                  data-reveal
                >
                  <p className="font-display text-lg font-medium text-text-primary">
                    {relatedSkill.name}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {relatedSkill.summary}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="text-text-muted">Open skill</span>
                    <span className="font-medium text-accent transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                      Open
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default SkillDetailPage;
