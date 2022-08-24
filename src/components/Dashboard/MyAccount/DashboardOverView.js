import React from 'react';
import ShortHistory from '../ShortTransHistory/ShortHistory';
import Account from './Account';
import LinkedAccounts from './LinkedAccounts';

const DashboardOverView = () => {
 return (
  <div>
   <Account></Account>
   <LinkedAccounts></LinkedAccounts>
   <ShortHistory></ShortHistory>
  </div>
 );
};

export default DashboardOverView;