import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          <span className="brand-dot"></span>
          Conrado Aguilar
        </NavLink>

        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
