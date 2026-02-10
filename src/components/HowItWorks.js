import React from "react";
import ScrollReveal from "./ScrollReveal";

function HowItWorks() {
  const steps = [
    { number: "1", text: "We study how your business runs" },
    { number: "2", text: "We design simple automation systems" },
    { number: "3", text: "We connect WhatsApp, reminders, and dashboards" },
    { number: "4", text: "Your business runs itself" },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <h2>How It Works</h2>
        </ScrollReveal>
        <ScrollReveal animation="stagger" className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <p>{step.text}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

export default HowItWorks;
