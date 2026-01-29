import type { Project } from "../data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="card">
      {project.imageUrl && (
        <div style={{ padding: '24px 24px 0 24px' }}>
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--border)', display: 'block' }} 
          />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>

        <ul className="pill-row">
          {project.tech.map((tech) => (
            <li key={tech} className="pill">
              {tech}
            </li>
          ))}
        </ul>

        <ul className="bullets">
          {project.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="card-actions">
          {project.liveUrl && (
            <a
              className="btn"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
