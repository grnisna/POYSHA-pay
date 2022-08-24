import React from 'react';
import OthersAccountHooks from '../../Hooks/OthersAccountsHooks/OthersAccountHooks';
import DisplayAccounts from './DisplayAccounts';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';
import ViewAllTransaction from '../Shared/ViewAllTransaction/ViewAllTransaction';

const OthersAccounts = () => {
  const [othersAccount] = OthersAccountHooks()
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    const accountData = {
      AccountHolder: data.AccountHolder,
      AccountNumber: data.AccountNumber,
      origin: data.origin,
      HolderImg: 'https://placeimg.com/192/192/people'
    }
    axios.post('https://powerful-basin-90376.herokuapp.com/addedAccount', accountData)
      .then(response => {
        toast.success('successfully new Account added');
      })
    reset();
  };

  return (

    <div className='bg-slate-200 px-20 justify-center h-screen overflow-y-scroll'>
      <div className="bg-base-100 shadow-xl justify-center text-center ">
        <div className="items-center text-center ">
          <h1 className='text-4xl font-bold text-primary py-5'>Add Your Favorites Contact</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-4 gap-5">
            <input type="text" placeholder="Account Holder" {...register("AccountHolder")} className="input input-bordered w-full max-w-xs" required />
            <input type="number" placeholder="Account Number"  {...register("AccountNumber")} className="input input-bordered w-full max-w-xs" required />
            <input type="text" placeholder="Origin" {...register("origin")} className="input input-bordered w-full max-w-xs" required />
            <input type="submit" value="Add Account" className="bg-primary hover:bg-secondry text-white border-none hover:text-white btn btn-sm btn-active h-full" />

          </form>
          {/* </div> */}
        </div>




        <thead>
          {
            othersAccount.map(accounts =>
              <DisplayAccounts
                accounts={accounts}
                key={accounts.AccountNumber}
              ></DisplayAccounts>)
          }
        </thead>

      </div>
    </div>
  );
};

export default OthersAccounts;