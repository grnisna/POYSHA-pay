import React, { useEffect } from 'react';
// import TransactionHistory from '../../Hooks/TransactionHistory/TransactionHistory';
import HistoryTable from './HistoryTable';
import './ShortHistory.css'
import OverallSpend from '../../Hooks/OvarallSpend/OverallSpend';
import Overall from './Overall';
import { useState } from 'react';
import Statement from '../../Hooks/Statement/Statement';




const ShortHistory = () => {
    // const [myTransactionHistory] = TransactionHistory();
    //--------------------------------------------
    const [allStatement, setAllStatement] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/transactionStatement`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                console.log(count);
                const perTransaction = Math.ceil(count / 2);
                setAllStatement(perTransaction);
            })
    }, []);
    //--------------------------------------------
    const [userSpend] = OverallSpend();
    const [viewShortHistory, setViewShortHistory] = useState([]);

    useEffect(() => {
        const url = "https://powerful-basin-90376.herokuapp.com/transactionHistory"
        fetch(url)
            .then(res => res.json())
            .then(data => setViewShortHistory(data))
    }, []);

    return (
        <div className='bg-slate-200 grid lg:grid-cols-3 grid-cols-1 px-4 pb-4 gap-4 '>
            <div class="card shadow-xl bg-white grid lg:col-span-2 p-10 ">
                <div className="history-Header grid grid-cols-2 items-center py-5">
                    <div className="header grid justify-start">
                        <h2 className='text-xl font-bold'>Latest Transactions</h2>
                    </div>
                    <div className="array-header grid justify-end">
                        <div className="icon-arrow">
                            {/* <FaArrowRight className='right-arrow text-primary' /> */}
                        </div>
                    </div>
                </div>
                <table class="table-auto">
                    <thead className='bg-red-200 table-head'>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Banks</th>
                            <th>Amount</th>
                            <th>Ref.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            viewShortHistory.map(myHistory => <HistoryTable
                                myHistory={myHistory}
                                key={myHistory._id}
                            ></HistoryTable>).reverse()
                        }
                        {/* {
                            myTransactionHistory.map(myHistory => <HistoryTable
                                myHistory={myHistory}
                                key={myHistory.amount}
                            ></HistoryTable>)
                        } */}
                    </tbody>
                </table>
            </div>

            {/* overview of user account  */}
            <div class="card bg-base-100 shadow-xl">

                <div class="card-body">
                    <div className="history-Header grid grid-cols-2  items-center py-5">
                        <div className="header grid justify-start">
                            <h2 className='text-xl font-bold'>Overall</h2>
                        </div>
                        <div className="array-header grid justify-end">
                            <div className="icon-arrow">
                                {/* <FaArrowRight className='right-arrow text-primary' /> */}
                            </div>
                        </div>
                    </div>
                    <div className="total-spend grid lg:grid-cols-3 ">
                        {
                            userSpend.map(totalSpend => <Overall
                                totalSpend={totalSpend}
                                key={totalSpend.spend}
                            ></Overall>)
                        }
                    </div>

                    <hr className='py-2' />

                </div>
            </div>
 

        </div>
    );
};

export default ShortHistory;