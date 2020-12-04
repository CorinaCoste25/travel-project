import React from 'react';

import { offer1, offer2, offer3 } from './Data';
import CardItem from '../CardItem';

import './Offers.css';

const Offers = () => {
    
    return (
        <React.Fragment>
            <div className="offers__container">
            <h1>Our offers for travelling lovers</h1>
                <div className="offers__container--wrapper">
                        <CardItem {...offer1} />
                        <CardItem {...offer2} />
                        <CardItem {...offer3} />
                </div>
                <h3>If you would like to know more about our offers please register now by clicking here!</h3>
                <button className="hero__register--btn">Register Now</button>
            </div>
        </React.Fragment>
    );
}

export default Offers;