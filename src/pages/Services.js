import React from "react";
import ScrollReveal from "../components/ScrollReveal";
import { useAnalytics } from "../hooks/useAnalytics";

function Services() {
  const { trackCTA } = useAnalytics();

  const services = [
    {
      title: "Business Process Automation",
      description: "Automated workflows that reduce manual chaos.",
      icon: "⚙️",
    },
    {
      title: "Lead & Order Management",
      description: "Never miss a lead or order again.",
      icon: "📋",
    },
    {
      title: "Customer Communication Automation",
      description: "Automated WhatsApp/SMS updates & reminders.",
      icon: "💬",
    },
    {
      title: "Payment & Billing Automation",
      description: "Online payments + auto-recorded transactions.",
      icon: "💳",
    },
    {
      title: "Custom Business Dashboards",
      description: "One place to track everything.",
      icon: "📊",
    },
    {
      title: "Recurring & Repeat Customer Systems",
      description: "Encourage repeat business with automated emails/SMS.",
      icon: "🔄",
    },
  ];

  return (
    <div className="services-page">
      <section className="services-header">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1>Services We Offer</h1>
            <p>
              Professional automation solutions designed for your business
              growth
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <ScrollReveal animation="stagger" className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </ScrollReveal>
          <ScrollReveal animation="fade-up">
            <div className="services-cta">
              <h2>Ready to automate your business?</h2>
              <p>Get a free consultation with our automation experts</p>
              <a 
                href="/contact" 
                className="btn btn-primary"
                onClick={() => trackCTA('Talk to expert now', 'services_page', 'primary_button', '/contact')}
              >
                Talk to expert now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default Services;
