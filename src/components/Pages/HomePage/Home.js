import React from 'react';
import AppDownload from './AppDownload';
import Services from './Services/Services';
import HeroBanner from './HeroBanner/HeroBanner';
import CardSlide from './CardSlide';
import Navbar from '../../SharedCompo/Navbar/Navbar';
import Footer from '../../SharedCompo/Footer/Footer';




const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroBanner></HeroBanner>

            <CardSlide></CardSlide>
            <Services></Services>

            <AppDownload></AppDownload>
            <Footer></Footer>
        </div>
    );
};

export default Home;