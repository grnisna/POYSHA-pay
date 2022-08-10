import React, { useEffect, useState } from 'react';
import './ViewAllTransaction.css';



const ViewAllTransaction = () => {

    const [ViewAll, setViewAll] = useState([]);
    useEffect(() => {
        fetch('ViewAllTransAction.json')
            .then(res => res.json())
            .then(data => setViewAll(data))
    }, [])

    const Reveived_money = ()=>{
        console.log('This is Revceived MOney')
    }
    const Send_money = ()=>{
        console.log('Send money')
    }


    return (
        <div class="card  bg-base-100 shadow-xl p-10">
            <div className='flex justify-center items-center gap-7 my-10'>
                <span onClick='All'  className='hover:bg-yellow-300'>All</span>
                <span onClick={Reveived_money}  className='hover:bg-yellow-300'>Received Money</span>
                <span onClick={Send_money} className='hover:bg-yellow-300'>Send Money</span>

            </div>
        <table className='table w-full'>
            <ul className="viewAllTable">

                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Receiver Number</th>
                        <th>Sender Number</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ViewAll.map(viewAllTransaction =>
                            <tr>
                                <th>1</th>
                                <td>{viewAllTransaction.Send_number}</td>
                                <td>{viewAllTransaction.Received_number}</td>
                                <td>{viewAllTransaction.Amount}</td>
                            </tr>
                        )
                    }

                </tbody>
            </ul>
            </table>
        </div >
    );
};

export default ViewAllTransaction;