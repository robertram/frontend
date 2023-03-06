import React from 'react';

const Profile = ({ data }) => {
  const { Profile } = data;
  return (
    <div className="Profile">
      <h2 className="Profile-title">Profile</h2>
      <p className="Profile-desc">{Profile}</p>
    </div>
  );
};

export default Profile;
