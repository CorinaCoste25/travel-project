import React from 'react';
import { Card } from 'react-bootstrap';
// import 'boostrap';

import './CardItem.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const CardItem = ({ image, title, offers, price }) => {

    return(
        <div className="card__container">
            <Card border='light' style={{width: '17rem'}}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold'}}>{title}</Card.Title>
                    <Card.Text style={{ fontSize: '1.2rem', fontWeight: '300'}}>{offers}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>{price}</Card.Footer>
            </Card>
        </div>
    );
}

export default CardItem;