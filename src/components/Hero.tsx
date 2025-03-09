import React from 'react';
import About from './About';
import IntroAnimation from './Animations/IntroAnimation';
import Jobs from './Jobs';
import { Resume } from './Resume';

const Hero = () => {
    return (
        <div>
            <About />
            <Resume />
            <Jobs />
        </div>
    );
};

export default Hero;
