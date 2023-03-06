import React from 'react';

const Languages = ({ data }) => {
  return (
    <div className="Languages">
      <h2 className="Languages-title">Languages</h2>

      {data.languages &&
        data.languages.map((item, index) => (
          <div key={index} className="Languages-item">
            <h4 className="Languages-item-title">{item.name}</h4>
            <p className="Languages-item-description">{item.percentage}</p>
          </div>
        ))}
    </div>
  );
};

export default Languages;
