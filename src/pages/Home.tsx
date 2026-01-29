import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="stack">
      <div className="hero">
        <h1>Conrado Aguilar</h1>

        <p className="muted">
          Computer Engineering Student at Toronto Metropolitan University |
          Seeking for co-op opportunities in the software development field
        </p>

        <div className="row center">
          <Link className="btn btn-pill" to="/resume">
            View Resume
          </Link>
          <Link className="btn btn-pill btn-pill-outline" to="/projects">
            Explore Projects
          </Link>
        </div>

        <div className="mini-grid">
          <div className="mini-card">
            <h3>Core Competencies</h3>
            <p className="muted">
              Full-stack development with Python, React, and Node.js. Expertise
              in hardware-level programming (VHDL) and digital systems design.
            </p>
          </div>

          <div className="mini-card">
            <h3>Professional Focus</h3>
            <p className="muted">
              Building scalable automation tools and high-performance software
              interfaces. Seeking roles in hardware-software integration and
              full-stack engineering.
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
          <div key={project.title} className="card project-preview">
            <h3>{project.title}</h3>
            <p className="muted" style={{ fontSize: '0.95rem', margin: '16px 0' }}>
              {project.summary || project.description}
            </p>
            <div className="pill-row" style={{ marginBottom: '24px' }}>
              {project.tech.slice(0, 3).map(t => <span key={t} className="pill">{t}</span>)}
              {project.tech.length > 3 && <span className="pill">+{project.tech.length - 3}</span>}
            </div>
            <Link to="/projects" className="link" style={{ fontSize: '0.85rem' }}>
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
