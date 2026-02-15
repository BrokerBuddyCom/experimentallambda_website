import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { useAnalytics } from "../hooks/useAnalytics";

function FinalCTA() {
  const { trackCTA } = useAnalytics();

  return (
    <section className="final-cta">
      <div className="container">
        <ScrollReveal animation="blur">
          <h2>Stop managing manually — automate now</h2>
          <p>
            Get a free consultation and see how automation can transform your
            business
          </p>
          <div className="cta-buttons">
            <Link 
              to="/contact" 
              className="btn btn-primary"
              onClick={() => trackCTA('Book Free Consultation', 'final_cta_section', 'primary_button', '/contact')}
            >
              Book Free Consultation
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-secondary"
              onClick={() => trackCTA('Contact Us', 'final_cta_section', 'secondary_button', '/contact')}
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default FinalCTA;
