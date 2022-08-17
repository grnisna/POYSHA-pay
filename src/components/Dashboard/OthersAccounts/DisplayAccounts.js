import React from 'react';
import { FiMoreVertical } from "react-icons/fi";
import { FcInfo } from "react-icons/fc";


const DisplayAccounts = ({ accounts }) => {
    const { AccountHolder, HolderImg, AccountNumber, origin } = accounts;



    return (
        <tr className='border-b-2 border-secondary hover:bg-primary hover:text-white '>
            <td className='flex items-center flex-start py-2 '>
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
            </td>
            {/* <td>{AccountHolder}</td> */}
            <td>{AccountNumber}</td>
            <td><button className='btn btn-success'>Quick Pay</button></td>
            <td><button className='btn btn-info'>Add Request</button></td>

            <td><FiMoreVertical /></td>
        </tr>
    );
};

export default DisplayAccounts;