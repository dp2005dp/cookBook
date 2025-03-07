import React from "react";
import "../styles/Footer.css"; // Ensure you have Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            CookBook is your go-to platform for exploring a wide range of
            delicious recipes. Whether you're a novice or an experienced cook,
            our easy-to-follow recipes will inspire your culinary adventures.
          </p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section more-info">
          <h3>More Info</h3>
          <p>
            At CookBook, we believe that cooking should be fun, easy, and
            accessible for everyone. Join our community to get regular updates
            and recipes straight to your inbox.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 CookBook. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
