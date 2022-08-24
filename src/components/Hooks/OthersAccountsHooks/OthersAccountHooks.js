import React, { useEffect, useState } from 'react';

const OthersAccountHooks = () => {
  const [othersAccount, setOthersAccounts] = useState([]);
  useEffect(() => {
    fetch('https://powerful-basin-90376.herokuapp.com/addedAccount')
      .then(res => res.json())
      .then(data => setOthersAccounts(data))
  }, [])
  return [othersAccount]
};

export default OthersAccountHooks;