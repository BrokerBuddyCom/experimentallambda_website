import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

function ServicesOverview() {
  const services = [
    "Business Process Automation",
    "Lead & Order Management",
    "WhatsApp/SMS Automation",
    "Payment Integration",
    "Custom Dashboards",
    "Customer Retention Systems",
  ];

  return (
    <section className="services-overview">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <h2>Our Services</h2>
        </ScrollReveal>
        <ScrollReveal animation="stagger" className="services-preview">
          {services.map((service, index) => (
            <div key={index} className="service-preview-item">
              <span>✓</span>
              <p>{service}</p>
            </div>
          ))}
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <div className="services-link">
            <Link to="/services" className="btn btn-secondary">
              Learn More About Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ServicesOverview;
