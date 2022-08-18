import React from 'react';
import AppDownload from './AppDownload';
import Services from './Services/Services';
import HeroBanner from './HeroBanner/HeroBanner';
import CardSlide from './CardSlide';

import Users from './Users';
import ImageUpload from './ImageUpload';
import UserImages from './UserImages';



import Review from './Reviews/Review';



const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <ImageUpload></ImageUpload>
            <UserImages></UserImages>
            <CardSlide></CardSlide>
            {/* <Users></Users> */}
            <Services></Services>
            <AppDownload></AppDownload>
            <Review></Review>
        </div>
    );
};

export default Home;