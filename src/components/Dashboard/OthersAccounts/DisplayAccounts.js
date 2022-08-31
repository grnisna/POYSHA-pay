import React from 'react';
import { FiMoreVertical } from "react-icons/fi";
import { FcInfo } from "react-icons/fc";

import useAddedAccounts from '../../../Hooks/useAddedAccounts';

import './DisplayAccounts.css'
import QuickPayModal from './QuickPayModal';
import toast from 'react-hot-toast';




const DisplayAccounts = ({ accounts }) => {
    
    const { AccountHolder, HolderImg, AccountNumber, origin } = accounts;

    const handelQuickPay = () => {
        const qucikpay = window.prompt('Please put the amounts');
        if (qucikpay === '') {
            toast.error('Please put the amount');
        } else {
            toast.success('Send Successful');
        }

    }

    const handelAddRequest = () => {
        const addMoneyAmounts = window.prompt('Please put the amounts')
        toast.success('Send Successful');
    }
    const [addedAccount, addedAccounts] = useAddedAccounts();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:4000/addedAccount/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = addedAccounts.filter(addedAccount => addedAccount._id !== id);
                    addedAccounts(remaining);
                })
            console.log(addedAccount._id)
        }
    }

    return (
        <table class="table w-full">
            <tbody>
                <tr className='grid lg:grid-cols-5 sm:grid-cols-2 border-b-2 border-y-4  px-1 items-center'>
                    <td className=' border-none'>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src={HolderImg} alt="" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">{AccountHolder}</div>
                                <div class="text-sm opacity-50">{origin}</div>
                            </div>
                        </div>
                    </td>
                    <td className=' border-none flex justify-end'>
                        {AccountNumber}
                    </td>
                    <td className=' border-none flex justify-end'>
                        <button onClick={handelQuickPay} 
                        className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>
                            QUICK PAY
                        </button>
                    </td>
                    <td className=' border-none flex justify-end'>
                        <button onClick={handelAddRequest} className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>Money Request</button>
                    </td>
                    <td className='border-none flex justify-end'>
                        <button onClick={() => handleDelete(addedAccount._id)} className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>Delet</button>
                        {/* <FiMoreVertical></FiMoreVertical> */}
                    </td>
                </tr>
            </tbody>
        </table>


    );
};

export default DisplayAccounts;