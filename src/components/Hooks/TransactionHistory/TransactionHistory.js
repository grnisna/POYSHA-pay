import { useEffect, useState } from 'react';

const TransactionHistory = () => {
  const [myTransactionHistory, setMyTransactionHistory] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/addMoneyTransactions')
      .then(res => res.json())
      .then(data => setMyTransactionHistory(data))
  }, [myTransactionHistory])


  return [myTransactionHistory]
};

export default TransactionHistory;