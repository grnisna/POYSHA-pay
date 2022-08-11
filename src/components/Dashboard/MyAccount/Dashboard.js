import React from 'react';
import Account from './Account';
import LinkedAccounts from './LinkedAccounts';
import ShortHistory from '../ShortTransHistory/ShortHistory'
import ViewAllTransaction from '../Shared/ViewAllTransaction/ViewAllTransaction';

const Dashboard = () => {
    return (
        <div>
            <Account></Account>
            <LinkedAccounts></LinkedAccounts>
            <ShortHistory></ShortHistory>
            <ViewAllTransaction></ViewAllTransaction>
        </div>
    );
};

export default Dashboard;