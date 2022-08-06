import React from 'react';
import OthersAccountHooks from '../../Hooks/OthersAccountsHooks/OthersAccountHooks';
import DisplayAccounts from './DisplayAccounts';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';

const OthersAccounts = () => {
 const [othersAccount] = OthersAccountHooks()
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
 const onSubmit = data => {
  const accountData = {
   AccountHolder: data.AccountHolder,
   AccountNumber: data.AccountNumber,
   origin: data.origin,
   HolderImg: 'https://placeimg.com/192/192/people'
  }
  axios.post('https://powerful-basin-90376.herokuapp.com/addedAccount', accountData)
   .then(response => {
    console.log(response);
    toast.success('successfully new Account added');
   })
 };
 return (
  <div className='others-account-history bg-slate-200 px-20 justify-center'>
   <div class="card  bg-base-100 shadow-xl justify-center text-center ">
    <div class="card-body items-center text-center py-10">
     <h1 className='text-4xl font-bold py-10 text-primary'>Add New Account</h1>
     {/* <div className="addAccountInput grid grid-cols-4 gap-10"> */}
     <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-4 gap-10">
      <input type="text" placeholder="Account Holder" {...register("AccountHolder")} class="input input-bordered w-full max-w-xs" />
      <input type="number" placeholder="Account Number"  {...register("AccountNumber")} class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Origin" {...register("origin")} class="input input-bordered w-full max-w-xs" />
      <input type="submit" value="Add Account" class="btn-primary input-bordered w-full max-w-xs" />
     </form>
     {/* </div> */}
    </div>

    <hr />

    <div class="card-body px-20 justify-center">
     <table class="table-auto ">
      <tbody className=' text-center '>
       {
        othersAccount.map(accounts => <DisplayAccounts
         accounts={accounts}
         key={accounts.AccountNumber}
        ></DisplayAccounts>)
       }
      </tbody>
     </table>
    </div>
   </div>

  </div>
 );
};

export default OthersAccounts;