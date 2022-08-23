import React from 'react';
import { FiMoreVertical } from "react-icons/fi";
import { FcInfo } from "react-icons/fc";
import './DisplayAccounts.css'


const DisplayAccounts = ({ accounts }) => {
    const showAndHideThreeDot = true;
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
        <tr className='doBorder lg:border-b-2 lg:flex lg:items-center lg:justify-evenly lg:gap-5 grid grid-cols-2 items-center'>
            <td className='flex items-center flex-start py-2 border-none'>
                <div className="flex shrink lg:w-64  w-24 flex-start px-50">
                    <div className="avatar px-5">
                        <div className="lg:w-12 w-8 lg:rounded-full">
                            <img className='rounded-full' src={HolderImg} alt="" />
                        </div>
                    </div>
                    <div className='text-start'>
                        <div className="flex">
                            <h3 className='text-sm'>{AccountHolder}</h3>
                            <span className='threeDot px-1 cursor-pointer'><FcInfo /></span>
                        </div>
                        <p className='text-xs'>{origin}</p>
                    </div>
                </div>
            </td>
            {/* <td>{AccountHolder}</td> */}
            <td className='w-24 border-none'>{AccountNumber}</td>

            <td onClick={handelQuickPay} className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>Quick Pay</td>
            <td onClick={handelAddRequest} className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>Add Request</td>
            <td className='threeDot'><FiMoreVertical /></td>
        </tr>
    );
};

export default DisplayAccounts;