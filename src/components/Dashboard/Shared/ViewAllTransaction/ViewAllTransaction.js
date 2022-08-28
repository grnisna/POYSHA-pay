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

  useEffect(() => {
    const url = `http://localhost:4000/transactionStatement?activeNumber=${activeStatement}&showQuantity=${showQuantity}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setAllStatement(data);
      })
  }, [activeStatement, showQuantity]);

  useEffect(() => {
    const url = `http://localhost:4000/statementCount`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const perTransaction = Math.ceil(count / 3);
        setStatementCount(perTransaction);
      })
  }, []);





  useEffect(() => {
    const addMoneyUrl = `http://localhost:4000/addMoneyTransactions?activeNumber=${activeStatement}&showQuantity=${showQuantity}`

    fetch(addMoneyUrl)
      .then(res => res.json())
      .then(data => setAddedMoney(data))
  }, [activeStatement, showQuantity]);


  useEffect(() => {
    const url = `http://localhost:4000/addMoneyStatementCount`;
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
    const sendMoneyUrl = `http://localhost:4000/sendMoney?activeNumber=${activeStatement}&showQuantity=${showQuantity}`

    fetch(sendMoneyUrl)
      .then(res => res.json())
      .then(data => setSendMoney(data))
  }, [activeStatement, showQuantity]);



  useEffect(() => {
    const url = `http://localhost:4000/sendMoneyStatementCount`;
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

      <div className={allTransActionData === false ? 'showSendAndReceivedMoney' : 'hideSendAndReceivedMoney'}>
        {separateData === false ?

          <div className='moneySection'>


            <ol className='fontSize text-bold'>
              <ol className='flex items-center justify-between border-b mb-3'>
                <li className='px-5 font-bold	'>Tr.No</li>
                <li className='px-5 font-bold	'>Sent Number</li>
                <li className='px-5 font-bold	'>Sent Money</li>
                <li className='px-5 font-bold	'>Date</li>
              </ol>
              {
                sendMoney.map((listSendMoney, index) =>
                  <ol className=' text-right flex justify-between items-center  border-b mt-3 mb-3' key={listSendMoney._id}>
                    <li className='px-5 text-right'>{index + 1} </li>
                    <li className='px-8 text-right'>{listSendMoney.receiverNumber}</li>
                    <li className='px-3 text-right'>{listSendMoney.sendAmount}</li>
                    <li className='px-5 text-right'>22.08.2022</li>
                  </ol>
                )
              }
            </ol>


          </div>
          :
          <div className='moneySection'>
            <ol className='fontSize'>
              <ol className='flex items-center justify-between border-b mb-3'>
                <li className='px-5 font-bold	'>Tr.No</li>
                <li className='px-5 font-bold	'>Received Num</li>
                <li className='px-5 font-bold	'>received Money</li>
                <li className='px-5 font-bold	'>Date</li>
              </ol>
              {
                AddedMoney.map((listAddMoney, index) =>
                  <ol className=' text-right flex justify-between items-center  border-b mt-3 mb-3' key={listAddMoney._id}>
                    <li className='px-5 text-right'>{index + 1} </li>
                    <li className='px-5 text-right'>{listAddMoney.accountHolderNumber}</li>
                    <li className='px-5 text-right'>{listAddMoney.transferredAmount}</li>
                    <li className='px-5 text-right'>22.08.2022</li>
                  </ol>
                )
              }
            </ol>
          </div>
        }
      </div>

      <div className={allTransActionData === true ? 'showSendAndReceivedMoney' : 'hideSendAndReceivedMoney'}>
        {

          <div className='moneySection'>
            <ol className='fontSizeAllStatement'>
              <ol className='flex items-center justify-between border-b mb-3'>
                <li className='px-2 font-bold	'>Tr.No</li>
                <li className=' font-bold	'> Number</li>
                <li className=' font-bold	'> Type</li>
                <li className=' font-bold	'>Amount Money</li>
                <li className=' font-bold	'>Date</li>
              </ol>
              {
                allStatement.map((listMoney, index) =>
                  <ol className=' text-right flex justify-between items-center  border-b mt-3 mb-3' key={listMoney._id}>

                    <li className=' text-left p-0 m-0 '>{index + 1} </li>
                    <li className={listMoney.transactionType === 'addMoney' ? 'addMoneyColor text-left text-left p-0 mx-[-30px] ' : 'sendMoneyColor  text-left p-0 mx-[-30px]'}>{listMoney.transactionType === 'addMoney' ? listMoney.bankAccountNumber : listMoney.receiverNumber}</li>
                    <li className={listMoney.transactionType === 'addMoney' ? 'addMoneyColor text-left p-0 mx-[-40px] ' : 'sendMoneyColor  text-left p-0 mx-[-40px] '}>{listMoney.transactionType}</li>
                    <li className={listMoney.transactionType === 'addMoney' ? 'addMoneyColor  text-left p-0 m-0' : 'sendMoneyColor  text-left p-0 m-0'}>{listMoney.transactionType === 'addMoney' ? listMoney.transferredAmount : listMoney.sendAmount}</li>
                    <li className=' text-left p-0 m-0 '>22.08.2022</li>

                  </ol>
                ).reverse()
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