import React from 'react';
import Account from './MyAccount/Account';
// import Overall from './ShortTransHistory/Overall';
import HeroBanner from './';
import ShortHistory from './ShortTransHistory/ShortHistory';
const Dashboard = () => {
    return (
        <div>
            <HeroBanner />
            <Account />
            <ShortHistory />
        </div>
    );
};

export default Dashboard;