import React from 'react';

const Overall = ({ totalSpend }) => {
 const { duration, spend } = totalSpend;
 return (
  <div className='account-info'>
   <div className="overview-type">
    <h4>{duration}</h4>
    <h2 className='text-xl font-medium'>{spend} <span className='text-sm font-normal'> $ </span></h2>
   </div>

  </div>
 );
};

export default Overall;