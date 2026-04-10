import About from "../components/About";
import { focusAreas } from "../lib/content/siteMeta";

function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <About focusAreas={focusAreas} />
    </div>
  );
}

export default AboutPage;
