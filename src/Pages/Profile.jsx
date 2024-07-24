import React from 'react';
import ParticlesComponent from '../components/ParticlesComponent';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import profilePic from '../assets/hacker.png';

const Profile = () => {
    return (
        <ProfileContainer>
            <ParticlesComponent />
            <TopBar />

            <ProfilePicContainer>
                <ProfilePic src={profilePic} alt="Profile Picture" />
            </ProfilePicContainer>
        </ProfileContainer>
    )
}

const ProfileContainer = styled.div`
    min-height: 100vh;
    // background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    background-color: white;
    color: #ffffff;
    overflow-x: hidden;
`;

// Particles container with positioning
const ParticlesContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const ProfilePicContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    position: relative;
`;

const ProfilePic = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #ffffff;
`;


export default Profile