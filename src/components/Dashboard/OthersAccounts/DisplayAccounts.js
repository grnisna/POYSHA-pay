import React from 'react';
import { FiMoreVertical } from "react-icons/fi";
import { FcInfo } from "react-icons/fc";


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
                        <FiMoreVertical></FiMoreVertical>
                    </td>
                </tr>
            </tbody>
        </table>

    );
};

export default DisplayAccounts;