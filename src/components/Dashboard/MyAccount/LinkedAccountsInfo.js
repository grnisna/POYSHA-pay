import React from 'react';
import { FaEllipsisV, FaRegClone } from 'react-icons/fa';
import './LinkedAccountsInfo.css'
const LinkedAccountsInfo = ({ accountInfo }) => {
 const { BankName, BankLogo, BankAccountNum } = accountInfo;
 return (
  <div className='pb-5 justify-center '>
   <div class="card w-60 bg-base-100 shadow-xl ">
    <div class="card-body  justify-center ">
     {/* top-part-of-card */}
     <div className="bankInfo grid grid-cols-3 items-center ">
      <div className="bankData lg:col-span-2 ">
       <h2 class="text-sm">{BankName}</h2>
       <div className="account-num flex items-center">
        <p className='text-xs'>{BankAccountNum}</p>
        <div className='copy-icon '><FaRegClone /></div>
       </div>
      </div>
      <div className="log grid justify-end">
       <img className='BankLogo' src={BankLogo} alt="" />
      </div>
     </div>
     {/* bottom part of card */}
     <div className="bankOption grid grid-cols-2" >
      <div className="bank-founds ">
       <h2 className='text-xl font-bold'>200.12 <span className='text-md font-normal'>$</span></h2>
      </div>
      <div className="more-options grid justify-end items-center">
       <FaEllipsisV className='menu-icon ' />
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default LinkedAccountsInfo;