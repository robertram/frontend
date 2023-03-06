import React from 'react';

const About = ({data }) => {
  const { avatar, name, profession, phone, email, website, address } = data;
  return (
    <div className="About">
      <img className="About-picture" src={avatar} alt={name} />
      <div className="About-container">
        <h1 className="About-title">{name}</h1>
        <p className="About-job-title">{profession}</p>

        <div className="About-info">
          <p className="About-phone About-item">{phone}</p>
          <a className="About-email About-item" href={`mailto:${email}`}>
            {email}
          </a>
          <a
            className="About-website About-item"
            href={website}
            target="_blank"
          >
            {website}
          </a>
        </div>

        <p className="About-address">{address}</p>
      </div>
    </div>
  );
};

export default About;
