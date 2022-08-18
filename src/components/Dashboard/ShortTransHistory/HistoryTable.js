import React from 'react';

const HistoryTable = ({ myHistory }) => {
 const { banks, accountNumber, accountName, transferredAmount } = myHistory;
 return (
  <tr>
   <td>{banks}</td>
   <td>{accountNumber}</td>
   <td>{accountName}</td>
   <td>{transferredAmount}</td>
   {/* <td>{amount}</td> */}
  </tr>
 );
};

export default HistoryTable;