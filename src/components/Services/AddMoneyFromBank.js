import React, { useEffect } from 'react';
import { useState } from 'react';

import BankNames from './BankNames';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DBUserData from '../Hooks/UserData/DBUserData';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddMoneyFromBank = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [bName, setBName] = useState([]);
    const [transactions, setTransactions] = useState([]);
    // const [banksNames, setBanksNames] = BankNames()
    const [user, loading] = useAuthState(auth);

    const [userData, setUserData] = DBUserData();

    const banks = userData?.addBankAccount;
    const id = userData?._id;





    const onSubmit = (data) => {
        console.log(data);
        const url = `http://localhost:4000/addMoney/${id}`;
        axios.put(url, data)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    swal({
                        icon: "success",
                        text: "Deposit Successful"
                    });
                }
            })
            .catch(error => {
                toast.error(`${error?.response?.data?.error}`)
            });

        // fetch(`http://localhost:4000/addMoney/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setTransactions()
        //         swal({
        //             icon: "success",
        //             text: "Deposit Successful"
        //         });
        //     })

    }

    return (



        <div className=''>

            <form className='card mx-auto bg-white shadow-2xl p-10'
                onSubmit={handleSubmit(onSubmit)}>
                <h1 className='lg:text-4xl text-lg font-bold text-secondary pb-10'>Add Money from bank</h1>
                <div className="infut-filed grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <div class="label  grid grid-row-3 ">
                        <span>Select Bank Name</span>
                        <select class="select w-full max-w-xs px-2 border-primary [1px]"
                            {...register('bankName')}>
                            <option value="Bank Asaia" className='w-full mx-auto bg-secondary'>BankAsaia Bangladesh</option>
                            {/* {
                                bName.map((b, index) => <option
                                    key={index}
                                    value={b.name}
                                >{b.name}</option>)
                            } */}
                        </select>
                    </div>

                    <div class="label  grid grid-row-3">
                        <span> Bank Account Number</span>
                        <input type="Number"
                            required
                            name='bankAccountNumber'
                            minLength='14'
                            placeholder='Enter Bank Account Number'
                            className='input  border-primary [1px] w-full  mx-auto'
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
                    </div>



                    <div class="label  grid grid-row-3">
                        <span>Enter Amount</span>
                        <input type="Number"
                            required
                            placeholder='Enter your Amount'
                            className='input border-primary [1px]  w-full  mx-auto'
                            // {...register('transferredAmount')}
                            {...register('addAmount', {
                                min: {
                                    value: 50,
                                    message: 'Minimum Transaction Amount 500'
                                },
                                max: {
                                    value: 50000,
                                    message: 'Maximum Transaction Amount 5000'
                                }
                            })}
                        />
                        <label>
                            {errors.transferredAmount?.type === 'min' && <span class="label-text-alt text-red-500">{errors.transferredAmount.message}</span>}
                            {errors.transferredAmount?.type === 'max' && <span class="label-text-alt text-red-500">{errors.transferredAmount.message}</span>}
                        </label>
                    </div>


                    <div class="label  grid grid-row-2">
                        <span>Write Reference</span>
                        <input type="text"
                            required
                            name='reference'
                            placeholder='Enter Reference'
                            className='input border-primary [1px] w-full mx-auto'
                            {...register('Reference')}
                        />
                    </div>

                </div>
                <input type="submit"
                    className='btn btn-secondary mt-5 w-full mx-auto text-white hover:bg-primary border-0'
                    value="Add money" />
            </form>



        </div>

    );
};

export default AddMoneyFromBank;