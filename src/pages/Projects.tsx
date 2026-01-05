import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const project = projects[0];

  return (
    <section className="stack center">
      <div className="project-page">
        <h1 className="center-text">Projects</h1>

        {/* Main project card */}
        <ProjectCard project={project} />

        {/* Detailed project overview */}
        <div className="card">
          <h2 className="center-text">Project Overview</h2>

          <div className="project-text">
            <p>
              I designed and implemented a simple general purpose processor
              using VHDL and deployed it onto an FPGA board. I was responsible
              for building the Arithmetic and Logic Unit which performs a
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

        {/* Project visuals */}
        <div className="card">
          <h2 className="center-text">Project Visuals</h2>

          <div className="project-visuals">
            <img
              src="/images/cpu-board1.jpg"
              alt="FPGA board running the CPU"
            />
            <img
              src="/images/blockdiagram.jpg"
              alt="CPU schematic and datapath design"
            />
            <img
              src="/images/htmlcode.jpg"
              alt="HTML code used to implement the processor"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
