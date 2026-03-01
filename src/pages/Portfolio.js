import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { useAnalytics } from "../hooks/useAnalytics";

const projects = [
  {
    id: 1,
    title: "ShopFlow Pro",
    client: "RetailMax Inc.",
    category: "E-Commerce",
    description:
      "A full-featured e-commerce dashboard with real-time sales analytics, inventory management, and automated order processing.",
    image: "/portfolio/ecommerce-dashboard.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://example.com/shopflow",
  },
  {
    id: 2,
    title: "InsightHub Analytics",
    client: "DataVista Corp.",
    category: "SaaS",
    description:
      "Enterprise-grade SaaS analytics platform with interactive data visualizations, custom report builder, and team collaboration.",
    image: "/portfolio/saas-analytics.png",
    tags: ["Next.js", "Python", "PostgreSQL", "D3.js"],
    link: "https://example.com/insighthub",
  },
  {
    id: 3,
    title: "La Maison Dorée",
    client: "Golden House Restaurant",
    category: "Landing Pages",
    description:
      "An elegant restaurant website with online reservation system, dynamic menu management, and integrated delivery ordering.",
    image: "/portfolio/restaurant-landing.png",
    tags: ["React", "Firebase", "Framer Motion", "Stripe"],
    link: "https://example.com/lamaison",
  },
  {
    id: 4,
    title: "FitPulse Dashboard",
    client: "VitalEdge Fitness",
    category: "Dashboards",
    description:
      "Comprehensive fitness tracking dashboard with workout plans, progress analytics, nutrition logging, and social challenges.",
    image: "/portfolio/fitness-app.png",
    tags: ["React", "Express", "Chart.js", "Socket.io"],
    link: "https://example.com/fitpulse",
  },
  {
    id: 5,
    title: "NestFinder",
    client: "Premier Properties Ltd.",
    category: "E-Commerce",
    description:
      "Modern real estate listing platform with advanced search, virtual tours, mortgage calculator, and agent matching.",
    image: "/portfolio/realestate-listing.png",
    tags: ["Next.js", "GraphQL", "Mapbox", "AWS"],
    link: "https://example.com/nestfinder",
  },
  {
    id: 6,
    title: "Wanderlust Travels",
    client: "SkyPath Adventures",
    category: "SaaS",
    description:
      "Full-stack travel booking platform with AI-powered itinerary planning, price tracking, and multi-currency support.",
    image: "/portfolio/travel-booking.png",
    tags: ["React", "Node.js", "Redis", "OpenAI API"],
    link: "https://example.com/wanderlust",
  },
];

const categories = ["All", "E-Commerce", "SaaS", "Landing Pages", "Dashboards"];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "4.9★", label: "Average Rating" },
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { trackCTA } = useAnalytics();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="portfolio-page">
      {/* Header */}
      <section className="portfolio-header">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-badge">Our Work</div>
            <h1>Portfolio</h1>
            <p>
              Explore our recent web development projects — crafted with
              precision and passion for clients across industries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="portfolio-filters">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Grid */}
      <section className="portfolio-projects">
        <div className="container">
          <ScrollReveal animation="stagger" className="portfolio-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-card-image">
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                  <div className="portfolio-card-overlay">
                    <span className="portfolio-category-badge">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="portfolio-card-body">
                  <span className="portfolio-client">{project.client}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="portfolio-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="portfolio-stats">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="stats-bar">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="portfolio-cta">
              <h2>Have a project in mind?</h2>
              <p>
                Let's build something amazing together. Get in touch and let us
                bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="btn btn-primary"
                onClick={() => {
                  trackCTA(
                    "Start Your Project",
                    "portfolio_page",
                    "primary_button",
                    "/contact"
                  );
                  window.scrollTo(0, 0);
                }}
              >
                Start Your Project
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
