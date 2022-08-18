import React from 'react';
import TransactionHistory from '../../Hooks/TransactionHistory/TransactionHistory';
import HistoryTable from './HistoryTable';
import './ShortHistory.css'
import OverallSpend from '../../Hooks/OvarallSpend/OverallSpend';
import Overall from './Overall';




const ShortHistory = () => {
    const [myTransactionHistory] = TransactionHistory();
    const [userSpend] = OverallSpend();

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
                    <tbody>
                        {
                            myTransactionHistory.slice(0, 10).map(myHistory => <HistoryTable
                                myHistory={myHistory}
                                key={myHistory.amount}
                            ></HistoryTable>)
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