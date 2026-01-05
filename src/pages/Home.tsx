import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="stack">
      <div className="hero">
        <h1> Conrado Aguilar Lopez </h1>

        <p className="muted">
          Computer Engineering student with a strong interest in front end
          development and building clean, user focused interfaces.
        </p>

        <div className="row">
          <Link className="btn" to="/resume">
            Resume
          </Link>
          <Link className="btn btn-outline" to="/projects">
            View Projects
          </Link>
          <Link className="btn btn-outline" to="/contact">
            Contact
          </Link>
        </div>

        <div className="mini-grid">
          <div className="mini-card">
            <h3>What I enjoy working on</h3>
            <p className="muted">
              Front end development, problem solving, and turning ideas into
              usable software.
            </p>
          </div>

          <div className="mini-card">
            <h3>Currently looking for</h3>
            <p className="muted">
              Front and back endinternships, co op roles, or junior developer
              opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="section-head">
        <h2>Featured Project</h2>
        <Link to="/projects" className="link">
          See all →
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
