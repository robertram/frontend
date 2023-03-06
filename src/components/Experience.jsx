import React from 'react';

const Experience = ({ data }) => {
  return (
    <div className="Experience">
      <h2 className="Experience-title">Experience</h2>

      {data.experience &&
        data.experience.map((item, index) => {
          const {
            company,
            endDate,
            jobDescription,
            jobTitle,
            startDate,
          } = item;

          return (
            <div key={index} className="Experience-item">
              <h4 className="Experience-item-title">{jobTitle}</h4>
              <p className="Experience-item-description">{jobDescription}</p>
              <p>{company}</p>
              <span>
                {startDate}-{endDate}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default Experience;
