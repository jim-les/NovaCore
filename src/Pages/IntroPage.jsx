import React from 'react';
import MatrixRainingCode from '../components/MatrixRainingCode';
import IntroMessage from '../components/IntroMessage';
import { Link } from 'react-router-dom';

const IntroPage = () => {
    const sing = '<>';

    return (
        <div className="relative h-screen">
            <MatrixRainingCode />
            {/* <IntroMessage /> */}

            <div className="absolute bottom-1/4 left-9 text-center text-white">
                <div className="flex justify-center items-center space-x-5">
                    <h3 className="text-3xl">Learn</h3>
                    <h1 className="text-6xl">{sing}</h1>
                </div>
                <h1 className="text-6xl">Coding</h1>
            </div>
            
            <Link to="/home" className="fixed left-10 bottom-5 bg-green-600 hover:bg-green-400 text-black font-bold py-2 px-4 rounded shadow-lg text-center py-3" style={{ textDecoration: 'none', width: '80%' }}>
                Enter NovaCore
            </Link>
        </div>
    );
}

export default IntroPage;
