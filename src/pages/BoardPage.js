import React from 'react';
import '../styles/BoardPage.css';

function BoardPage() {
  const boardMembers = [
    {
      id: 1,
      name: 'Alvin Li',
      position: 'President',
      bio: "Alvin is a junior at Great Neck South who aims to guide students through adolescent stress, cope with academic pressure, and protect against bullying. He promotes his peers to speak out on school's learning environment, home's living environment and present any difficulty during teenage years. In his free time, he enjoys playing the guitar, soccer, and video editing.",
      image: 'https://i.postimg.cc/6qhJTTNV/alvinboardmember.jpg'
    },
    {
      id: 2,
      name: 'Yutong Ren',
      position: 'Vice President',
      bio: 'Yutong Ren is a junior who is a passionate coder, and always wants to help others.',
      image: 'https://i.postimg.cc/tJzJyXSw/atongimg.jpg'
    },
    {
      id: 3,
      name: 'Ivan Chen',
      position: 'Assistance Manager',
      bio: 'Ivan loves playing valorant, gaming, and spreading messages of the terrible events that have happened on 9/11.',
      image: 'https://i.postimg.cc/25vzrk3G/ivangamer.png'
    },
    {
      id: 4,
      name: 'Junmo Kim',
      position: 'Social Media Co-Manager',
      bio: 'ninja',
      image: 'https://i.postimg.cc/25vzrk3G/ivangamer.png'
    },
    {
      id: 5,
      name:'Jolynn',
      position: 'Social Media Co-Manager',
      bio: 'ninja',
      image: 'https://i.postimg.cc/25vzrk3G/ivangamer.png'
    },
    {
      id: 6,
      name: 'Kala Jagoda',
      position: 'Treasurer',
      bio: 'ninja',
      image: 'https://i.postimg.cc/25vzrk3G/ivangamer.png'
    },
    {
      id: 7,
      name: 'Brendan Lo',
      position: 'Webmaster',
      bio: 'ninja',
      image: 'https://i.postimg.cc/26DWbGSY/piceditedv1.jpg'
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

          {/* Alvin on his own row */}
          <div className="board-president-row">
            <div className="member-card president-card">
              <div className="member-image">
                <img src={boardMembers[0].image} alt={boardMembers[0].name} />
              </div>
              <div className="member-info">
                <h3 className="member-name">{boardMembers[0].name}</h3>
                <h4 className="member-position">{boardMembers[0].position}</h4>
                <p className="member-bio">{boardMembers[0].bio}</p>
              </div>
            </div>
          </div>

          {/* Other board members in a grid */}
          <div className="board-members">
            {boardMembers.slice(1).map(member => (
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

      </div>
    </>
  );
}

export default BoardPage;
