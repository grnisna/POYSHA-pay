import React, { useEffect, useState } from 'react';
import './ViewAllTransaction.css';



const ViewAllTransaction = () => {

    const [viewAllAddedMoney, setViewAllAddedMoney] = useState([]);
    const [number, setNumber] = useState(0);
    const [sendMoney, setSendMoney] = useState([]);
    const [separateData , setSeparateData] = useState(false);
    
    // get all received money info
    // --------------------------------
    useEffect(() => {
        const url = "http://localhost:5000/addMoneyTransactions"
        fetch(url)
            .then(res => res.json())
            .then(data => setViewAllAddedMoney(data))
    }, []);


    // get all send money info 
    // --------------------------
    useEffect(() => {
        const url = "http://localhost:5000/sendMoney"
        fetch(url)
            .then(res => res.json())
            .then(data => setSendMoney(data))
    }, []);


    const trueFunction = () => {
        setSeparateData(true);
    }
    const falseFunction = () => {
        setSeparateData(false);
    }

    const incrementCount = () => {
        setNumber(number + 1);
    };



    return (
        <div class="card  bg-base-100 shadow-xl p-10">
            <div className='flex justify-center items-center gap-7 my-10'>
                <span className='hover:bg-yellow-300'>All</span>
                <span onClick={trueFunction} className='hover:bg-yellow-300'>Received Money</span>
                <span onClick={falseFunction} className='hover:bg-yellow-300'>Send Money</span>

            </div>

            <table className="viewAllTable w-full">

                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Receiver Number</th>
                        <th>Amount</th>
                    </tr>
                </thead>



                {separateData === true ?
                    <tbody>

                        {
                            viewAllAddedMoney.map(viewAddMoney =>
                                <tr key={viewAddMoney._id}>
                                    <td>{number}</td>
                                    <td >{viewAddMoney.accountNumber}</td>
                                    <td >{viewAddMoney.transferredAmount}</td>
                                </tr>
                            )
                        }
                    </tbody>
                    : <tbody>

                        {
                            sendMoney.map(viewAllSendMoney =>
                                <tr key={viewAllSendMoney._id}>
                                    <td>{number}</td>
                                    <td >{viewAllSendMoney.sendNumber}</td>
                                    <td >{viewAllSendMoney.sendAmount}</td>
                                </tr>
                            )
                        }
                    </tbody>

                }





            </table>
        </div >
    );
};

export default ViewAllTransaction;