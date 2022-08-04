import { useEffect, useState } from 'react';

const TransactionHistory = () => {
 const [myTransactionHistory, setMyTransactionHistory]  = useState([]);
 useEffect( () => {
  fetch('TransactionHistory.json')
  .then(res => res.json())
  .then(data => setMyTransactionHistory(data))
 }, [myTransactionHistory])

 return [myTransactionHistory]
};

export default TransactionHistory;