import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>We believe great contractors deserve great systems.</h1>
          <div className="mission">
            <p>
              We're builders at heart — just like our clients. We built Lizard
              Labs to give contractors an unfair advantage through automation.
              No fluff. Just working systems that grow your business.
            </p>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="team-section">
            <h2>Built in Florida</h2>
            <p>
              Based in the Sunshine State, we understand the unique challenges
              of running a service business in high-growth markets. Our systems
              are built for contractors who want to scale without sacrificing
              quality or customer experience.
            </p>
            <div className="team-placeholder">
              {/* Placeholder for team photo */}
              <div className="team-photo-box">Team Photo Coming Soon</div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to automate your growth?</h2>
            <p>
              Let's build a system that brings you better customers while you
              focus on what you do best.
            </p>
            <Link to="/contact" className="button">
              Let's build your system
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
