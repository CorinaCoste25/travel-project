import React from 'react';
//import SeaVideo from '../../assets/videos/sea-video.mp4';
import { Link } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';

import './Hero.css';

const Hero = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="hero__container" id="hero">
                <div className="hero__background">       
                </div>
                <div className="hero__box--big">
                    <div className="hero__box--small">
                        <h1>Let go off the busy life and enjoy a stressfree vacation</h1>
                        <h2>For more of our travel offers register now</h2>
                        <Link to="/form">
                            <button className="hero__register--btn" onClick={scrollToTop}>Register Now</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
}

export default Hero;