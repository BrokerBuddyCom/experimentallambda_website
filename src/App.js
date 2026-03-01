import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import { initAnalytics } from "./utils/analytics";
import { usePageTracking } from "./hooks/useAnalytics";
import "./App.css";

function AppContent({ darkMode, toggleDarkMode }) {
  // Track page views automatically
  usePageTracking();

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <AnimatedBackground />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Initialize PostHog Analytics on app mount
  useEffect(() => {
    initAnalytics();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <AppContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </Router>
  );
}

export default App;
