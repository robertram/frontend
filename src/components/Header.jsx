import React from 'react';

const Header = ({children}) => {
  return (
    <div className="Header">
      <h1 className="Header-title">Hello!</h1>
      {children}
    </div>
  );
};

export default Header;
