export default function Contact() {
  const email = "aguilarpavel11@gmail.com";
  const mailtoLink = `mailto:${email}?subject=Portfolio%20Inquiry&body=Hi%20Conrado,%0D%0A%0D%0A`;

  return (
    <section className="stack">
      <h1>Contact</h1>

      <div className="hero">
        <h2>Let’s connect</h2>
        <p className="muted">
          If you want to chat about internships, projects, or anything related,
          feel free to reach out.
        </p>

        <div className="row">
          <a className="btn" href={mailtoLink}>
            Email
          </a>

          <a
            className="btn btn-outline"
            href="https://www.linkedin.com/in/conrado-aguilarlopez/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mini-grid">
        <div className="mini-card">
          <h3>Email</h3>
          <p className="muted">{email}</p>
        </div>

        <div className="mini-card">
          <h3>Location</h3>
          <p className="muted">Toronto, ON (Open to Remote)</p>
        </div>
      </div>
    </section>
  );
}
