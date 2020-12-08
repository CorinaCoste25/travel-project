import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import InfoSection from '../../components/InfoSection/InfoSection';
import { infoAbout, infoDestinations, contactInfo } from '../../components/InfoSection/Data';
import Offers from '../../components/Offers/Offers';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Hero />
            <InfoSection {...infoAbout}/>
            <InfoSection {...infoDestinations} />
            <Offers />
            <InfoSection {...contactInfo} />
            <Footer />
        </React.Fragment>
    );
}

export default Home;