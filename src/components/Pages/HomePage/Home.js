import React from 'react';
import AppDownload from './AppDownload';
import Services from './Services/Services';
import HeroBanner from './HeroBanner/HeroBanner';
import CardSlide from './CardSlide';
import Users from './Users';
import Review from './Reviews/Review';
import Questions from './Questions';




const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            {/* <Questions></Questions> */}
            <CardSlide></CardSlide>
            {/* <Users></Users> */}
            <Services></Services>
            <AppDownload></AppDownload>
            <Review></Review>
        </div>
    );
};

export default Home;