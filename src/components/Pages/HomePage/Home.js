import React from 'react';
import AppDownload from './AppDownload';
import Services from './Services/Services';
import HeroBanner from './HeroBanner/HeroBanner';
import CardSlide from './CardSlide';


const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <CardSlide></CardSlide>
            <Services></Services>
            <AppDownload></AppDownload>
        </div>
    );
};

export default Home;