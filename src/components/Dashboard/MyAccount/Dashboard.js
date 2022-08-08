import React from 'react';
import Account from './Account';
import LinkedAccounts from './LinkedAccounts';
import ShortHistory from '../ShortTransHistory/ShortHistory'

const Dashboard = () => {
    return (
        <div>
            <Account></Account>
            <LinkedAccounts></LinkedAccounts>
            <ShortHistory></ShortHistory>
        </div>
    );
};

export default Dashboard;