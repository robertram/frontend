import React from 'react';

const Skills = ({ data }) => {
  return (
    <div className="Skills">
      <h2 className="Skills-title">Skills</h2>
      {data.skills &&
        data.skills.map((item, index) => (
          <div key={index} className="Skills-item">
            <p className="Skills-item-title">{item.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Skills;
