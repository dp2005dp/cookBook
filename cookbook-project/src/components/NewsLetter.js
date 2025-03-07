import React, { useState } from 'react';
import '../styles/NewsLetter.css';  // ✅ Ensure this path is correct

const NewsLetter = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className='newsletter-container'>
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get the latest recipes and cooking tips delivered to your inbox!</p>
      <input type="email" placeholder="Enter your email" />
      <button onClick={handleSubscribe}>Subscribe</button>

      {subscribed && (
        <div className="popup">
          🎉 Thanks for subscribing! Stay tuned for amazing recipes and updates. 🍽️🔥
        </div>
      )}
    </div>
  );
};

export default NewsLetter;
