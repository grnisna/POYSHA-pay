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
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://powerful-basin-90376.herokuapp.com/addedAccount/${id}`;
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
        // <<<<<<< HEAD
        //         <tr className='doBorder lg:border-b-2 lg:flex lg:items-center lg:justify-evenly lg:gap-5 grid grid-cols-2 items-center'>
        //             <td className='flex items-center flex-start py-2 border-none'>
        //                 <div className="flex shrink lg:w-64  w-24 flex-start px-50">
        //                     <div className="avatar px-5">
        //                         <div className="lg:w-12 w-8 lg:rounded-full">
        //                             <img className='rounded-full' src={HolderImg} alt="" />
        //                         </div>
        //                     </div>
        //                     <div className='text-start'>
        //                         <div className="flex">
        //                             <h3 className='text-sm'>{AccountHolder}</h3>
        //                             <span className='threeDot px-1 cursor-pointer'><FcInfo /></span>
        //                         </div>
        //                         <p className='text-xs'>{origin}</p>
        //                     </div>
        //                 </div>
        //             </td>
        //             {/* <td>{AccountHolder}</td> */}
        //             <td className='w-24 border-none'>{AccountNumber}</td>

        //             <td onClick={handelQuickPay} className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>Quick Pay</td>
        //             <td onClick={handelAddRequest} className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>Add Request</td>
        //             <td className='threeDot'><FiMoreVertical /></td>
        //         </tr>
        // =======
        <table className="table w-full">
            <tbody>
                <tr className='grid lg:grid-cols-5 sm:grid-cols-2 border-b-2 border-y-4  px-1 items-center'>
                    <td className=' border-none'>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={HolderImg} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{AccountHolder}</div>
                                <div className="text-sm opacity-50">{origin}</div>
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
                        <button onClick={() => handleDelete(addedAccount._id)} className='hover:bg-primary bg-white text-primary border-none hover:text-white btn btn-sm btn-active'>Delet</button>
                        {/* <FiMoreVertical></FiMoreVertical> */}
                    </td>
                </tr>
            </tbody>
        </table>


    );
};

export default DisplayAccounts;