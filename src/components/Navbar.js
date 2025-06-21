import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaDiscord } from 'react-icons/fa';
import '../styles/Navbar.css';
import saddLogo from '../assets/sadd_logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={saddLogo} alt="GNS SADD Logo" className="logo-img" />
          <span className="logo-text">GNS SADD</span>
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/board" className="nav-link">Board</Link>
          <Link to="/join" className="nav-link">Join</Link>
        </div>
        
        <div className="social-icons">
          <a href="https://www.instagram.com/gns_sadd_club/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://discord.gg/2QMAUX9tkn" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaDiscord />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
