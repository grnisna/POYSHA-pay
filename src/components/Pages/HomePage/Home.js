import React from 'react';
import AppDownload from './AppDownload';
import Growth from './Growth';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>

            <Growth></Growth>
            <AppDownload></AppDownload>
            <Services></Services>
        </div>
    );
};

export default Home;