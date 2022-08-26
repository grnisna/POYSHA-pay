import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Statement from '../../../Hooks/Statement/Statement';
import './ViewAllTransaction.css';



const ViewAllTransaction = () => {
  //pagination ----------
  const [AddedMoney, setAddedMoney] = useState([]);
  const [sendMoney, setSendMoney] = useState([]);
  const [allStatement, setAllStatement] = useState([]);
  console.log(allStatement);
  const [statementCount, setStatementCount] = useState(0);
  const [activeStatement, setActiveStatement] = useState(0);
  const [showQuantity, setShowQuantity] = useState(5);
  const [separateData, setSeparateData] = useState(false);
  const [allTransActionData, setAllTransActionData] = useState(false);



  // -------------- ADD Money -----------------------

  useEffect(() => {
    const addMoneyUrl = `https://powerful-basin-90376.herokuapp.com/addMoneyTransactions?activeNumber=${activeStatement}&showQuantity=${showQuantity}`

    fetch(addMoneyUrl)
      .then(res => res.json())
      .then(data => setAddedMoney(data))
  }, [activeStatement, showQuantity]);


  useEffect(() => {
    const url = `https://powerful-basin-90376.herokuapp.com/addMoneyStatementCount`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const perTransaction = Math.ceil(count / 10);
        setStatementCount(perTransaction);
      })
  }, []);



  // SEND MONEY---------------
  // ------------------------------------------

  useEffect(() => {
    const sendMoneyUrl = `https://powerful-basin-90376.herokuapp.com/sendMoney?activeNumber=${activeStatement}&showQuantity=${showQuantity}`

    fetch(sendMoneyUrl)
      .then(res => res.json())
      .then(data => setSendMoney(data))
  }, [activeStatement, showQuantity]);



  useEffect(() => {
    const url = `https://powerful-basin-90376.herokuapp.com/sendMoneyStatementCount`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const perTransaction = Math.ceil(count / 10);
        setStatementCount(perTransaction);
      })
  }, []);


  // ALL TRANSACTION HISTORY ----------------------
  useEffect(() => {
    const allStatement = `https://powerful-basin-90376.herokuapp.com/transactionStatement?activeNumber=${activeStatement}&showQuantity=${showQuantity}`

    fetch(allStatement)
      .then(res => res.json())
      .then(data => setAllStatement(data))
  }, [activeStatement, showQuantity]);

  useEffect(() => {
    const url = `https://powerful-basin-90376.herokuapp.com/statementCount`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const perTransaction = Math.ceil(count / 10);
        setStatementCount(perTransaction);
      })
  }, []);



  // conditionally onclick function in send money and add money---------------
  const trueFunction = () => {
    setSeparateData(true);
    setAllTransActionData(false);
  }
  const falseFunction = () => {
    setSeparateData(false);
    setAllTransActionData(false);
  }

  const viewAll = () => {
    setAllTransActionData(true);
  }




  return (
    <div className="card shadow-xl bg-white grid lg:col-span-2 p-10 ">
      <div className='flex justify-center items-center lg:gap-7 gap-2  button-area'>
        {/* <span className='hover:bg-yellow-300'>All</span> */}
        <span onClick={falseFunction} className='btn hover:bg-violet-700 btn-outline btn-sm'>Send Money</span>
        <span onClick={trueFunction} className='btn hover:bg-violet-700 btn-outline btn-sm'>Received Money</span>
        <span onClick={viewAll} className='btn hover:bg-violet-700 btn-outline btn-sm'>View All</span>

      </div>
      
      <div  className={ allTransActionData === false ?  'showSendAndReceivedMoney' : 'hideSendAndReceivedMoney'}>
        {separateData === false ?

          <div className='moneySection'>


            <ol className=''>
              <ol className='flex items-center justify-between border-b mb-3'>
                <li className='px-5'>Tr.No</li>
                <li className='px-5'>Sent Number</li>
                <li className='px-5'>Send Money</li>
                <li className='px-5'>Date</li>
              </ol>
              {
                sendMoney.map((listSendMoney, index) =>
                  <ol className=' text-right flex justify-between items-center  border-b mt-3 mb-3' key={listSendMoney._id}>
                    <li className='px-5 text-right'>{index + 1} </li>
                    <li className='px-8 text-right'>{listSendMoney.sendNumber}</li>
                    <li className='px-3 text-right'>{listSendMoney.sendAmount}</li>
                    <li className='px-5 text-right'>22.08.2022</li>
                  </ol>
                )
              }
            </ol>


          </div>
          :
          <div className='moneySection'>
            <ol className=''>
              <ol className='flex items-center justify-between border-b mb-3'>
                <li className='px-5'>Tr.No</li>
                <li className='px-5'>Received Num</li>
                <li className='px-5'>received Money</li>
                <li className='px-5'>Date</li>
              </ol>
              {
                AddedMoney.map((listAddMoney, index) =>
                  <ol className=' text-right flex justify-between items-center  border-b mt-3 mb-3' key={listAddMoney._id}>
                    <li className='px-5 text-right'>{index + 1} </li>
                    <li className='px-8 text-right'>{listAddMoney.accountNumber}</li>
                    <li className='px-3 text-right'>{listAddMoney.transferredAmount}</li>
                    <li className='px-5 text-right'>22.08.2022</li>
                  </ol>
                )
              }
            </ol>
          </div>
        }
      </div>

      <div className={ allTransActionData === true ?  'showSendAndReceivedMoney' : 'hideSendAndReceivedMoney'}>
        {

            <div className='moneySection'>
              <ol className=''>
                <ol className='flex items-center justify-between border-b mb-3'>
                  <li className='px-5'>Tr.No</li>
                  <li className='px-5'> Number</li>
                  <li className='px-5'>Amount Money</li>
                  <li className='px-5'>Date</li>
                </ol>
                {
                  allStatement.map((listMoney, index) =>
                    <ol className=' text-right flex justify-between items-center  border-b mt-3 mb-3' key={listMoney._id}>

                      <li className='px-5 text-right'>{index + 1} </li>
                      <li className='px-8 text-right'>{listMoney.accountNumber}</li>
                      <li className='px-3 text-right'>{listMoney.transactionType}</li>
                      <li className='px-5 text-right'>22.08.2022</li>
                    </ol>
                  )
                }
              </ol>
            </div>
        }
      </div>


      <div className='lg:w-20 w-10 m-auto flex justify-center items-center lg:gap-2 mt-3 pagination'>
        {
          [...Array(statementCount).keys()].map(number => <button
            onClick={() => setActiveStatement(number)}

            className={activeStatement === number ? 'pagination selected btn btn-outline' : 'btn btn-outline btn-sm'}
          >{number + 1}</button>)
        }

        <select className='m-0 p-0' onChange={e => setShowQuantity(e.target.value)}>
          <option value="5" selected>5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <h1 className='text-sm '>Show Qnt</h1>

      </div>
    </div>
  );
};

export default ViewAllTransaction;