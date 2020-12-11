import React, { useState, useEffect} from 'react';
import { animateScroll as scroll } from 'react-scroll';

import CardItem from '../CardItem';

import './Offers.css';
import { Link } from 'react-router-dom';

const Offers = () => {
    
    const [ data, setData ] = useState([]);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("CardInfo.json");
        const myData = await response.json();
        setData(myData);
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <React.Fragment>
            <div className="offers__container" id="offers" onClick={scrollToTop}>
            <h1>Our offers for travelling lovers</h1>
                <div className="offers__container--wrapper">
                    { data.map(card => {
                        return(
                            <CardItem 
                                key={card.id}
                                image={card.image}
                                title={card.title}
                                offers={card.offers}
                                price={card.price}
                            />
                        )
                        }
                    )}
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