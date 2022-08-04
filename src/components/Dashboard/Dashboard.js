import React from 'react';
import Account from './MyAccount/Account';
import LinkedAccounts from './MyAccount/LinkedAccounts';
// import Overall from './ShortTransHistory/Overall';
import ShortHistory from './ShortTransHistory/ShortHistory'

const Dashboard = () => {
 return (
  <div>
   <Account></Account>
   <LinkedAccounts></LinkedAccounts>
   <ShortHistory></ShortHistory>
   {/* <Overall></Overall> */}
  </div>
 );
};

export default Dashboard;