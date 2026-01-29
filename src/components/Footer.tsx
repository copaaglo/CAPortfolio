export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p> Conrado Aguilar Lopez</p>

        <div className="footer-links" style={{ display: 'flex', gap: '20px' }}>
          <a
            href="https://www.linkedin.com/in/conrado-aguilarlopez/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:aguilarpavel11@gmail.com" className="link">Email</a>
        </div>
      </div>
    </footer>
  );
}
