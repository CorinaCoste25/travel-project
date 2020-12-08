import React from 'react';

import { offer1, offer2, offer3 } from './Data';
import CardItem from '../CardItem';

import './Offers.css';
import { Link } from 'react-router-dom';

const Offers = () => {
    
    return (
        <React.Fragment>
            <div className="offers__container" id="offers">
            <h1>Our offers for travelling lovers</h1>
                <div className="offers__container--wrapper">
                        <CardItem {...offer1} />
                        <CardItem {...offer2} />
                        <CardItem {...offer3} />
                </div>
                <h3>If you would like to know more about our offers please register now by clicking here!</h3>
                <Link to="/form">
                    <button className="hero__register--btn">Register Now</button>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default Offers;