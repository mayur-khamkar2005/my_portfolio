import Skills from "../components/Skills";
import { skillCategories, skills } from "../lib/siteContent";

function SkillsPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <Skills skills={skills} categories={skillCategories} />
    </div>
  );
}

export default SkillsPage;
