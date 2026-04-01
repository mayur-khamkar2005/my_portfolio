import Skills from "../components/Skills";
import { skills } from "../lib/siteContent";

function SkillsPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <Skills skills={skills} />
    </div>
  );
}

export default SkillsPage;
