import React from 'react';

const HistoryTable = ({ myHistory }) => {
 const {accountName, accountNumber, reference, transferredAmount,banks } = myHistory;
 return (

  <tr className='text-xs'>
   <td className='px-3'>{accountName}</td>
   <td className='px-3'>{accountNumber}</td>
   <td className='px-3'>{banks}</td>
   <td className='px-3'>{transferredAmount}</td>
   <td className='px-3'>{reference}</td>
  </tr>
 );
};

export default HistoryTable;