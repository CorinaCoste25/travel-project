import React from 'react';
//import SeaVideo from '../../assets/videos/sea-video.mp4';

import './Hero.css';

const Hero = () => {

    return (
        <div className="hero__container" id="home">
                <div className="hero__background">       
                </div>
                <div className="hero__box__big">
                    <div className="hero__box__small">
                        <h1>Let go off the busy life and enjoy a stressfree vacation</h1>
                        <h2>For more of our travel offers register now</h2>
                        <button className="hero__register--btn">Register Now</button>
                    </div>
                </div>
        </div>
    );
}

export default Hero;