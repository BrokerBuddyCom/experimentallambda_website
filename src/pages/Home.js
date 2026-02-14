import React from "react";
import BackToTopButton from "../components/BackToTopButton";
import Hero from "../components/Hero";
import Problems from "../components/Problems";
import Solutions from "../components/Solutions";
import HowItWorks from "../components/HowItWorks";
import Results from "../components/Results";
import Trust from "../components/Trust";
import ServicesOverview from "../components/ServicesOverview";
import FinalCTA from "../components/FinalCTA";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Problems />
      <Solutions />
      <HowItWorks />
      <Results />
      <Trust />
      <ServicesOverview />
      <FinalCTA />
      <BackToTopButton />
    </div>
  );
}

export default Home;
