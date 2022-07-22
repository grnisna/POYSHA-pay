import React from 'react';
import AppDownload from './AppDownload';
import Growth from './Growth';
import Services from './Services/Services';

import HeroBanner from './HeroBanner/HeroBanner';
import AppDownload from './AppDownload'

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Growth></Growth>
            <AppDownload></AppDownload>
            <Services></Services>

        </div>
    );
};

export default Home;