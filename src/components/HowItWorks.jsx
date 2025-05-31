import React from "react";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon">🎯</div>
            <h3 className="step-title">Build Your Funnel</h3>
            <p>
              We spin up a branded local page with tracking, SEO, and smart
              forms
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">⚡</div>
            <h3 className="step-title">Automation Handles the Flow</h3>
            <p>
              Form submissions and calls are logged, routed, and delivered
              instantly
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">💰</div>
            <h3 className="step-title">You Close the Job</h3>
            <p>
              While we keep your funnel optimized with AI, ads, and SMS alerts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
