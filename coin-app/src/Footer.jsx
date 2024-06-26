// src/FooterComponent.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">CoinMarketCap</h1>
          <p>
            CoinMarketCap provides cryptocurrency market cap rankings, charts, and more. We track capitalization of various cryptocurrencies and provide up-to-date data.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Useful Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com" className="social-icon"><i className="fab fa-facebook-f"></i>Facebook</a>
            <a href="https://www.twitter.com" className="social-icon"><i className="fab fa-twitter"></i>twitter</a>
            <a href="https://www.instagram.com" className="social-icon"><i className="fab fa-instagram"></i>Instagram</a>
            <a href="https://www.linkedin.com" className="social-icon"><i className="fab fa-linkedin-in"></i>Linkedin</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CoinMarketCap. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
