import React, { useState, useEffect} from 'react';
import { MdAirplanemodeActive } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';

import './Navbar.css';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    
    const [ click, setClick] = useState(false);
    const [ button, setButton ] = useState(true);
    const [ scrollNav, setScrollNav ] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', changeNav)
    }, []);

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
            <div className="nav__main" scrollNav={scrollNav}>
                <div className="nav__container">
                    <Link to="/" className="nav__logo" onClick={closeMobileMenu}>
                        Travel
                        <MdAirplanemodeActive size={32}/>
                    </Link>
                </div>
                <nav className="nav__container">
                    <div className="nav__menu--icon" onClick={handleClick}>
                        { click ? <FaTimes size={32}/> : <FaBars size={32}/>}
                    </div>
                    <ul className={ click ? "nav__menu active" : "nav__menu" }>
                        <li className="nav__item">
                        <Link to="/" >
                            <LinkScroll to="hero" className="nav__link" onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                Home
                            </LinkScroll>
                        </Link>
                        </li>
                        <li className="nav__item">
                            <LinkScroll to="about" className="nav__link" onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                Services
                            </LinkScroll>
                        </li>
                        <li className="nav__item">
                            <LinkScroll to="offers" className="nav__link" onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                Offers
                            </LinkScroll>
                        </li>

                        <li className="nav__item">
                            <LinkScroll to="contact" className="nav__link" onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                Contact
                            </LinkScroll>
                        </li>

                        <Link to="/form">
                            <button className="nav__button"  onClick={closeMobileMenu}>Register</button>
                        </Link> 
                    </ul>

                
                </nav>
            </div>
            </IconContext.Provider>
        </React.Fragment>
    ); 
}

export default Navbar;