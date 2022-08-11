import React, { useEffect, useState } from 'react';
import './ViewAllTransaction.css';



const ViewAllTransaction = () => {

    const [viewAllAddedMoney, setViewAllAddedMoney] = useState([]);
    const [number, setNumber] = useState(0);
    const [sendMoney, setSendMoney] = useState([]);
    const [separateData, setSeparateData] = useState(false);

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
        <div class="card shadow-xl bg-white grid lg:col-span-2 p-10 ">
            <div className='flex justify-center items-center gap-7 my-10'>
                {/* <span className='hover:bg-yellow-300'>All</span> */}
                <span onClick={trueFunction} className='btn hover:bg-violet-700 btn-outline'>Received Money</span>
                <span onClick={falseFunction} className='btn hover:bg-violet-700 btn-outline'>Send Money</span>

            </div>

            <table className="viewAllTable  table-zebra shadow-xl ">
            {/*================ table heading ================ */}
                <thead className='bg-red-200'>
                    <tr>
                        <th>No.</th>
                        {separateData === true ?
                            <th>  Receiver Number</th>
                            :
                            <th>  Send Number</th>
                        }

                        <th>Amount</th>
                    </tr>
                </thead>

            {/*================ table body ================ */}

                {separateData === true ?
                    <tbody className='text-center'>
                        {
                            viewAllAddedMoney.map((viewAddMoney,index) =>
                                <tr className=' border bg-green-300' key={viewAddMoney._id}>
                                    <td>{index}</td>
                                    <td >{viewAddMoney.accountNumber}</td>
                                    <td >{viewAddMoney.transferredAmount}</td>
                                </tr>
                            ).slice(60)
                        }
                    </tbody>

                    : 
                    <tbody className='text-center'>

                        {
                            sendMoney.map((viewAllSendMoney,index) =>
                                <tr  className=' border bg-cyan-200'  key={viewAllSendMoney._id}>
                                    <td>{index}</td>
                                    <td >{viewAllSendMoney.sendNumber}</td>
                                    <td >{viewAllSendMoney.sendAmount}</td>
                                </tr>
                            ).slice(2)
                        }
                    </tbody>

                }





            </table>
        </div >
    );
};

export default ViewAllTransaction;