import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <aside className="sidebar">
      <NavLink to="/" className="brand">
        Conrado Aguilar
      </NavLink>

      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
          Projects
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => (isActive ? "active" : "")}>
          Resume
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
          Contact
        </NavLink>
      </nav>

      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </aside>
  );
}
