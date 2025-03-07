import React from "react";
import "../styles/Hero.css";  // ✅ Import CSS for styling

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-banner" src="https://www.morrisons.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-to-order-hero.7e959d57.jpg&w=3840&q=75" alt="" />
      <div className="hero-text">
        <h1>Welcome to the Cookbook!</h1>
        <p>Discover delicious recipes from around the world.</p>
      </div>
    </div>
  );
};

export default Hero;
