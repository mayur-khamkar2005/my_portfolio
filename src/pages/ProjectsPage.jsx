import Projects from "../components/Projects";
import { projects } from "../lib/siteContent";

function ProjectsPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <Projects projects={projects} />
    </div>
  );
}

export default ProjectsPage;
