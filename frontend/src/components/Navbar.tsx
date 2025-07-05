import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo">PrintHub <img src="/logo-icon.png" alt="logo" className="logo-icon" /></span>
      </div>
      <nav className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </nav>
      <div className="navbar-right">
        <img src="/profile.png" alt="user" className="user-avatar" />
      </div>
    </header>
  );
};

export default Navbar;
