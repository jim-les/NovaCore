import React from 'react';
import styled from 'styled-components';

// components
import TopBar from '../components/TopBar';
import ParticlesComponent from '../components/ParticlesComponent';
import ImageGallery from '../components/ImageGallery ';
import ChallangeCard from '../components/ChallangeCard';

// image
import hacker from '../assets/hacker.png';

const Homepage = () => {
    return (
        <PageContainer>
            <ParticlesContainer>
                <ParticlesComponent /> 
            </ParticlesContainer>
            <TopBar />

            {/* intro */}
            <ContentContainer className="h-screen flex flex-col justify-center items-center">
                <TextContainer className="text-center">
                    <Title className="text-5xl">Welcome to NovaCore</Title>
                    <Subtitle className="text-xl">A place to learn and grow</Subtitle>
                </TextContainer>
                <Image src={hacker} alt="hacker" />
            </ContentContainer>

            
            {/* zindex 1 */}
            <h4 className="text-5xl relative text-center mb-20">Frameworks <br /> & <br /> Languages</h4>
            <div className="flex justify-center py-20">
                <ImageGallery />
            </div>

            {/* challanges */}
            <div className="mt-20 relative px-5">
                <h4 className="text-5xl relative text-center mb-9 pb-6">Challanges</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
                    <ChallangeCard />
                </div>
            </div>


            {/* developer */}
            <div className="mt-20 relative px-5">
                <h4 className="text-5xl relative text-center mb-9 pb-6">Developers</h4>
                <div className="flex justify-center">
                    <img src={"https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/avatars/jimleston_osoi.jpg"} alt="developer" className="rounded-full" 
                        style={{width: "250px", height: "250px", border: "5px solid #ffffff"}}
                    />
                </div>

                <div className="mt-5">
                    <p className="text-center text-xl">jimleston osoi</p>
                    <p className="text-center text-lg">Software Developer</p>
                </div>

                {/* socials flex */}
                <div className="flex justify-center mt-5">
                    {/* whatsapp, github, linkedin, email */}
                    <div className="flex justify-center items-center">
                        <i className="fab fa-whatsapp fa-2x mr-10"></i>
                        <i className="fab fa-github fa-2x mr-10"></i>
                        <i className="fab fa-linkedin fa-2x mr-10"></i>
                        <i className="fas fa-envelope fa-2x"></i>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="border-b-2 border-gray-500 w-100 relative mt-20 mx-auto"></div>
            <div className="text-center py-10 relative">
                {/* devider */}
                <p className='text-xl'>NovaCore &copy; 2021</p>
            </div>
        </PageContainer>
    );
};

// dark background with gradient
const PageContainer = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
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

const ContentContainer = styled.div`
    position: relative;
    z-index: 1;
`;

const TextContainer = styled.div`
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 10px;
    color: var(--primary-color);
`;

const Subtitle = styled.p`
    font-size: 1.5rem;
    color: #d3d3d3;
`;

const Image = styled.img`
    width: 300px;
    height: 300px;
    margin-top: 20px;
`;

export default Homepage;
