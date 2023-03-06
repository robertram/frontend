import React from 'react';

const Interest = ({ data }) => {
  return (
    <div className="Interest">
      <h2 className="Interest-title">Interests</h2>

      {data.interest &&
        data.interest.map((item, index) => (
          <div key={index} className="Interest-item">
            <p className="Interest-item-title">{item}</p>
          </div>
        ))}
    </div>
  );
};

export default Interest;
