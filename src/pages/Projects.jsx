import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold">Projects</h1>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
