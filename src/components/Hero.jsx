import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Smarter Systems for Service Pros</h1>
        <p>
          Lizard Labs helps contractors grow their business using automated
          funnels, call tracking, and real-time alerts. No cold calls. No
          guesswork. Just qualified customers on autopilot.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("demo-form")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="button"
        >
          Request a Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;
