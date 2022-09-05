import React from 'react';
import AppDownload from './AppDownload';
import Services from './Services/Services';
import HeroBanner from './HeroBanner/HeroBanner';
import CardSlide from './CardSlide';
// import Review from './Reviews/Review';

import Navbar from '../../SharedCompo/Navbar/Navbar';
import Footer from '../../SharedCompo/Footer/Footer';

import Review from './Reviews/Review';

import Paypal from '../../Hooks/Paypal/Paypal';
import LiveChat from '../../LiveChat/LiveChat';



const Home = () => {


    return (

        <div>
            <Navbar></Navbar>

            <HeroBanner />
            <CardSlide></CardSlide>
            <Services></Services>
            <AppDownload></AppDownload>
            <LiveChat></LiveChat>
            <Review></Review>
            <Footer></Footer>

        </div>
    );
};

export default Home;