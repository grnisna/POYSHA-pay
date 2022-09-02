import React from 'react';
import { FiMoreVertical } from "react-icons/fi";
import { FcInfo } from "react-icons/fc";

import useAddedAccounts from '../../../Hooks/useAddedAccounts';

import './DisplayAccounts.css'



const DisplayAccounts = ({ accounts }) => {

    const { AccountHolder, HolderImg, AccountNumber, origin } = accounts;

    const handelQuickPay = () => {
        const quickPayAmounts = window.prompt('Please put the amounts');
        console.log(quickPayAmounts);

    }

    const handelAddRequest = () => {
        const addMoneyAmounts = window.prompt('Please put the amounts')
        console.log(addMoneyAmounts);
    }
    const [addedAccount, addedAccounts] = useAddedAccounts();
    // console.log(addedAccount._id);
    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/addedAccount/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = addedAccounts.filter(addedAccount => addedAccount._id !== id);
                    addedAccounts(remaining);
                })
            // console.log(addedAccount._id)
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
                        <button onClick={handelQuickPay} className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>Quick Pay</button>
                    </td>
                    <td className=' border-none flex justify-end'>
                        <button onClick={handelAddRequest} className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>Money Request</button>
                    </td>
                    <td className='border-none flex justify-end'>
                        <button onClick={() => handleDelete(addedAccount[0]._id)} className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>Delet</button>
                        {/* <FiMoreVertical></FiMoreVertical> */}
                    </td>
                </tr>
            </tbody>
        </table>


    );
};

export default DisplayAccounts;