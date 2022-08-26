import React, { useEffect } from 'react';
import { useState } from 'react';

import BankNames from './BankNames';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DBUserData from '../Hooks/UserData/DBUserData';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';

const AddMoneyFromBank = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [bName, setBName] = useState([]);
    const [transactions, setTransactions] = useState([]);
    // const [banksNames, setBanksNames] = BankNames()
    const [user, loading] = useAuthState(auth);

    const [userData, setUserData] = DBUserData();

    //console.log(userData.phone)



    useEffect(() => {
        fetch('banksName.json')
            .then(res => res.json())
            .then(data => {
                setBName(data)
                //console.log(data);
            })
    }, []);


    const onSubmit = (data) => {

        console.log(data)
        fetch('https://powerful-basin-90376.herokuapp.com/addMoney', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTransactions()
                swal({
                    icon: "success",
                    text: "Deposit Successful"
                });
            })
        fetch('https://powerful-basin-90376.herokuapp.com/transaction_history', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset()

            })
    }

    return (



        <div className='bg-slate-400'>

            <form className='card mx-auto w-96 bg-white mt-5 p-5 shadow-2xl'
                onSubmit={handleSubmit(onSubmit)}>
                <h1 className='card-title m-5 uppercase'>Add Money from bank</h1>

                <label class="label">
                    <span class=" text-xs  -mb-2 mt-2  ">Poyha-Pay Account Name</span>
                </label>
                <input type="text"
                    name='name' value={user?.displayName}
                    className='input input-bordered w-full  font-bold'
                    {...register('AccountHolder')}
                />
                <label class="label">
                    <span class="  text-xs  -mb-2 mt-2">Poyha-Pay Account Number</span>
                </label>
                <input type="number"
                    name='name'
                    value={userData?.phone}
                    className='input input-bordered mt-5 mx-auto w-full px-2 font-bold'
                    {...register('Receiver')}
                />
                <label class="label">
                    <span class="  text-xs  -mb-2 mt-2">Select Your Bank Name</span>
                </label>
                <select class="select w-full  mx-auto  px-2"
                    {...register('BankName')}>
                    {
                        bName.map((b, index) => <option
                            key={index}
                            value={b.name}
                        >{b.name}</option>)
                    }
                </select>
                <label class="label">
                    <span class="  text-xs -mb-2 mt-2">Enter Your Bank Account Number</span>
                </label>
                <input type="Number"
                    required
                    name='bankAccountNumber'
                    minLength='14'
                    placeholder='Enter Bank Account Number'
                    className='input input-bordered w-full  mx-auto'
                    {...register("bankAccountNumber", {
                        minLength: {
                            value: 12,
                            message: 'Please Type Minimum  12 Digit  Account Number '
                        }, maxLength: {
                            value: 14,
                            message: 'Please Type Maximum  14 Digit  Account Number'
                        }
                    })}
                />
                <label>
                    {errors.bankAccountNumber?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.bankAccountNumber.message}</span>}
                    {errors.bankAccountNumber?.type === 'maxLength' && <span class="label-text-alt text-red-500">{errors.bankAccountNumber.message}</span>}
                </label>


                <label class="label">
                    <span class="  text-xs  -mb-2 mt-2">Enter Your Amount</span>
                </label>
                <input type="Number"
                    required
                    name='transferredAmount'
                    placeholder='Enter your Amount'
                    className='input input-bordered  w-full  mx-auto'
                    // {...register('transferredAmount')}
                    {...register('transferredAmount', {
                        min: {
                            value: 500,
                            message: 'Minimum Transaction Amount 500'
                        },
                        max: {
                            value: 50000,
                            message: 'Maximum Transaction Amount 5000'
                        }
                    })}
                />
                <label>
                    {errors.transferredAmount?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.transferredAmount.message}</span>}
                    {errors.transferredAmount?.type === 'maxLength' && <span class="label-text-alt text-red-500">{errors.transferredAmount.message}</span>}
                </label>
                <label class="label">
                    <span class="  text-xs  -mb-2 mt-2">Write Reference</span>
                </label>
                <input type="text"
                    required
                    name='reference'
                    placeholder='Enter Reference'
                    className='input input-bordered  w-full mx-auto'
                    {...register('reference')}
                />
                <input type="text" name="" className='text-white input-ghost' id="" value={'addMoney'} readOnly
                    {...register('transactionType')} />
                <input type="submit"
                    className='btn btn-secondary mt-5 w-full mx-auto'
                    value="Add money" />
            </form>



        </div>

    );
};

export default AddMoneyFromBank;