import React from 'react';

const FirstNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Cryptocurrencies</a>
        <div className="navbar-links">
          <a href="#chart" className="navbar-link">Exchanges</a>
          <a href="#market" className="navbar-link">Community</a>
          <a href="#news" className="navbar-link">Products</a>
          <a href="#about" className="navbar-link">Learn</a>
        </div>
      </div>
    </nav>
  );
};

export default FirstNavbar;
