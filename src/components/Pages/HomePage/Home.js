import React from 'react';
import AppDownload from './AppDownload';
import Services from './Services/Services';
import HeroBanner from './HeroBanner/HeroBanner';
import CardSlide from './CardSlide';
import Navbar from '../../SharedCompo/Navbar/Navbar';
import Footer from '../../SharedCompo/Footer/Footer';
import Paypal from '../../Hooks/Paypal/Paypal';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroBanner />
            <CardSlide></CardSlide>
            <Services></Services>
            <AppDownload></AppDownload>
            <Footer></Footer>
        </div>
    );
};

export default Home;