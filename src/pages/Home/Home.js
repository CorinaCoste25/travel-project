import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import InfoSection from '../../components/InfoSection/InfoSection';
import Offers from '../../components/Offers/Offers';
import Footer from '../../components/Footer/Footer';

const Home = () => {

    const [ data, setData ] = useState([]);

    useEffect( () => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const response = await fetch('InfoSectionData.json');
        const myData = await response.json();
        setData(myData);
    }

    return (
        <React.Fragment>
            <Navbar />
            <Hero />
            { data.map(info => {
                return( <InfoSection 
                    key={info.id}
                    id={info.id}
                    lightBg={info.lightBg}
                    lightText={info.lightText}
                    title={info.title}
                    headline={info.headline}
                    description={info.description}
                    offersList={info.offersList}
                    imgStart={info.imgStart}
                    image={info.image}
                    alt={info.alt}
                    />
                    );
                })}
            <Offers />
            <Footer />
        </React.Fragment>
    );
}

export default Home;