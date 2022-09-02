import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BankNames from './BankNames';

const AddMoney = () => {
  //const [banksNames, setBanksNames] = BankNames();
  //console.log(banksNames)



  return (
    <div className="grid justify-center justify-items-center lg:py-20 p-4 ">
      <div className='grid bg-white items-center lg:py-20 p-4'>
        <h1 className='text-primary text-center lg:text-4xl text-lg  font-bold pb-10'>Transfer & Add Money</h1>
        <div className='grid w-full mx-auto p-10 rounded-lg sm:grid-cols-1 lg:grid-cols-3'>
          <Link to='/dashboard/addMoneyFromBank'>
            <button class="btn-xl bg-white  rounded-lg">
              <div class="card-body">
                <h2 class="card-title">Add from Bank</h2>
              </div>
            </button>
          </Link>
          <Link to='/dashboard/BankTransfer'>
            <button class="btn-xl bg-white rounded-lg">
              <div class="card-body">
                <h2 class="card-title">Add from card</h2>
              </div>
            </button>
          </Link>
          <Link to="">
            <button class="btn-xl bg-white rounded-lg">
              <div class="card-body">
                <h2 class="card-title">Add from Paypal</h2>

              </div>
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AddMoney;