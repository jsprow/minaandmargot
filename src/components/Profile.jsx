import React from 'react';
import './css/Profile.css';

const Profile = ({ image, name, roles, description }) => (
  <div className="profile">
    <div className="profile-image__container"><img className="profile-image" src={image} alt={name} /></div>
    <div className="profile-content">
    <strong className="profile-title">{name}</strong>
    <span className="profile-subtitle">{roles}</span>
    <span>{description}</span>
    </div>
  </div>
);

export default Profile
