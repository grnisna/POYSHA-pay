import React, { useEffect, useState } from 'react';

const OverallSpend = () => {
 const [userSpend, setUserSpend] = useState([]);
 useEffect( ( ) => {
  fetch('OverallSpend.json')
  .then(res => res.json())
  .then(data => setUserSpend(data))
 }, [])
 return [userSpend]
};

export default OverallSpend;