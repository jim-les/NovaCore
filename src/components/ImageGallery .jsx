import React from 'react';
import './styles.css'; // Import your CSS file
import hacker from '../assets/hacker.png';
import python from '../assets/python.png';
import react from '../assets/React.webp';
import node from '../assets/node.png';
import django from '../assets/django.webp';
import tailwind from '../assets/tailwind.png';
import icp from '../assets/icp.png';

const ImageGallery = () => {
    return (
        <div className="box">
            <span style={{ '--i': 1 }}><img src={hacker} alt="hacker" /></span>
            <span style={{ '--i': 2 }}><img src={python} alt="python" /></span>
            <span style={{ '--i': 3 }}><img src={react} alt="react" /></span>
            <span style={{ '--i': 4 }}><img src={node} alt="node" /></span>
            <span style={{ '--i': 5 }}><img src={django} alt="django" /></span>
            <span style={{ '--i': 6 }}><img src={tailwind} alt="tailwind" /></span>
            <span style={{ '--i': 7 }}><img src={icp} alt="icp" /></span>
            <span style={{ '--i': 8 }}><img src={hacker} alt="hacker" /></span>
            <span style={{ '--i': 9 }}><img src={hacker} alt="hacker" /></span>
            <span style={{ '--i': 10 }}><img src={hacker} alt="hacker" /></span>
        </div>
    );
}

export default ImageGallery;
