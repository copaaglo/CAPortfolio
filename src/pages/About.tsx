export default function About() {
  return (
    <section className="stack">
      <h1>About</h1>

      <p className="muted">
        I am a Computer Engineering student who enjoys building software that
        people actually enjoy using. I like working on the front end, learning
        how systems work, and improving my skills through hands on projects.
      </p>

      {/* Top row: Background + Skills */}
      <div className="mini-grid">
        <div className="mini-card">
          <h3>Background</h3>
          <ul className="bullets">
            <li>
              Computer Engineering student at Toronto Metropolitan University
            </li>
            <li>Experience with both software and hardware focused projects</li>
            <li>Strong interest in front end and user experience</li>
          </ul>
        </div>

        <div className="mini-card">
          <h3>Skills</h3>
          <ul className="bullets">
            <li>JavaScript and TypeScript for front end development</li>
            <li>HTML and CSS for responsive layouts</li>
            <li>Java, C, and Python through coursework</li>
            <li>Git, Linux, and basic cloud tools</li>
          </ul>
        </div>
      </div>

      {/* Bottom row: Relevant Courses (centered) */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="mini-card" style={{ maxWidth: "520px", width: "100%" }}>
          <h3>Relevant Courses</h3>
          <ul className="bullets">
            <li>Data Structures and Algorithms</li>
            <li>Object Oriented Programming</li>
            <li>Computer Networks</li>
            <li>Operating Systems</li>
            <li>Microprocessor Systems</li>
            <li>Computer Organization and Architecture</li>
            <li>Software Design and Architecture</li>
            <li>Signals and Systems</li>
            <li>Electronic Circuits and Components</li>
            <li>Software Requirement Analysis and SPEC</li>
            <li>Advanced Algorithms</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
