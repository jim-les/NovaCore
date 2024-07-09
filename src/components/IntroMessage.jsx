import React from 'react';
import styled, { keyframes } from 'styled-components';
import Typewriter from 'typewriter-effect';

const IntroMessage = () => {
    return (
        <Container>
            <Typewriter
                options={{
                    strings: ['Welcome to NovaCore', 'A place for developers', 'Enjoy your stay!'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </Container>
    );
}

const typingAnimation = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: #fff;
    font-family: 'Courier New', Courier, monospace;
    // background-color: rgba(0, 0, 0, 0.8);

    .Typewriter__wrapper {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        animation: ${typingAnimation} 2s steps(40, end) forwards;
    }

    .Typewriter__cursor {
        display: inline-block;
        animation: blink 0.7s steps(40, start) infinite;
    }

    @keyframes blink {
        from, to {
            border-color: transparent;
        }
        50% {
            border-color: #fff;
        }
    }
`;

export default IntroMessage;
