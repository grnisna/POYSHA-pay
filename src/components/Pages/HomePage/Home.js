import React from 'react';
import AppDownload from './AppDownload';
import Growth from './Growth';
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
            {/* <Growth></Growth> */}
        </div>
    );
};

export default Home;