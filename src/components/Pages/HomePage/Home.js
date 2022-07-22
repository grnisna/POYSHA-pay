import React from 'react';
import AppDownload from './AppDownload';
import Growth from './Growth';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <AppDownload></AppDownload>
            <Growth></Growth>
        </div>
    );
};

export default Home;