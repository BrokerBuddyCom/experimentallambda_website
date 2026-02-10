import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

function Trust() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Laundry Services",
      text: "We used to miss so many orders. Now everything is automated and we serve 3x more customers!",
      rating: 5,
    },
    {
      name: "Dr. Priya Sharma",
      business: "HealthCare Clinic",
      text: "Patient appointments are now automated. Our staff can focus on care instead of phone calls.",
      rating: 5,
    },
    {
      name: "Anil Mehta",
      business: "Style Salon",
      text: "WhatsApp reminders reduced no-shows by 60%. Best investment we made!",
      rating: 5,
    },
  ];

  const industries = [
    { icon: "👕", name: "Laundry" },
    { icon: "🏥", name: "Clinics" },
    { icon: "✂️", name: "Salons" },
    { icon: "🔧", name: "Repair" },
    { icon: "💪", name: "Gyms" },
    { icon: "🏠", name: "Real Estate" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="trust">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <h2>1000+ Happy Clients</h2>
        </ScrollReveal>

        <ScrollReveal animation="scale">
          <div className="testimonial-slider">
            <button className="slider-btn prev" onClick={prevSlide}>
              ‹
            </button>
            <div className="testimonial-card">
              <div className="rating">
                {"⭐".repeat(testimonials[currentSlide].rating)}
              </div>
              <p className="testimonial-text">
                "{testimonials[currentSlide].text}"
              </p>
              <p className="testimonial-author">
                <strong>{testimonials[currentSlide].name}</strong>
                <br />
                {testimonials[currentSlide].business}
              </p>
            </div>
            <button className="slider-btn next" onClick={nextSlide}>
              ›
            </button>
          </div>
        </ScrollReveal>

        <div className="industries">
          <ScrollReveal animation="fade-up">
            <h3>Industries We Serve</h3>
          </ScrollReveal>
          <ScrollReveal animation="stagger" className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-item">
                <span className="industry-icon">{industry.icon}</span>
                <p>{industry.name}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Trust;
