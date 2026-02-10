import React from "react";
import ScrollReveal from "./ScrollReveal";

function Results() {
  const benefits = [
    { icon: "⏱️", text: "30–50% less manual workload" },
    { icon: "✅", text: "No lost orders" },
    { icon: "🔄", text: "More repeat customers" },
    { icon: "👥", text: "Better staff coordination" },
    { icon: "📈", text: "Accurate reports" },
    { icon: "🎯", text: "More business control" },
  ];

  return (
    <section className="results">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <h2>What Happens After Automation</h2>
        </ScrollReveal>
        <ScrollReveal animation="stagger" className="results-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="result-item">
              <span className="result-icon">{benefit.icon}</span>
              <p>{benefit.text}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Results;
