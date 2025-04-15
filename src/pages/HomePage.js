import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import saddLogo from '../assets/sadd_logo.png';

function HomePage() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <img src={saddLogo} alt="GNS SADD Logo" className="hero-logo" />
          <h1>Great Neck South High School SADD Club</h1>
          <p>Students Against Destructive Decisions</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn">Learn More</Link>
            <a href="#events" className="btn btn-secondary">Upcoming Events</a>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="section" id="mission">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-content">
            <p>
              The mission of the Great Neck South High School SADD Club is to empower young people to successfully confront the risks and pressures that challenge them throughout their daily lives. We promote peer-to-peer education and prevention strategies to help students make positive decisions.
            </p>
            <p>
              Our goal is to provide students with the best prevention tools possible to deal with issues of underage drinking, drug use, impaired driving, and other destructive decisions.
            </p>
          </div>
        </section>
      </div>

      <section className="section" id="events">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="grid">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Awareness Workshop</h3>
                <p className="card-date">May 10, 2025</p>
                <p className="card-text">
                  Join us for an interactive workshop focused on raising awareness about the dangers of distracted driving.
                </p>
                <a href="#" className="btn">Learn More</a>
              </div>
            </div>
            
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Community Outreach</h3>
                <p className="card-date">May 24, 2025</p>
                <p className="card-text">
                  Help us spread the word about making positive decisions in our community outreach program.
                </p>
                <a href="#" className="btn">Learn More</a>
              </div>
            </div>
            
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">End of Year Celebration</h3>
                <p className="card-date">June 15, 2025</p>
                <p className="card-text">
                  Celebrate our achievements this year and learn about our plans for the next school year.
                </p>
                <a href="#" className="btn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="join">
        <div className="container">
          <h2 className="section-title">Join Us</h2>
          <div className="join-content">
            <p>
              We welcome all Great Neck South High School students who are passionate about making a difference. By joining SADD, you'll have the opportunity to develop leadership skills, participate in community service, and help create a safer environment for everyone.
            </p>
            <p>
              Meetings are held every Wednesday after school in Room 234. Come be a part of a nationwide movement that is saving lives!
            </p>
            <a href="#" className="btn btn-secondary">Sign Up Now</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
