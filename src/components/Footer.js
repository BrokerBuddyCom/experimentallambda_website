function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>ExperimentalLambda</h4>
            <p>
              We help small businesses get more customers and reduce manual work
              by automating tasks, communication and operations.
            </p>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="/#">Home</a>
            <a href="/about/#">About</a>
            <a href="/services/#">Services</a>
            <a href="/contact/#">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <Link to="/faq">FAQs</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 ExperimentalLambda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
