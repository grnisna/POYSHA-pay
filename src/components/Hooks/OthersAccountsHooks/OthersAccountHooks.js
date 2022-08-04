import React, { useEffect, useState } from 'react';

const OthersAccountHooks = () => {
 const [othersAccount, setOthersAccounts] = useState([]);
 useEffect ( () => {
  fetch('OthersAccounts.json')
  .then(res => res.json())
  .then(data => setOthersAccounts(data))
 },[])
 return [othersAccount]
};

export default OthersAccountHooks;