import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge ripple-effect">
            <span>New</span>
            AI-Powered Automation for Local Businesses
          </div>
          <h1>
            <span className="shimmer-text">Turn Your Manual Business</span>
            <br />
            Into an Automated System
          </h1>
          <p>
            We help laundries, clinics, salons, and service businesses get
            bookings, manage customers, send reminders, and accept payments —
            automatically.
          </p>
          <div className="hero-buttons">
            <Link
              to="/contact"
              className="btn btn-primary glow-border ripple-effect"
            >
              Book Free Consultation
            </Link>
            <a href="#how-it-works" className="btn btn-secondary ripple-effect">
              See How It Works
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-illustration float-animation">
            <div className="illustration-flow">
              <div className="illustration-before">
                <span className="emoji-chaos">😰</span>
                <p>MANUAL CHAOS</p>
              </div>
              <div className="illustration-arrow">
                <span className="arrow-icon">→</span>
              </div>
              <div className="illustration-after">
                <span className="emoji-flow">✨</span>
                <p>AUTOMATED FLOW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
