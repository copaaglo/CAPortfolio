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
              Third-year Computer Engineering student at Toronto Metropolitan University
            </li>
            <li>Specializing in hardware, digital systems, and software development</li>
            <li>Experience in project planning and community leadership (MUES)</li>
          </ul>
        </div>

        <div className="mini-card">
          <h3>Technical Skills</h3>
          <ul className="bullets">
            <li><strong>Languages:</strong> Python, Java, C/C++, TypeScript, JavaScript, VHDL, HTML</li>
            <li><strong>Frameworks:</strong> React, React Native, Node.js, Flask, JavaFX</li>
            <li><strong>Tools:</strong> Git, Docker, Quartus II, OpenAI API, Vercel, Replit</li>
            <li><strong>Certifications:</strong> IBM Introduction to Artificial Intelligence</li>
          </ul>
        </div>
      </div>

      {/* Bottom row: Relevant Courses (centered) */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="mini-card" style={{ maxWidth: "520px", width: "100%" }}>
          <h3>Relevant Courses</h3>
          <ul className="bullets">
            <li>Advanced Algorithms</li>
            <li>Java Object-Oriented Programming</li>
            <li>Digital Circuits</li>
            <li>Signals and Systems</li>
            <li>Microprocessor Systems</li>
            <li>Computer Organization and Architecture</li>
            <li>Data Structures and Algorithms</li>
            <li>Software Design and Architecture</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
