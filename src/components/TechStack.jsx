import React from "react";

const TechStack = () => {
  const technologies = [
    { name: "Google Ads", icon: "🎯" },
    { name: "CallRail", icon: "📞" },
    { name: "OpenAI", icon: "🤖" },
    { name: "Zapier", icon: "⚡" },
    { name: "Airtable", icon: "📊" },
    { name: "Stripe", icon: "💳" },
  ];

  return (
    <section className="tech-stack">
      <div className="container">
        <h2 className="section-title">Built With</h2>
        <p className="section-subtitle">
          Powered by industry-leading automation tools
        </p>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">{tech.icon}</div>
              <div>{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
