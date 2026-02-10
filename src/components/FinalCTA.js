import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

function FinalCTA() {
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
            <Link to="/contact" className="btn btn-primary">
              Book Free Consultation
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default FinalCTA;
