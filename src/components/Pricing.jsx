import React from "react";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-subtitle">
          Choose the plan that fits your territory and tech stack.
        </p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3 className="pricing-title">Lite</h3>
            <div className="pricing-price">$297/mo</div>
            <p>For solo contractors who want automation without the overhead</p>
            <ul className="feature-list">
              <li>1 branded page</li>
              <li>Call tracking + SMS</li>
              <li>Smart form system</li>
              <li>Monthly funnel performance report</li>
            </ul>
            <button className="button">Request Access</button>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-title">Pro</h3>
            <div className="pricing-price">$497/mo</div>
            <p>For established contractors managing more volume</p>
            <ul className="feature-list">
              <li>All Lite features</li>
              <li>Up to 3 zip codes</li>
              <li>Dynamic routing</li>
              <li>Google Ads management</li>
              <li>Client dashboard login</li>
            </ul>
            <button className="button">Request Access</button>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-title">Agency</h3>
            <div className="pricing-price">Custom</div>
            <p>For agencies or multi-location businesses</p>
            <ul className="feature-list">
              <li>Unlimited pages and zip codes</li>
              <li>AI tools + analytics integrations</li>
              <li>Priority support + Slack channel</li>
              <li>White-label option</li>
            </ul>
            <button className="button">Request Access</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
