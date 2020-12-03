import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <Link to='/register' className="btn">
            <button className="btn__register"></button>
        </Link>
    );
}