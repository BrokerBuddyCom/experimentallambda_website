import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/">
              <Logo size="default" showText={true} />
            </Link>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>

          <div className="navbar-actions">
            <button
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <div className="navbar-cta">
              <Link to="/contact" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
