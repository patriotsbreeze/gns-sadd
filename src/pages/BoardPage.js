import React from 'react';
import '../styles/BoardPage.css';

function BoardPage() {
  const boardMembers = [
    {
      id: 1,
      name: 'Alvin Li',
      position: 'President',
      bio: 'Alvin Li is a junior.... ',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 2,
      name: 'Yutong Ren',
      position: 'ninja',
      bio: 'Yutong Ren is a junior.... ',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 3,
      name: 'Ninja',
      position: 'Secretary',
      bio: ' Ninja',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 4,
      name: 'ninja',
      position: 'ninja',
      bio: 'ninja',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 5,
      name: 'ninja',
      position: 'ninja',
      bio: 'ninja',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 6,
      name: 'nijan',
      position: 'ninja',
      bio: 'ninja',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    }
  ];

  return (
    <>
      <div className="board-header">
        <div className="container">
          <h1 className="board-title">Meet Our Board</h1>
          <p className="board-subtitle">The dedicated team leading GNS SADD Club</p>
        </div>
      </div>

      <div className="container">
        <section className="section">
          <div className="board-intro">
            <p>
              Our board members are dedicated students who are passionate about promoting positive decision-making and creating a safer school environment. They work tirelessly to organize events, workshops, and awareness campaigns throughout the school year.
            </p>
          </div>

          <div className="board-members">
            {boardMembers.map(member => (
              <div className="member-card" key={member.id}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <h4 className="member-position">{member.position}</h4>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section join-board-section">
          <h2 className="section-title">Interested in Joining the Board?</h2>
          <div className="join-board-content">
            <p>
              Board elections are held at the end of each school year. If you're interested in taking on a leadership role in the SADD Club, attend our meetings regularly and express your interest to the current board members.
            </p>
            <p>
              Leadership positions are a great way to make a difference in our school community while developing valuable skills that will benefit you in college and beyond.
            </p>
            <a href="#" className="btn">Learn About Elections</a>
          </div>
        </section>
      </div>
    </>
  );
}

export default BoardPage;
