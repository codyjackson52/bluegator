import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const steps = [
    {
      title: "Build Your Funnel",
      description:
        "We spin up a branded local page with tracking, SEO, and smart forms",
      icon: "🎯",
    },
    {
      title: "Automation Handles the Flow",
      description:
        "Form submissions and calls are logged, routed, and delivered instantly",
      icon: "⚡",
    },
    {
      title: "You Close the Job",
      description:
        "While we keep your funnel optimized with AI, ads, and SMS alerts",
      icon: "💰",
    },
  ];

  const pricingPlans = [
    {
      name: "Lite",
      price: "$297/mo",
      description:
        "For solo contractors who want automation without the overhead",
      features: [
        "1 branded page",
        "Call tracking + SMS",
        "Smart form system",
        "Monthly funnel performance report",
      ],
    },
    {
      name: "Pro",
      price: "$497/mo",
      description: "For established contractors managing more volume",
      features: [
        "All Lite features",
        "Up to 3 zip codes",
        "Dynamic routing",
        "Google Ads management",
        "Client dashboard login",
      ],
    },
    {
      name: "Agency",
      price: "Custom",
      description: "For agencies or multi-location businesses",
      features: [
        "Unlimited pages and zip codes",
        "AI tools + analytics integrations",
        "Priority support + Slack channel",
        "White-label option",
      ],
    },
  ];

  const tools = [
    { name: "Google Ads", icon: "🎯" },
    { name: "CallRail", icon: "📞" },
    { name: "OpenAI", icon: "🤖" },
    { name: "Zapier", icon: "⚡" },
    { name: "Airtable", icon: "📊" },
    { name: "Stripe", icon: "💳" },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Smarter Systems for Service Pros</h1>
          <p>
            Lizard Labs helps contractors grow with AI-powered funnels, call
            tracking, and automation. No chasing. No guesswork.
          </p>
          <Link to="/contact" className="button">
            Request a Demo
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <h2>Pricing</h2>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="pricing-card">
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="button">
                  Request Access
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools">
        <div className="container">
          <h2>Built With</h2>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-card">
                <div className="tool-icon">{tool.icon}</div>
                <div>{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
