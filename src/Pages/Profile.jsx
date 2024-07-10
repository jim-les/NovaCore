import React from 'react';
import ParticlesComponent from '../components/ParticlesComponent';
import styled from 'styled-components';

const Profile = () => {
    return (
        <div>
            <h1>Hello</h1>
        </div>
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


export default Profile