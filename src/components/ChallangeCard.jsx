import React from 'react';
import styled, { keyframes } from 'styled-components';
import hackerthon from '../assets/hackerthon.png';

const ChallangeCard = () => {
    return (
        <Card>
            <Image src={hackerthon} alt="hackerthon" />

            <CardBody>
                <CardTitle>
                    Web Development Challange
                </CardTitle>
                <CardDescription>
                    Join this challenge to learn and grow your skills. This challenge is for beginners and intermediate developers.
                </CardDescription>
                <div className="flex justify-between">
                    <CardButtonSave>Save to Bucket</CardButtonSave>
                    <CardButtonJoin>Join Challenge</CardButtonJoin>
                </div>
            </CardBody>

            <CardFooter>
                <p>Created by: <span>Jimleston</span></p>
                <p>Created on: <span>7th July 2024</span></p>
            </CardFooter>
        </Card>
    )
}

const changeBorderColor = keyframes`
    0% {
        border-color: aqua;
    }
    50% {
        border-color: darkblue;
    }
    100% {
        border-color: aqua;
    }
`;

const Card = styled.div`
    background-color: rgba(10, 10, 40, 1);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    min-height: 400px;
    border: 2px solid aqua;
    box-shadow: 0 0 10px aqua;

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        animation: ${changeBorderColor} 3s infinite;
    }
`;

const CardBody = styled.div`
    padding: 1rem;
`;

const CardFooter = styled.div`
    padding: 1rem;
    background-color: rgba(10, 10, 40, 1);
    border-top: 1px solid #eee;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #fff;
`;


const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
    font-size: 1.5rem;
    color: aqua;
    margin-bottom: 1rem;
`;

const CardDescription = styled.p`
    font-size: 1rem;
    color: rgba(255, 255, 255, .9);
    margin-bottom: 1rem;
`;

const CardButtonSave = styled.button`
    background-color: var(--primary-color);
    color: rgba(0, 0, 0, .6);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
`;

const CardButtonJoin = styled.button`
    background-color: #3498db;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
`;

export default ChallangeCard;
