import React, { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

const faqData = [
  {
    category: "General Questions",
    items: [
      {
        question: "What does ExperimentalLambda do?",
        answer:
          "We help businesses automate their daily operations like bookings, customer communication, follow-ups, and tracking — so they can save time and grow faster.",
      },
      {
        question: "Who can use your services?",
        answer:
          "Small and medium businesses such as laundry services, clinics, property platforms, local service providers, and startups.",
      },
      {
        question: "Do I need technical knowledge?",
        answer:
          "No. We handle the technical setup. You just focus on running your business.",
      },
      {
        question: "Do you replace my staff?",
        answer: "No. We help your team work smarter by reducing manual tasks.",
      },
    ],
  },
  {
    category: "Service Questions",
    items: [
      {
        question: "What kind of automation do you provide?",
        answer:
          "Booking systems, WhatsApp/SMS alerts, lead tracking, follow-up reminders, dashboards, and workflow automation.",
      },
      {
        question: "How long does setup take?",
        answer: "Usually 5–15 days depending on project size.",
      },
      {
        question: "Is the system customizable?",
        answer: "Yes. We build solutions according to your business needs.",
      },
    ],
  },
  {
    category: "Pricing & Support",
    items: [
      {
        question: "How do you charge?",
        answer: "We offer project-based pricing and monthly support plans.",
      },
      {
        question: "Do you provide support after setup?",
        answer: "Yes. We provide ongoing support and improvements.",
      },
      {
        question: "How do I get started?",
        answer: "Contact us through the Contact page or schedule a call.",
      },
    ],
  },
];

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="accordion-question">{question}</span>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div className="accordion-body">
        <p>{answer}</p>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div className="faq-page">
      <section className="faq-header">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1>Frequently Asked Questions</h1>
            <p>
              Find quick answers about how ExperimentalLambda helps businesses
              automate and grow.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          {faqData.map((section, sectionIndex) => (
            <ScrollReveal key={sectionIndex} animation="fade-up">
              <div className="faq-section">
                <h2>{section.category}</h2>
                <div className="accordion">
                  {section.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FAQ;
