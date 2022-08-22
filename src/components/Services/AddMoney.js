import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BankNames from './BankNames';

const AddMoney = () => {
    //const [banksNames, setBanksNames] = BankNames();
    //console.log(banksNames)



    return (
        <div className='bg-slate-200 mb-20'>
            <h1 className='text-accent text-center text-3xl font-bold pt-10 pb-10'>Your Courant Balance is:  <span className='text-orange-700'> $1000.54</span> </h1>
            <h1 className='text-primary text-center text-4xl uppercase font-bold pb-10'>Add Money in wallet from bank</h1>



            <div className='grid w-full mx-auto p-10 rounded-lg sm:grid-cols-1 lg:grid-cols-3'>



                <Link to='/addMoneyFromBank'>
                    <button class="btn-xl bg-white  rounded-lg">
                        <div class="card-body">
                            <h2 class="card-title">Add from Bank</h2>
                        </div>
                    </button>
                </Link>
                <Link to='/BankTransfer'>
                    <button class="btn-xl bg-white rounded-lg">
                        <div class="card-body">
                            <h2 class="card-title">Add from card</h2>
                        </div>
                    </button>
                </Link>
                <Link to="/addFromPaypal">
                    <button class="btn-xl bg-white rounded-lg">
                        <div class="card-body">
                            <h2 class="card-title">Add from Paypal</h2>

                        </div>
                    </button>
                </Link>
            </div>




        </div>
    );
};

export default AddMoney;