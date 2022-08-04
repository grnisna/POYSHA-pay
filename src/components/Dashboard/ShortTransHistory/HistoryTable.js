import React from 'react';

const HistoryTable = ({ myHistory }) => {
 const { accountNumber, banks, accountName, transferredAmount } = myHistory;

 return (
  <tr>
   <td>{accountNumber}</td>
   <td>{banks}</td>
   <td>{accountName}</td>
   <td>{transferredAmount}</td>
  </tr>
 );
};

export default HistoryTable;