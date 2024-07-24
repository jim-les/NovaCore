import React from 'react';
import './styles.css'; // Import your CSS file
import hacker from '../assets/hacker.png';
import python from '../assets/python.png';
import reactImg from '../assets/React.webp'; // Avoid naming conflict with React
import node from '../assets/node.png';
import django from '../assets/django.webp';
import tailwind from '../assets/tailwind.png';
import icp from '../assets/icp.png';

const images = [
    { src: hacker, alt: 'hacker' },
    { src: python, alt: 'python' },
    { src: reactImg, alt: 'react' },
    { src: node, alt: 'node' },
    { src: django, alt: 'django' },
    { src: tailwind, alt: 'tailwind' },
    { src: icp, alt: 'icp' },
    { src: node, alt: 'node' },
    { src: django, alt: 'django' },
    { src: tailwind, alt: 'tailwind' },
    { src: icp, alt: 'icp' },
];

const ImageGallery = () => {
  return (
    <div className="box">
        {images.map((image, index) => (
            <span key={index} style={{ '--i': index + 1 }}>
                <img src={image.src} alt={image.alt} />
            </span>
        ))}
    </div>
  );
}

export default ImageGallery;
