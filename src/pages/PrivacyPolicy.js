import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <section className="privacy-header">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1>Privacy Policy</h1>
            <p>
              Your privacy is important to us. This policy explains how we
              collect and use information.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="legal-sections">
            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>1. Information We Collect</h2>
                <p>We may collect:</p>
                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business details</li>
                  <li>Website usage data (cookies, analytics)</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>2. How We Use Information</h2>
                <p>We use your data to:</p>
                <ul>
                  <li>Provide our services</li>
                  <li>Improve our website</li>
                  <li>Contact you about your inquiries</li>
                  <li>Send service updates</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>3. Data Protection</h2>
                <p>
                  We use secure systems to protect your data and do not sell
                  personal information.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>4. Third-Party Tools</h2>
                <p>We may use trusted services like:</p>
                <ul>
                  <li>Hosting providers</li>
                  <li>Analytics tools</li>
                  <li>Messaging platforms</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>5. Your Rights</h2>
                <p>
                  You can request access, correction, or deletion of your data.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>6. Cookies</h2>
                <p>We use cookies to improve website experience.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>7. Contact</h2>
                <p>
                  For privacy concerns, contact us via the{" "}
                  <Link to="/contact" className="legal-link">
                    Contact page
                  </Link>
                  .
                </p>
              </div>
            </ScrollReveal>

            <div className="legal-updated">
              <p>Last updated: February 2026</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
