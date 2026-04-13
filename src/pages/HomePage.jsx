import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import { heroHighlights, resumePdf } from "../lib/content/siteMeta";

const HomeMiniGames = lazy(() => import("../components/HomeMiniGames"));

function HomeMiniGamesFallback() {
  return (
    <section className="section-shell pb-14 sm:pb-20 lg:pb-24">
      <div className="surface-card-strong p-6 sm:p-8">
        <p className="eyebrow">Loading</p>
        <h2 className="mt-4 font-display text-2xl font-semibold text-text-primary sm:text-3xl">
          Preparing the mini games
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
          The main portfolio content loads first, then the extra interactive
          section is added once it is ready.
        </p>
      </div>
    </section>
  );
}

function HomePage() {
  const safeHighlights = heroHighlights.filter(
    (item) => typeof item?.label === "string" && typeof item?.value === "string",
  );

  return (
    <>
      <Hero resumeUrl={resumePdf} highlights={safeHighlights} />
      <Suspense fallback={<HomeMiniGamesFallback />}>
        <HomeMiniGames />
      </Suspense>
    </>
  );
}

export default HomePage;
