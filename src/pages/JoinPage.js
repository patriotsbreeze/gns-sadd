import React from 'react';
import { FaDiscord, FaInstagram } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import '../styles/JoinPage.css';

function JoinPage() {
  return (
    <div className="join-page-container">
      <div className="join-card">
        <h1 className="join-title">Join GNS SADD Club</h1>
        <p className="join-description">
          Become part of a community dedicated to making a positive impact! Connect with us on your favorite platforms and stay up to date with club events, meetings, and opportunities.
        </p>
        <div className="join-links">
          <a className="join-link discord" href="https://discord.gg/2QMAUX9tkn" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="join-icon" /> Join our Discord
          </a>
          <a className="join-link instagram" href="https://www.instagram.com/gns_sadd_club/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="join-icon" /> Follow us on Instagram
          </a>
          <a className="join-link classroom" href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer">
            <SiGoogleclassroom className="join-icon" /> Join our Google Classroom
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoinPage; 