import React from "react";
import ScrollReveal from "./ScrollReveal";

function Problems() {
  const problems = [
    { icon: "📞", text: "Missed customer calls" },
    { icon: "📋", text: "Orders not tracked" },
    { icon: "😵", text: "Staff confusion & manual chaos" },
    { icon: "💸", text: "Payments not recorded" },
    { icon: "🔄", text: "Low repeat customers" },
    { icon: "📊", text: "No tracking of business performance" },
  ];

  return (
    <section className="problems">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <h2>Is this your reality?</h2>
        </ScrollReveal>
        <ScrollReveal animation="stagger" className="problems-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <span className="problem-icon">{problem.icon}</span>
              <p>{problem.text}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Problems;
