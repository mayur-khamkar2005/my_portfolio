import Hero from "../components/Hero";
import HomeMiniGames from "../components/HomeMiniGames";
import { heroHighlights, resumePdf } from "../lib/content/siteMeta";

function HomePage() {
  const safeHighlights = heroHighlights.filter(
    (item) => typeof item?.label === "string" && typeof item?.value === "string",
  );

  return (
    <>
      <Hero resumeUrl={resumePdf} highlights={safeHighlights} />
      <HomeMiniGames />
    </>
  );
}

export default HomePage;
