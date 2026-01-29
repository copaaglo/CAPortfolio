import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="stack">
      <div className="hero">
        <h1>Conrado<br />Aguilar</h1>

        <p className="muted">
          Computer Engineering student specializing in high-performance web architecture, accessible UI/UX design, and complex product engineering.
        </p>

        <div className="row" style={{ justifyContent: 'flex-start', margin: '0' }}>
          <Link className="btn" to="/resume">
            View Resume
          </Link>
          <Link className="btn btn-outline" to="/projects">
            Explore Projects
          </Link>
        </div>
      </div>

      <div className="section-head" style={{ border: 'none', padding: '0', margin: '0' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--secondary)' }}>Featured Work</h2>
      </div>

      <div className="grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
