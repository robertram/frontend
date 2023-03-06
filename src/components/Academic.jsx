import React from 'react';

const Academic = ({ data }) => {
  return (
    <div className="Academic">
      <h2 className="Academic-title">Academic</h2>

      {data.Academic &&
        data.Academic.map((item, index) => {
          const { degree, description, endDate, institution, startDate } = item;
          return (
            <div key={index} className="Academic-item">
              <h4 className="Academic-item-title">{degree}</h4>
              <p className="Academic-item-description">{description}</p>
              <p className="Academic-item-institution">{institution}</p>
              <span>
                {startDate}-{endDate}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default Academic;
