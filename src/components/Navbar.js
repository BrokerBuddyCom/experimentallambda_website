import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAnalytics } from "../hooks/useAnalytics";

function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { trackCTA, trackNav, trackTheme } = useAnalytics();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeToggle = () => {
    const newMode = !darkMode ? 'dark' : 'light';
    trackTheme(newMode);
    toggleDarkMode();
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
            <Link to="/" onClick={() => { trackNav('Home', 'navbar', '/'); setIsMenuOpen(false); }}>
              Home
            </Link>
            <Link to="/services" onClick={() => { trackNav('Services', 'navbar', '/services'); setIsMenuOpen(false); }}>
              Services
            </Link>
            <Link to="/about" onClick={() => { trackNav('About', 'navbar', '/about'); setIsMenuOpen(false); }}>
              About
            </Link>
            <Link to="/contact" onClick={() => { trackNav('Contact', 'navbar', '/contact'); setIsMenuOpen(false); }}>
              Contact
            </Link>
          </div>

          <div className="navbar-actions">
            <button
              className="theme-toggle"
              onClick={handleThemeToggle}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <div className="navbar-cta">
              <Link 
                to="/contact" 
                className="btn btn-primary"
                onClick={() => trackCTA('Get Started', 'navbar', 'primary_button', '/contact')}
              >
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
