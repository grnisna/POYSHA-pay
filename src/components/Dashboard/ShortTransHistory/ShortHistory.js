import React from 'react';
import TransactionHistory from '../../Hooks/TransactionHistory/TransactionHistory';
import HistoryTable from './HistoryTable';
import { FaArrowRight } from 'react-icons/fa';
import './ShortHistory.css'
import OverallSpend from '../../Hooks/OvarallSpend/OverallSpend';
import Overall from './Overall';




const ShortHistory = () => {
 const [myTransactionHistory] = TransactionHistory();
 const [userSpend] = OverallSpend();

 return (
  <div className='bg-slate-200 grid grid-cols-3 px-10 gap-10 pb-10'>
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
       myTransactionHistory.map(myHistory => <HistoryTable
        myHistory={myHistory}
        key={myHistory.amount}
       ></HistoryTable>)
      }
     </tbody>
    </table>
   </div>

   {/* overview of user account  */}
   <div class="card w-96 bg-base-100 shadow-xl">

    <div class="card-body">
     <div className="history-Header grid grid-cols-2 items-center py-5">
      <div className="header grid justify-start">
       <h2 className='text-xl font-bold'>Overall</h2>
      </div>
      <div className="array-header grid justify-end">
       <div className="icon-arrow">
        {/* <FaArrowRight className='right-arrow text-primary' /> */}
       </div>
      </div>
     </div>
     <div className="total-spend grid lg:grid-cols-3">
      {
       userSpend.map(totalSpend => <Overall
        totalSpend={totalSpend}
        key={totalSpend.spend}
       ></Overall>)
      }
     </div>

     <hr className='py-2' />

     <div className="overview-chart">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, facilis.
     </div>

    </div>
   </div>

  </div>
 );
};

export default ShortHistory;