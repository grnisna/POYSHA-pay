import { useEffect, useState } from 'react';

const TransactionHistory = () => {
  const [myTransactionHistory, setMyTransactionHistory] = useState([]);
  useEffect(() => {
    fetch('https://afternoon-wave-69445.herokuapp.com/addMoneyTransactions')
      .then(res => res.json())
      .then(data => setMyTransactionHistory(data))
  }, [myTransactionHistory])

  return [myTransactionHistory]
};

export default TransactionHistory;