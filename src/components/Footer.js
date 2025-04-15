import React from 'react';
import { FaInstagram, FaDiscord } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Great Neck South High School SADD Club</h3>
          <p>Students Against Destructive Decisions</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-link-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/board">Board</a></li>
            </ul>
          </div>
          
          <div className="footer-link-section">
            <h4>Connect With Us</h4>
            <div className="footer-social-icons">
              <a href="https://www.instagram.com/gns_sadd_club/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <FaInstagram /> <span>Instagram</span>
              </a>
              <a href="https://discord.gg/2QMAUX9tkn" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <FaDiscord /> <span>Discord</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GNS SADD Club. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
