import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const tools = [
    { name: "Google Ads", icon: "🎯" },
    { name: "CallRail", icon: "📞" },
    { name: "OpenAI", icon: "🤖" },
    { name: "Zapier", icon: "⚡" },
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Request Access</h1>
          <p>
            Let's discuss how we can automate your customer acquisition and help
            you grow.
          </p>
        </div>
      </section>

      <section className="contact-form">
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="businessType">Business Type</label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your business type</option>
                  <option value="junk-removal">Junk Removal</option>
                  <option value="fence">Fence Installation</option>
                  <option value="tree">Tree Service</option>
                  <option value="pressure-washing">Pressure Washing</option>
                  <option value="outdoor-kitchen">Outdoor Kitchens</option>
                  <option value="drainage">Drainage / Hardscape</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                />
              </div>

              <button type="submit" className="button">
                Submit Request
              </button>
            </form>

            <div className="contact-alt">
              <p>Or email us directly:</p>
              <a href="mailto:hello@lizardlabs.co" className="email-link">
                hello@lizardlabs.co
              </a>
            </div>
          </div>

          <div className="tools-section">
            <h3>We Build With the Best</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <div className="tool-icon">{tool.icon}</div>
                  <div>{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
