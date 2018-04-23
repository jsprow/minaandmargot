import React from 'react';

import styled from 'styled-components';

const ProfileBody = styled.article`
  max-width: 32rem;
  display: flex;
  background-color: #eee;
  border: 4px solid #444;
  border-radius: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 2px 2px 8px #444;
`;
const ProfileImageContainer = styled.div`
  flex: 0 0 5rem;
  width: 5rem;
`;
const ProfileImage = styled.img`
  width: 5rem;
  border-radius: 5rem;
  border: 4px solid #444;
`;
const ProfileContent = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
const ProfileTitle = styled.strong`
  font-size: 1.5rem;
`;
const ProfileSubtitle = styled.span`
  color: #444;
`;
const ProfileDescription = styled.span``;

const Profile = ({ image, name, roles, description }) => (
  <ProfileBody className="profile">
    <ProfileImageContainer className="profile-image__container">
      <ProfileImage className="profile-image" src={image} alt={name} />
    </ProfileImageContainer>
    <ProfileContent className="profile-content">
      <ProfileTitle className="profile-title">{name}</ProfileTitle>
      <ProfileSubtitle className="profile-subtitle">{roles}</ProfileSubtitle>
      <ProfileDescription>{description}</ProfileDescription>
    </ProfileContent>
  </ProfileBody>
);

export default Profile;
