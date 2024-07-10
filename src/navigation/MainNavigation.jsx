import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages imports
import IntroPage from '../Pages/IntroPage';
import Homepage from '../Pages/Homepage';
import Profile from '../Pages/Profile';


const MainNavigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/home" element={<Homepage />} />
            </Routes>
        </Router>
    )
}

export default MainNavigation