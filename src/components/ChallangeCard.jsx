import React from 'react';
import styled, { keyframes } from 'styled-components';
import hackerthon from '../assets/hackerthon.png';

const ChallangeCard = ({ event }) => {
    // Default values for missing data
    const title = event?.title || 'Untitled Event';
    const shortDescription = event?.short_description || 'No description available';
    const creatorName = event?.users?.full_name || 'Unknown Creator';
    const creationDate = event?.start_time || 'Date not available';

    return (
        <Card>
            <Image src={event.image} alt="hackerthon" />
            <CardBody>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardDescription>
                    {shortDescription}
                </CardDescription>
                <div className="flex justify-between">
                    <CardButtonSave>
                        0 Paticipants
                    </CardButtonSave>
                    <CardButtonJoin>Join Challenge</CardButtonJoin>
                </div>
            </CardBody>

            <CardFooter>
                <p>Created by: <span>Internet Computer</span></p>
                <p>Created on: <span>{creationDate}</span></p>
            </CardFooter>
        </Card>
    );
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
    max-width: 380px;
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
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1rem;
`;

const CardButtonSave = styled.button`
    background-color: var(--primary-color);
    color: rgba(0, 0, 0, 0.6);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
        background-color: var(--primary-color-dark);
    }
`;

const CardButtonJoin = styled.button`
    background-color: #3498db;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
        background-color: #2980b9;
    }
`;

export default ChallangeCard;
