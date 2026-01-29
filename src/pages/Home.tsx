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
          Computer Engineering student specializing in high-performance architecture and elegant digital experiences.
        </p>

        <div className="row" style={{ justifyContent: 'flex-start', margin: '24px 0 0' }}>
          <Link className="btn" to="/resume">
            Resume
          </Link>
          <Link className="btn btn-outline" to="/projects">
            Projects
          </Link>
        </div>
      </div>

      <div className="section-head" style={{ border: 'none', padding: '0', margin: '0' }}>
        <h2 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Selected Works</h2>
      </div>

      <div className="grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
