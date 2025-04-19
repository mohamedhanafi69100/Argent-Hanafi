import React from "react";

const Hero = ({ children }) => {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        {children}
      </section>
    </div>
  );
};

export default Hero;
