import React, { useState, useEffect} from 'react';
import { MdAirplanemodeActive } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

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
        window.addEventListener('resize', showButton);
        window.addEventListener('scroll', changeNav);

        return () => {
            window.removeEventListener('resize', showButton);
            window.removeEventListener('scroll', changeNav);
        }
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

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <React.Fragment>
        <IconContext.Provider value={{color: 'var(--primaryColor)'}} >
            <nav className="nav__main" >
                <div className="nav__container" onClick={scrollToTop}>
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
                            <HashLink to="/#hero" className="nav__link" onClick={closeMobileMenu} smooth={true} duration={500} spy="true" exact='true' offset={-80}>
                                Home
                            </HashLink>
                        </li>

                        <li className="nav__item">
                            <HashLink to="/#about" className="nav__link" onClick={closeMobileMenu} smooth={true} duration={500} spy="true" exact='true' offset={-80}>
                                Services
                            </HashLink>
                        </li>

                        <li className="nav__item">
                            <HashLink to="/#contact" className="nav__link" onClick={closeMobileMenu} smooth={true} duration={500} spy="true" exact='true' offset={-80}>
                                Contact
                            </HashLink>
                        </li>

                        <li className="nav__item">
                            <HashLink to="/#offers" className="nav__link" onClick={closeMobileMenu} smooth={true} duration={500} spy="true" exact='true' offset={-80}>
                                Offers
                            </HashLink>
                        </li>

                        <Link to="/form">
                            <button className="nav__button" onClick={closeMobileMenu}>Register</button>
                        </Link> 
                    </ul>

                
                </nav>
            </nav>
            </IconContext.Provider>
        </React.Fragment>
    ); 
}

export default Navbar;