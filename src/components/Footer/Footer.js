import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { MdAirplanemodeActive } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './Footer.css';
import '../Navbar/Navbar.css';

const Footer = () => {
    
    return (
        <div className="footer__container">
            <section className="footer__container--social">
                <div className="nav__container">
                    <Link to="/" className="nav__logo footer__logo">
                        Travel
                        <MdAirplanemodeActive size={32}/>
                    </Link>
                </div>
                <small className="webiste-rights">Travel © 2020</small>
                { /* SOCIAL ICONS */}
                <div className="footer__social--icons">
                    <Link
                        className='footer__social--icon-link'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                        <FaFacebook />
                    </Link>

                    <Link
                        className='footer__social--icon-link'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                        <FaInstagram />
                    </Link>
                    <Link
                        className='footer__social--icon-link'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'>
                        <FaYoutube />
                    </Link>
                    <Link
                        className='footer__social--icon-link'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'>
                        <FaTwitter />
                    </Link>
                    <Link
                        className='footer__social--icon-link'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'>
                        <FaLinkedin />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Footer;