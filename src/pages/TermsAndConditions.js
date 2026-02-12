import React from "react";
import ScrollReveal from "../components/ScrollReveal";

function TermsAndConditions() {
  return (
    <div className="terms-page">
      <section className="terms-header">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1>Terms and Conditions</h1>
            <p>These terms govern the use of our website and services.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="legal-sections">
            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>1. Use of Website</h2>
                <p>You agree to use our website for lawful purposes only.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>2. Services</h2>
                <p>
                  We provide automation and digital solutions as agreed in
                  project scope.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>3. Payments</h2>
                <p>Payment terms will be agreed before project start.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>4. Intellectual Property</h2>
                <p>
                  All designs, code, and materials developed by us remain our
                  intellectual property unless otherwise agreed.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>5. Limitation of Liability</h2>
                <p>
                  We are not responsible for business losses due to misuse or
                  external factors.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>6. Termination</h2>
                <p>We may stop services if terms are violated.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>7. Changes to Terms</h2>
                <p>
                  We may update these terms. Continued use means acceptance.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="legal-card">
                <h2>8. Governing Law</h2>
                <p>These terms follow the laws of India.</p>
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

export default TermsAndConditions;
