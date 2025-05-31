import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">Lizard Labs</h3>
            <p className="footer-text">
              Automating customer acquisition for local service businesses.
            </p>
            <a href="mailto:hello@lizardlabs.co" className="footer-link">
              hello@lizardlabs.co
            </a>
          </div>
          <div>
            <h4 className="footer-heading">Connect</h4>
            <a
              href="https://twitter.com/lizardlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/lizardlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Built with automation tools like OpenAI, CallRail, and GPT. © 2025
            Lizard Labs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
