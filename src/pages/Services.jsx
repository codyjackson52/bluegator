import React from "react";
import "../styles/services.css";

const Services = () => {
  const services = [
    {
      title: "Smart Funnels",
      description:
        "Custom-built landing pages optimized for your service area and customer type.",
      icon: "🎯",
    },
    {
      title: "Call Routing",
      description:
        "Intelligent call distribution with instant SMS notifications and tracking.",
      icon: "📞",
    },
    {
      title: "Form to SMS",
      description:
        "Lead form submissions instantly delivered to your phone with full details.",
      icon: "📱",
    },
    {
      title: "Ad Campaigns",
      description:
        "Targeted Google Ads campaigns managed with AI for optimal performance.",
      icon: "📈",
    },
    {
      title: "Reporting Dashboards",
      description:
        "Real-time analytics and insights on your customer acquisition.",
      icon: "📊",
    },
    {
      title: "Zapier Integrations",
      description: "Connect your funnel to any tool in your existing workflow.",
      icon: "⚡",
    },
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>What We Automate</h1>
          <p>
            End-to-end systems that handle customer acquisition while you focus
            on your work.
          </p>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <div className="grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
