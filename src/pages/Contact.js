import { useState, useRef } from "react";
import ScrollReveal from "../components/ScrollReveal";
import toast, { Toaster } from "react-hot-toast";
import { useAnalytics } from "../hooks/useAnalytics";

function Contact() {
  const { trackFormStart, trackFormField, trackFormSubmit, trackFormSuccess, trackFormError } = useAnalytics();
  const formStartTimeRef = useRef(null);
  const [formStarted, setFormStarted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    phone: "",
    email: "",
    message: "",
    contactMethod: "whatsapp",
  });

  const handleFormStart = () => {
    if (!formStarted) {
      formStartTimeRef.current = Date.now();
      setFormStarted(true);
      trackFormStart('contact_form', 'contact_page');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const completionTime = formStartTimeRef.current 
      ? Math.round((Date.now() - formStartTimeRef.current) / 1000)
      : 0;
    
    // Track form submission attempt
    trackFormSubmit(
      'contact_form',
      formData.businessType,
      formData.contactMethod,
      formData.message.length,
      completionTime
    );

    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "bcb08ceb-2bce-4eda-8f3a-8e0d181d5b3b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      if (data.success === true) {
        // Track successful form submission
        trackFormSuccess('contact_form', formData.businessType, formData.contactMethod);
        showSuccess();
        setFormData({
          name: "",
          businessType: "",
          phone: "",
          email: "",
          message: "",
          contactMethod: "whatsapp",
        });
        setFormStarted(false);
        formStartTimeRef.current = null;
      } else {
        // Track form error
        trackFormError('contact_form', 'submission', 'api_response', data.message || 'Unknown error');
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      // Track network error
      trackFormError('contact_form', 'submission', 'network', error.message);
      toast.error("Network error. Please check your connection.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Track field completion when user moves away from a filled field
    if (value && value.trim() !== '') {
      const fieldOrder = ['name', 'businessType', 'phone', 'email', 'message', 'contactMethod'].indexOf(name) + 1;
      trackFormField('contact_form', name, fieldOrder);
    }
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log("Form submitted:", formData);
  //   alert("Thank you! We will contact you soon.");
  // };
  const showSuccess = () => {
    toast.success("Message sent successfully!");
  };

  return (
    <div className="contact-page">
      <Toaster position="bottom-center" reverseOrder={false} />
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
                    onFocus={handleFormStart}
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
                  <p>+91 (9768067166 / 8477083074)</p>
                </div>
                <div className="info-item">
                  <strong>Email:</strong>
                  <p>official@experimentallambda.com</p>
                </div>
                <div className="info-item">
                  <strong>Business Hours:</strong>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
                {/* <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href="/" aria-label="LinkedIn">
                      LinkedIn
                    </a>
                    <a href="/" aria-label="Twitter">
                      Twitter
                    </a>
                    <a href="/" aria-label="Facebook">
                      Facebook
                    </a>
                  </div>
                </div> */}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
