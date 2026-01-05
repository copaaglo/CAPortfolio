export default function Resume() {
  const resumeUrl = "/resume/resume.pdf";

  return (
    <section className="stack">
      <div className="center">
        <h1 style={{ margin: 0 }}>Resume</h1>

        <a
          className="btn"
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          download
        >
          Download PDF
        </a>
      </div>

      <p className="muted center-text"></p>

      <div className="pdf-wrap">
        <iframe className="pdf" src={resumeUrl} title="Resume PDF" />
      </div>
    </section>
  );
}
