import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Coin Marketcap</a>
        <div className="navbar-links">
          <a href="#home" className="navbar-link">Chart</a>
          <a href="#about" className="navbar-link">Market</a>
          <a href="#contact" className="navbar-link">News</a>
          <a href="#contact" className="navbar-link">About</a>
          <a href="#contact" className="navbar-link">Analytics</a>
          <a href="#contact" className="navbar-link">Similar coins</a>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-right-links">
          <a href="#watchlist" className="navbar-right-link">Watchlist</a>
          <a href="#portfolio" className="navbar-right-link">Portfolio</a>
        </div>
        <div className="navbar-search">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
