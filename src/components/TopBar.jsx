import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'; // You can use any icon library

const TopBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <Logo>NovaCore</Logo>
            <MenuIcon onClick={toggleMenu}>
                <FaBars />
            </MenuIcon>
            {isOpen && (
                <DropdownMenu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Challanges</MenuItem>
                    <MenuItem>My Profile</MenuItem>
                </DropdownMenu>
            )}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: #fff;
    position: relative;
`;

const Logo = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary-color);
`;

const Title = styled.div`
    font-size: 1.2rem;
`;

const MenuIcon = styled.div`
    font-size: 1.5rem;
    cursor: pointer;
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 50px;
    right: 20px;
    background-color: #444;
    border-radius: 5px;
    padding: 10px;
`;

const MenuItem = styled.div`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #555;
    }
`;

export default TopBar;