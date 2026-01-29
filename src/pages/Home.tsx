import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="stack">
      <div className="hero">
        <h1>Conrado Aguilar</h1>

        <p className="muted">
          Computer Engineering student specializing in front-end
          development and crafting high-performance, accessible web
          interfaces.
        </p>

        <div className="row">
          <Link className="btn" to="/resume">
            View Resume
          </Link>
          <Link className="btn btn-outline" to="/projects">
            Explore Projects
          </Link>
        </div>

        <div className="mini-grid">
          <div className="mini-card">
            <h3>Core Competencies</h3>
            <p className="muted">
              Advanced React patterns, TypeScript architecture, and
              modern design systems that scale with user needs.
            </p>
          </div>

          <div className="mini-card">
            <h3>Professional Focus</h3>
            <p className="muted">
              Seeking engineering roles where I can contribute to
              complex product challenges and user-centric features.
            </p>
          </div>
        </div>
      </div>

      <div className="section-head">
        <h2>Featured Work</h2>
        <Link to="/projects" className="link">
          View all projects →
        </Link>
      </div>

      <div className="grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
