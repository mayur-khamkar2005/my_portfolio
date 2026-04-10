import { useEffect, useId, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { decodeHashFragment } from "../lib/url";

function normalizeSkill(skill, fallbackCategory = {}) {
  if (!skill || typeof skill?.name !== "string") {
    return null;
  }

  const summary =
    typeof skill?.summary === "string"
      ? skill.summary
      : typeof skill?.description === "string"
        ? skill.description
        : "";

  return {
    ...skill,
    slug: typeof skill?.slug === "string" ? skill.slug : "",
    summary,
    category: typeof skill?.category === "string" ? skill.category : fallbackCategory.label || "",
    categorySlug:
      typeof skill?.categorySlug === "string" ? skill.categorySlug : fallbackCategory.slug || "",
  };
}

function groupSkillsByCategory(skills) {
  return skills.reduce((groups, skill) => {
    const label = skill.category || "Skills";
    const slug = skill.categorySlug || label.toLowerCase().replace(/\s+/g, "-");
    const existingGroup = groups.find((group) => group.slug === slug);

    if (existingGroup) {
      existingGroup.skills.push(skill);
      return groups;
    }

    groups.push({
      label,
      slug,
      description: "",
      skills: [skill],
    });

    return groups;
  }, []);
}

function SkillItem({ skill }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-background p-4">
      <div>
        <p className="text-base font-medium text-text-primary">{skill.name}</p>
        {skill.summary ? (
          <p className="mt-2 text-sm leading-6 text-text-muted">{skill.summary}</p>
        ) : null}
      </div>

      <div className="mt-4 flex justify-end">
        {skill.slug ? (
          <Link
            to={`/skills/${skill.slug}`}
            className="rounded-lg border border-line px-3 py-1.5 text-sm font-medium text-text-primary transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            View
          </Link>
        ) : (
          <span className="rounded-lg border border-line px-3 py-1.5 text-sm font-medium text-text-muted">
            View
          </span>
        )}
      </div>
    </div>
  );
}

function CategoryButton({ category, isActive, onSelect, panelId }) {
  return (
    <button
      type="button"
      id={category.slug}
      className={`h-full w-full rounded-2xl border px-5 py-4 text-left transition-[border-color,background-color,color,transform] duration-200 ${
        isActive
          ? "border-accent bg-accent-soft text-text-primary"
          : "border-line bg-background text-text-primary hover:-translate-y-0.5 hover:border-accent"
      }`}
      onClick={() => onSelect(category.slug)}
      onMouseEnter={() => onSelect(category.slug)}
      onFocus={() => onSelect(category.slug)}
      aria-pressed={isActive}
      aria-controls={panelId}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-text-primary">{category.label}</p>
          <p className="mt-2 text-sm leading-6 text-text-muted">
            {category.description || "Open this group to see the tools I use here."}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${
            isActive ? "border-accent text-accent" : "border-line text-text-muted"
          }`}
        >
          {category.skills.length}
        </span>
      </div>
    </button>
  );
}

function Skills({ skills = [], categories = [] }) {
  const location = useLocation();
  const panelId = useId();
  const safeCategories = useMemo(() => {
    const normalizedCategories = Array.isArray(categories)
      ? categories
          .map((category) => {
            const normalizedSkills = Array.isArray(category?.skills)
              ? category.skills
                  .map((skill) =>
                    normalizeSkill(skill, {
                      label: typeof category?.label === "string" ? category.label : "",
                      slug: typeof category?.slug === "string" ? category.slug : "",
                    }),
                  )
                  .filter(Boolean)
              : [];

            if (
              typeof category?.label !== "string" ||
              typeof category?.slug !== "string" ||
              !normalizedSkills.length
            ) {
              return null;
            }

            return {
              label: category.label,
              slug: category.slug,
              description:
                typeof category?.description === "string" ? category.description : "",
              skills: normalizedSkills,
            };
          })
          .filter(Boolean)
      : [];

    if (normalizedCategories.length) {
      return normalizedCategories;
    }

    const safeSkills = Array.isArray(skills)
      ? skills.map((skill) => normalizeSkill(skill)).filter(Boolean)
      : [];

    return groupSkillsByCategory(safeSkills);
  }, [categories, skills]);

  const [activeCategorySlug, setActiveCategorySlug] = useState("");

  useEffect(() => {
    const hashSlug = decodeHashFragment(location.hash);
    const matchedCategory = safeCategories.find((category) => category.slug === hashSlug);

    if (matchedCategory) {
      setActiveCategorySlug(matchedCategory.slug);
      return;
    }

    setActiveCategorySlug((currentSlug) => {
      if (safeCategories.some((category) => category.slug === currentSlug)) {
        return currentSlug;
      }

      return safeCategories[0]?.slug ?? "";
    });
  }, [location.hash, safeCategories]);

  const activeCategory = safeCategories.find((category) => category.slug === activeCategorySlug);
  const handleSelectCategory = (categorySlug) => {
    setActiveCategorySlug((currentSlug) =>
      currentSlug === categorySlug ? currentSlug : categorySlug,
    );
  };

  return (
    <section id="skills" className="section-shell py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="eyebrow">Skills</p>
        <h1 className="section-title mt-4">Skills and tools I use in my projects.</h1>
        <p className="mt-4 text-base leading-7 text-text-muted">
          This is a simple list of the tools I have used while learning and building
          full stack projects. I grouped them by area to keep the page easier to read.
        </p>
      </div>

      {safeCategories.length ? (
        <>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {safeCategories.map((category) => (
              <CategoryButton
                key={category.slug}
                category={category}
                isActive={category.slug === activeCategorySlug}
                onSelect={handleSelectCategory}
                panelId={panelId}
              />
            ))}
          </div>

          <div
            id={panelId}
            className="surface-card-strong mt-8 rounded-2xl p-5 shadow-sm transition-[opacity,transform] duration-200 sm:p-6"
          >
            {activeCategory ? (
              <div className="transition-opacity duration-200">
                <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      Selected
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-semibold text-text-primary">
                      {activeCategory.label}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-text-muted">
                      {activeCategory.description}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs font-medium text-text-muted">
                    {activeCategory.skills.length} skills
                  </span>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {activeCategory.skills.map((skill) => (
                    <SkillItem key={skill.slug || `${activeCategory.slug}-${skill.name}`} skill={skill} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-line px-5 py-10 text-center">
                <p className="text-lg font-medium text-text-primary">Choose a category</p>
                <p className="mt-3 text-sm leading-6 text-text-muted">
                  Pick one above to see the tools and topics in that group.
                </p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="mt-10 rounded-2xl border border-line bg-background p-6 shadow-sm">
          <p className="font-display text-lg font-medium text-text-primary">
            This section is being updated.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            I am still updating this part, so the full list is not visible yet.
          </p>
        </div>
      )}
    </section>
  );
}

export default Skills;
