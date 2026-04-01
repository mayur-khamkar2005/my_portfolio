import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

function CategoryButton({ category, isActive, onSelect }) {
  return (
    <button
      type="button"
      id={category.slug}
      className={`w-full rounded-2xl border px-5 py-4 text-left transition-[border-color,background-color,color] duration-200 ${
        isActive
          ? "border-accent bg-accent-soft text-text-primary"
          : "border-line bg-background text-text-primary hover:border-accent"
      }`}
      onClick={() => onSelect(category.slug)}
      onMouseEnter={() => onSelect(category.slug)}
      aria-pressed={isActive}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-text-primary">{category.label}</p>
          <p className="mt-2 text-sm leading-6 text-text-muted">
            {category.description || "Select to view related skills."}
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
    const hashSlug = location.hash ? decodeURIComponent(location.hash.replace("#", "")) : "";
    const matchedCategory = safeCategories.find((category) => category.slug === hashSlug);

    if (matchedCategory) {
      setActiveCategorySlug(matchedCategory.slug);
      return;
    }

    setActiveCategorySlug("");
  }, [location.hash, safeCategories]);

  const activeCategory = safeCategories.find((category) => category.slug === activeCategorySlug);

  return (
    <section id="skills" className="section-shell py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="eyebrow">Skills</p>
        <h1 className="section-title mt-4">Skills organized by category for a cleaner experience.</h1>
        <p className="mt-4 text-base leading-7 text-text-muted">
          Choose a category to view only the related skills. This keeps the page simple,
          readable, and easy to browse without showing everything at once.
        </p>
      </div>

      {safeCategories.length ? (
        <>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {safeCategories.map((category) => (
              <CategoryButton
                key={category.slug}
                category={category}
                isActive={category.slug === activeCategorySlug}
                onSelect={setActiveCategorySlug}
              />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-line bg-background p-6 shadow-sm transition-[opacity,transform] duration-200">
            {activeCategory ? (
              <div className="transition-opacity duration-200">
                <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      Active Category
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
                <p className="text-lg font-medium text-text-primary">Select a category</p>
                <p className="mt-3 text-sm leading-6 text-text-muted">
                  Click or hover on a category above to view only the skills inside that
                  group.
                </p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="mt-10 rounded-2xl border border-line bg-background p-6 shadow-sm">
          <p className="font-display text-lg font-medium text-text-primary">
            Skills are being refreshed.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Category data is not available yet, so the structured skills view cannot be
            shown right now.
          </p>
        </div>
      )}
    </section>
  );
}

export default Skills;
