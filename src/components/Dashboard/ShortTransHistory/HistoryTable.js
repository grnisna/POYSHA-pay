import React from 'react';

const HistoryTable = ({ myHistory }) => {
 const { date, where, payBy, transactionsType, amount } = myHistory;
 return (
  <tr>
   <td>{date}</td>
   <td>{where}</td>
   <td>{payBy}</td>
   <td>{transactionsType}</td>
   <td>{amount}</td>
  </tr>
 );
};

export default HistoryTable;