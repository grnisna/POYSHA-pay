import React from 'react';
import Account from './MyAccount/Account';

import ShortHistory from './ShortTransHistory/ShortHistory';

const Dashboard = () => {
    return (
        <div>
            <Account />
            <ShortHistory />
        </div>
    );
};

export default Dashboard;