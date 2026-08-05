import ProjectCard from "../components/ProjectCard";
import { projects, type Project } from "../data/projects";

function HardwareProject({ project }: { project: Project }) {
  return (
    <div className="hardware-project-section stack">
      <div className="card">
        <h2 className="center-text">{project.title}</h2>
        <p className="center-text muted" style={{ marginBottom: "16px" }}>{project.description}</p>
        <div className="pill-row center" style={{ marginBottom: "24px" }}>
          {project.tech.map(t => <span key={t} className="pill">{t}</span>)}
        </div>
        <ul className="bullets" style={{ maxWidth: "700px", margin: "0 auto" }}>
          {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </div>

      <div className="card">
        <h2 className="center-text">Project Overview</h2>
        <div className="project-text">
          <p>
            I designed and implemented a simple general purpose processor using VHDL and deployed it
            onto an FPGA board. I was responsible for building the Arithmetic and Logic Unit which performs a
            variety of 8 bit arithmetic and logical operations.
          </p>
          <p>
            In addition, I designed the processor registers, control unit, and
            core architecture, ensuring all components worked together as a
            complete system. Each module was written and tested in Quartus II,
            with functionality verified through waveform simulations before
            hardware implementation.
          </p>
          <p>
            The control logic was managed using an FSM based approach to
            properly sequence operations. Processor output was displayed on 7
            segment displays to confirm correct behavior in real time.
          </p>
          <p>
            Beyond the basic requirements, I extended the ALU with additional
            operations such as bit shifts, rotations, comparisons, and logical
            functions. This project strengthened my understanding of processor
            architecture and digital logic design.
          </p>
        </div>
      </div>

      <div className="card">
        <h2 className="center-text">Project Visuals</h2>
        <div className="project-visuals">
          <img src="/images/cpu-board1.jpg" alt="FPGA board running the CPU" />
          <img src="/images/blockdiagram.jpg" alt="CPU schematic and datapath design" />
          <img src="/images/htmlcode.jpg" alt="Quartus II development environment" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const softwareProjects = projects.filter(p => !(p as any).isHardware);
  const hardwareProjects = projects.filter(p => (p as any).isHardware);

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
        {softwareProjects.map((project) => (
          <div key={project.title} className="project-wrapper">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {hardwareProjects.map((project) => (
        <HardwareProject key={project.title} project={project} />
      ))}
    </section>
  );
}
