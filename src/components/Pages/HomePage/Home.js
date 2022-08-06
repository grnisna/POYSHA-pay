import React from 'react';
import AppDownload from './AppDownload';
import Services from './Services/Services';
import HeroBanner from './HeroBanner/HeroBanner';
import CardSlide from './CardSlide';


const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Services></Services>
            <CardSlide></CardSlide>
            <AppDownload></AppDownload>
        </div>
    );
};

export default Home;