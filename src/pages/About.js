import React from "react";
import ScrollReveal from "../components/ScrollReveal";

function About() {
  return (
    <div className="about-page">
      <section className="about-header">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1>We Help Small Businesses Grow With Automation</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="about-text">
              <p>
                ExperimentalLambda is a business automation company that works
                with SMBs (laundry, clinics, salons, service businesses) to
                reduce manual work, increase revenue, and improve customer
                experience. We take messy business processes and turn them into
                simple, repeatable, digital systems.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger" className="about-highlights">
            <div className="highlight-card">
              <h3>1000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="highlight-card">
              <h3>Trusted Partner</h3>
              <p>For Business Automation</p>
            </div>
            <div className="highlight-card">
              <h3>Business First</h3>
              <p>Technology Second</p>
            </div>
          </ScrollReveal>

          <div className="about-values">
            <ScrollReveal animation="fade-up">
              <h2>Our Approach</h2>
            </ScrollReveal>
            <ScrollReveal animation="stagger" className="values-grid">
              <div className="value-item">
                <h4>Vision</h4>
                <p>
                  To empower every small business with affordable automation
                  that drives growth.
                </p>
              </div>
              <div className="value-item">
                <h4>Mission</h4>
                <p>
                  Transform manual business operations into automated systems
                  that save time and increase revenue.
                </p>
              </div>
              <div className="value-item">
                <h4>Values</h4>
                <p>
                  Simple solutions, measurable results, and dedicated support
                  for your business success.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
