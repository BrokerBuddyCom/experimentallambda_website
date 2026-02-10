import React from "react";
import ScrollReveal from "./ScrollReveal";

function Solutions() {
  const solutions = [
    {
      icon: "⚡",
      title: "Smart Automation",
      description: "We digitize your manual workflows so nothing is missed.",
    },
    {
      icon: "📊",
      title: "Business Dashboard",
      description:
        "See all your orders, customers, staff, and revenue in one place.",
    },
    {
      icon: "💬",
      title: "WhatsApp Automation",
      description:
        "Automatic updates, reminders, follow-ups, and confirmations.",
    },
    {
      icon: "💳",
      title: "Payment Integration",
      description: "Accept online payments and keep accurate records.",
    },
  ];

  return (
    <section className="solutions">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <h2>How We Help You</h2>
          <p className="section-subtitle">Automation that gets work done</p>
        </ScrollReveal>
        <ScrollReveal animation="stagger" className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon">{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Solutions;
