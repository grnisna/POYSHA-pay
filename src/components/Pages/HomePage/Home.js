import React from 'react';
import AppDownload from './AppDownload';

import Services from './Services/Services';
import HeroBanner from './HeroBanner/HeroBanner';
// import Review from './Reviews/Review';
import ReviewData from './Reviews/ReviewData';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Services></Services>
            <AppDownload></AppDownload>
            <ReviewData></ReviewData>
            

        </div>
    );
};

export default Home;