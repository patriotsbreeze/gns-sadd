import React from 'react';
import '../styles/AboutPage.css';
import saddLogo from '../assets/sadd_logo.png';

function AboutPage() {
  return (
    <>
      <div className="about-header">
        <div className="container">
          <h1 className="about-title">About SADD Club</h1>
          <p className="about-subtitle">Students Against Destructive Decisions</p>
        </div>
      </div>

      <div className="container">
        <section className="section about-section">
          <div className="about-content">
            <div className="about-image">
              <img src={saddLogo} alt="GNS SADD Logo" />
            </div>
            <div className="about-text">
              <h2>What is SADD?</h2>
              <p>
                SADD (Students Against Destructive Decisions) is a peer-to-peer education, prevention, and activism organization dedicated to preventing destructive decisions, particularly underage drinking, drug use, impaired driving, and other destructive decisions.
              </p>
              <p>
                Founded as Students Against Driving Drunk in 1981, SADD has grown to become the nation's premier youth health and safety organization with thousands of chapters in middle schools, high schools, and colleges across the country.
              </p>
              <p>
                The Great Neck South High School SADD Club is proud to be part of this national movement, working to empower our fellow students to make positive decisions in their lives.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">What We Do</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">🎓</div>
              <h3>Education</h3>
              <p>
                We organize workshops, presentations, and assemblies to educate our peers about the dangers of destructive decisions and provide them with the knowledge to make informed choices.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🤝</div>
              <h3>Peer Support</h3>
              <p>
                We create a supportive environment where students can discuss challenges they face and develop strategies to overcome peer pressure and make positive decisions.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">📣</div>
              <h3>Advocacy</h3>
              <p>
                We advocate for policies and programs that promote student health and safety, both within our school and in the broader community.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🌟</div>
              <h3>Leadership Development</h3>
              <p>
                We provide opportunities for members to develop leadership skills through organizing events, leading discussions, and representing the club at school and community functions.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🎭</div>
              <h3>Awareness Campaigns</h3>
              <p>
                We run awareness campaigns throughout the school year, focusing on issues such as drunk driving, substance abuse, mental health, and making positive life choices.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🤗</div>
              <h3>Community Service</h3>
              <p>
                We engage in community service projects that promote safety and well-being, partnering with local organizations to make a positive impact in our community.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Our Impact</h2>
          <div className="impact-content">
            <p>
              Since its establishment at Great Neck South High School, our SADD Club has made a significant impact on our school community:
            </p>
            <ul className="impact-list">
              <li>Organized annual awareness weeks focusing on different aspects of student safety and well-being</li>
              <li>Conducted peer-to-peer workshops reaching over 500 students each year</li>
              <li>Partnered with local law enforcement and health organizations for educational programs</li>
              <li>Reduced reported incidents of destructive behaviors among our student body</li>
              <li>Created a supportive network for students facing difficult decisions</li>
            </ul>
            <p>
              We continue to grow our impact each year, with more students joining our mission to promote positive decision-making and create a safer school environment.
            </p>
          </div>
        </section>

        <section className="section cta-section">
          <h2>Join Our Mission</h2>
          <p>
            We welcome all Great Neck South High School students who are passionate about making a difference. Join us in our mission to promote positive decision-making and create a safer community for everyone.
          </p>
          <a href="#" className="btn">Become a Member</a>
        </section>
      </div>
    </>
  );
}

export default AboutPage;
