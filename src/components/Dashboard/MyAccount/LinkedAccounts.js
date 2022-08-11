import React, { useEffect, useState } from 'react';
import LinkedAccountsHook from '../../Hooks/LinkedAccountsHook';
import LinkedAccountsInfo from './LinkedAccountsInfo';

const LinkedAccounts = () => {
 const [linkedBanks] = LinkedAccountsHook();

 return (
  <div className='Linked-account bg-slate-200 p-4 grid lg:grid-cols-4 justify-center'>

   {
    linkedBanks.map(accountInfo => <LinkedAccountsInfo
     accountInfo={accountInfo}
     key={accountInfo.key}
    ></LinkedAccountsInfo>)
   }
  </div>

 );
};

export default LinkedAccounts;