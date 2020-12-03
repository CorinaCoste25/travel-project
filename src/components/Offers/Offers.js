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
            </div>
        </React.Fragment>
    );
}

export default Offers;