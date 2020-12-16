import React from 'react';
import { Card } from 'react-bootstrap';

import './CardItem.css';

const CardItem = ({ image, title, offers, price }) => {

    return(
        <div className="card__container">
            <Card border='light' style={{width: '17rem'}}>
                <div className="card__image--wrapper">
                    <Card.Img className="card__image" variant="top" src={image}/>
                </div>
                <Card.Body>
                    <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold'}}>{title}</Card.Title>
                    
                        <ul>
                        { offers.map(item => {
                            console.log(item);
                            return <li key={item}>{item}</li>
                        }) }
                        </ul>
                    
                </Card.Body>
                <Card.Footer style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>{price}</Card.Footer>
            </Card>
        </div>
    );
}

export default CardItem;