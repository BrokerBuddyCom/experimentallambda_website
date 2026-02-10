import React, { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    phone: "",
    email: "",
    message: "",
    contactMethod: "whatsapp",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1>Let's Build Your Business System</h1>
            <p>Get in touch with us to discuss your automation needs</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <ScrollReveal animation="left" className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="businessType">Business Type *</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your business type</option>
                    <option value="laundry">Laundry Service</option>
                    <option value="clinic">Clinic/Healthcare</option>
                    <option value="salon">Salon/Beauty</option>
                    <option value="repair">Repair Service</option>
                    <option value="gym">Gym/Fitness</option>
                    <option value="realestate">Real Estate</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Preferred Contact Method *</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="whatsapp"
                        checked={formData.contactMethod === "whatsapp"}
                        onChange={handleChange}
                      />
                      WhatsApp
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="call"
                        checked={formData.contactMethod === "call"}
                        onChange={handleChange}
                      />
                      Phone Call
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Request Consultation
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal animation="right" className="contact-info-section">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="info-item">
                  <strong>Phone:</strong>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="info-item">
                  <strong>Email:</strong>
                  <p>hello@experimentallambda.com</p>
                </div>
                <div className="info-item">
                  <strong>Business Hours:</strong>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
                <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href="#" aria-label="LinkedIn">
                      LinkedIn
                    </a>
                    <a href="#" aria-label="Twitter">
                      Twitter
                    </a>
                    <a href="#" aria-label="Facebook">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
