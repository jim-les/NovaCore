import React from 'react';
import styled from 'styled-components';
import './Languages.css';

const Languages = () => {
    const lang = [
        { name: "Django" },
        { name: "ReactJs" },
        { name: "NodeJs" },
        { name: "Python" },
        { name: "Django" },
        { name: "ReactJs" },
        { name: "NodeJs" },
        { name: "Python" },
    ];

    const totalCards = lang.length;
    const radius = 400; // Adjust the radius based on your design

    return (
        <PageContainer>
            {lang.map((item, index) => (
                <Language key={index} total={totalCards} index={index} radius={radius}>
                    <h1>{item.name}</h1>
                </Language>
            ))}
        </PageContainer>
    );
};

const PageContainer = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    perspective: 1000px;
    animation: animate 20s linear infinite;

    &:hover {
        animation-play-state: paused;
    }
`;

const Language = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 8px;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: ${props => `
        rotateY(${props.index * (360 / props.total)}deg)
        translateZ(${props.radius}px)
    `};
`;
export default Languages;