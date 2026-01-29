import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="stack">
      <div className="section-head">
        <h1>Projects</h1>
        <p className="muted">
          A showcase of my engineering work, ranging from full-stack web applications 
          to hardware-level digital systems.
        </p>
      </div>

      <div className="grid">
        {projects.map((project) => (
          <div key={project.title} className="project-wrapper">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
