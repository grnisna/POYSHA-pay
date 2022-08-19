import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Statement from '../../../Hooks/Statement/Statement';
import './ViewAllTransaction.css';



const ViewAllTransaction = () => {
  const [allStatement] = Statement();


  const [AddedMoney, setAddedMoney] = useState([]);
  // const [number, setNumber] = useState(0);
  const [sendMoney, setSendMoney] = useState([]);
  const [separateData, setSeparateData] = useState(false);
  const [allTransActionData, setAllTransActionData] = useState(false);
  const [viewAllTransaction, setViewAllTransaction] = useState([]);



  // get all Add money info
  // --------------------------------
  useEffect(() => {
    const url = "https://powerful-basin-90376.herokuapp.com/addMoneyTransactions"
    fetch(url)
      .then(res => res.json())
      .then(data => setAddedMoney(data))
  }, []);



  // get all send money info 
  // --------------------------
  useEffect(() => {
    const url = "https://powerful-basin-90376.herokuapp.com/sendMoney"
    fetch(url)
      .then(res => res.json())
      .then(data => setSendMoney(data))
  }, []);


  // View all transAction about add money and send money ------------------
  //---------------------------------------------------------
  const urls = ["https://powerful-basin-90376.herokuapp.com/addMoneyTransactions", "https://powerful-basin-90376.herokuapp.com/sendMoney"];

  const headers = {
    "X-Api-Key": "the-api-key-00",
  };

  function dualApiCall() {

    const promises = urls.map(url => axios.get(url, { headers }));

    Promise.all(promises).then(responses => {
      let data = [];

      responses.forEach(response => {
        data = data.concat(response.data);
      });

      setViewAllTransaction(data);
    });
  }
  // once time call a function 
  useEffect(() => {
    dualApiCall();
  }, [])



  // conditionally onclick function in send money and add money
  const trueFunction = () => {
    setSeparateData(true);
  }
  const falseFunction = () => {
    setSeparateData(false);
  }

  const viewAll = () => {
    setAllTransActionData(true);
  }

  // const incrementCount = () => {
  //     setNumber(number + 1);
  // };



  return (
    <div class="card shadow-xl bg-white grid lg:col-span-2 p-10 ">
      <div className='flex justify-center items-center lg:gap-7 gap-2  button-area'>
        {/* <span className='hover:bg-yellow-300'>All</span> */}
        <span onClick={falseFunction} className='btn hover:bg-violet-700 btn-outline btn-sm'>Send Money</span>
        <span onClick={trueFunction} className='btn hover:bg-violet-700 btn-outline btn-sm'>Received Money</span>
        <span onClick={viewAll} className='btn hover:bg-violet-700 btn-outline btn-sm'>View All</span>

      </div>

      <div className='table-div'>

        {allTransActionData === true ?

          <table className="viewAllTable  table-zebra shadow-xl">

            <div className='lg:flex justify-evenly'>

              <div>
                {/*================ table heading ================ */}
                <thead className='bg-red-200 table-head'>
                  <tr>
                    <th>No.</th>
                    <th>  Receiver Number</th>
                    <th>Amount</th>
                  </tr>
                </thead>

                <tbody className='text-center'>
                  {
                    AddedMoney.map((viewAddMoney, index) =>
                      <tr className=' border bg-green-300' key={viewAddMoney._id}>
                        <td>{index}</td>
                        <td >{viewAddMoney.accountNumber}</td>
                        <td >{viewAddMoney.transferredAmount}</td>

                      </tr>
                    ).reverse()
                  }
                </tbody>

              </div>

              <div className='mt-7 lg:mt-0'>

                {/*================ table heading ================ */}
                <thead className='bg-red-200 table-head'>
                  <tr>
                    <th>No.</th>
                    <th>Send Number</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody className='text-center'>

                  {
                    sendMoney.map((viewAllSendMoney, index) =>
                      <tr className=' border bg-cyan-200' key={viewAllSendMoney._id}>
                        <td>{index}</td>
                        <td >{viewAllSendMoney.sendNumber}</td>
                        <td >{viewAllSendMoney.sendAmount}</td>
                      </tr>
                    ).reverse()
                  }
                </tbody>

              </div>

            </div>


          </table>

          :


          <table className="viewAllTable  table-zebra shadow-xl">

            {/*================ table heading ================ */}
            <thead className='bg-red-200 table-head'>
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
                  AddedMoney.reverse().map((viewAddMoney, index) =>
                    <tr className=' border bg-green-300' key={viewAddMoney._id}>
                      <td>{index}</td>
                      <td >{viewAddMoney.accountNumber}</td>
                      <td >{viewAddMoney.transferredAmount}</td>
                    </tr>
                  ).reverse()
                }
              </tbody>

              :
              <tbody className='text-center'>

                {
                  sendMoney.map((viewAllSendMoney, index) =>
                    <tr className=' border bg-cyan-200' key={viewAllSendMoney._id}>
                      <td>{index}</td>
                      <td >{viewAllSendMoney.sendNumber}</td>
                      <td >{viewAllSendMoney.sendAmount}</td>
                    </tr>
                  ).reverse()
                }
              </tbody>

            }





          </table>
        }
      </div>
      <div className='w-20 m-auto flex justify-center items-center gap-2 mt-3'>
        {
          [...Array(allStatement).keys()].map(number => <button className='btn btn-outline'>{number + 1}</button>)
        }
      </div>
    </div >
  );
};

export default ViewAllTransaction;