import type { Project } from "../data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const images = project.imageGallery || (project.imageUrl ? [project.imageUrl] : []);

  return (
    <article className="card">
      {images.length > 0 && (
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          padding: '24px', 
          background: 'rgba(255,255,255,0.02)',
          borderBottom: '1px solid var(--border)',
          justifyContent: 'center'
        }}>
          {images.map((img: string, idx: number) => (
            <div key={idx} style={{ flex: 1, maxWidth: images.length > 1 ? '30%' : '100%' }}>
              <img 
                src={img} 
                alt={`${project.title} screenshot ${idx + 1}`} 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px', 
                  border: '1px solid var(--border)', 
                  display: 'block',
                  objectFit: 'contain'
                }} 
              />
            </div>
          ))}
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
