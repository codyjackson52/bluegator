import React from "react";
import { Link } from "react-router-dom";
import "../styles/industries.css";

const Industries = () => {
  const industries = [
    {
      name: "Junk Removal",
      painPoints: "Tired of price shoppers and no-shows?",
      solution:
        "Our system pre-qualifies leads and sends instant job details to your phone.",
      icon: "🚛",
    },
    {
      name: "Fence Builders",
      painPoints: "Spending too much time on estimates?",
      solution:
        "Smart forms capture property details and photos before you visit.",
      icon: "🏗️",
    },
    {
      name: "Tree Trimming",
      painPoints: "Need more commercial clients?",
      solution:
        "Targeted funnels bring property managers and HOAs directly to you.",
      icon: "🌳",
    },
    {
      name: "Pressure Washing",
      painPoints: "Want recurring contracts?",
      solution:
        "Automated follow-up keeps your schedule full with repeat business.",
      icon: "💦",
    },
    {
      name: "Outdoor Kitchens",
      painPoints: "Looking for higher-value projects?",
      solution: "AI-powered ads target homeowners planning luxury upgrades.",
      icon: "🏠",
    },
    {
      name: "Drainage / Hardscape",
      painPoints: "Need better lead qualification?",
      solution: "Smart forms filter tire-kickers and highlight serious buyers.",
      icon: "⛲",
    },
  ];

  return (
    <div className="industries-page">
      <section className="industries-hero">
        <div className="container">
          <h1>Industries We Help</h1>
          <p>
            Custom automation systems for contractors who want to grow smarter,
            not harder.
          </p>
        </div>
      </section>

      <section className="industries-grid">
        <div className="container">
          <div className="grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.name}</h3>
                <h4>{industry.painPoints}</h4>
                <p>{industry.solution}</p>
                <Link to="/contact" className="button">
                  See Your System
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
