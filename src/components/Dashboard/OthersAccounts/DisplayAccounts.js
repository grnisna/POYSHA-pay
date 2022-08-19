import React from 'react';
import { FiMoreVertical } from "react-icons/fi";
import { FcInfo } from "react-icons/fc";


const DisplayAccounts = ({ accounts }) => {
 const { AccountHolder, HolderImg, AccountNumber, origin } = accounts;

 const handelQuickPay = () => {
  const quickPayAmounts = window.prompt('Please put the amounts')
  console.log(quickPayAmounts);

 }

 const handelAddRequest = () => {
  const addMoneyAmounts = window.prompt('Please put the amounts')
  console.log(addMoneyAmounts);
 }


 return (
  <tr className='border-b-2 grid lg:grid-cols-5 grid-cols-2 items-center justify-items-center'>
   <td className='flex items-center flex-start py-2 '>
    <div className="flex shrink w-64  flex-start px-50">
     <div class="avatar px-5">
      <div class="w-12 rounded-full">
       <img src={HolderImg} alt="" />
      </div>
     </div>
     <div className='text-start'>
      <div className="flex">
       <h3>{AccountHolder}</h3>
       <span className=' px-1 cursor-pointer'><FcInfo /></span>
      </div>
      <p className='text-xs'>{origin}</p>
     </div>
    </div>
   </td>
   {/* <td>{AccountHolder}</td> */}
   <td>{AccountNumber}</td>

   <td onClick={handelQuickPay} className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>Quick Pay</td>
   <td onClick={handelAddRequest} className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>Add Request</td>
   <td><FiMoreVertical /></td>
  </tr>
 );
};

export default DisplayAccounts;