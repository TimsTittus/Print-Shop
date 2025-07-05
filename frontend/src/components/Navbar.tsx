import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo">PrintHub <img src="/logo-icon.png" alt="logo" className="logo-icon" /></span>
      </div>
      <nav className="navbar-links">
    <Link to="/">Home</Link>
    <Link to="/services">Services</Link>
    <Link to="/pricing">Pricing</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/history">History</Link>

    </nav>

      
      <div className="navbar-right">
        <img src="/help.png" alt="help-icon" className="help-image" />
        <img src="/profile.png" alt="user" className="user-avatar" />
      </div>
    </header>
  );
};

export default Navbar;
