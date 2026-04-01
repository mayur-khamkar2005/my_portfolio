import Hero from "../components/Hero";
import { heroHighlights, resumePdf } from "../lib/siteContent";

function HomePage() {
  const safeHighlights = heroHighlights.filter(
    (item) => typeof item?.label === "string" && typeof item?.value === "string",
  );

  return <Hero resumeUrl={resumePdf} highlights={safeHighlights} />;
}

export default HomePage;
