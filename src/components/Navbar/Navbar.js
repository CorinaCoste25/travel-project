import React, { useState } from 'react';
import {TiAnchor} from 'react-icons/ti';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    
    const [ click, setClick] = useState(false);
    const [ button, setButton ] = useState(true);

    const handleClick = () => setClick(!click);

    const  closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <React.Fragment>
        <IconContext.Provider value={{color: 'var(--primaryColor)'}} >
            <div className="nav__main">
                <div className="nav__container">
                    <Link to="/" className="nav__logo" onClick={closeMobileMenu}>
                        Travel
                        <TiAnchor size={44}/>
                    </Link>
                </div>
                <nav className="nav__container">
                    <div className="nav__menu--icon" onClick={handleClick}>
                        { click ? <FaTimes size={32}/> : <FaBars size={32}/>}
                    </div>
                    <ul className={ click ? "nav__menu active" : "nav__menu" }>
                        <li className="nav__item">
                            <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                                Packages
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>

                        <button className="nav__button" onClick={closeMobileMenu}>Register</button>
                    </ul>

                
                </nav>
            </div>
            </IconContext.Provider>
        </React.Fragment>
    ); 
}

export default Navbar;