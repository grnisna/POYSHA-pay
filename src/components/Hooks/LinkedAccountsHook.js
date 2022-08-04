import React, { useEffect, useState } from 'react';

const LinkedAccountsHook = () => {
  const [linkedBanks, setLinkedBanks] = useState([]);
  useEffect(() => {
    fetch('LinkedAccounts.json')
      .then(res => res.json())
      .then(data => setLinkedBanks(data))
  }, [linkedBanks])
  return [linkedBanks, setLinkedBanks];
};

export default LinkedAccountsHook;