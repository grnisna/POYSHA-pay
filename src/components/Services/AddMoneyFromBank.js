import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import BankNames from './BankNames';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DBUserData from '../Hooks/UserData/DBUserData';
import swal from 'sweetalert';

const AddMoneyFromBank = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [bName, setBName] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [banksNames, setBanksNames] = BankNames()
    const [user, loading] = useAuthState(auth);

    const [userData, setUserData] = DBUserData();

    console.log(userData.phone)



    useEffect(() => {
        fetch('banksName.json')
            .then(res => res.json())
            .then(data => {
                setBName(data)
            })
    }, []);





    const handelAddMoney = event => {
        event.preventDefault();
        const bankNameSelect = event.target.bankNameSelect.value;
        console.log(transactions);



        const addMoney = {
            accountName: user.displayName,
            AccountNumber: userData.phone,
            bankNameSelect,
            bankAccountNumber: event.target.bankAccountNumber.value,
            transferredAmount: event.target.transferredAmount.value,
            reference: event.target.reference.value,
            transactionType: 'addMoney'
        }

        fetch('http://localhost:5000/addMoney', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addMoney)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTransactions(null)
                swal({
                    icon: "success",
                    text: "Deposit Successful"
                });
            })
        fetch('http://localhost:5000/transaction_history', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addMoney)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTransactions(null)
            })

    }

    return (



        <div className='bg-slate-400'>


            <div class="card mx-auto w-96 bg-white mt-5  shadow-2xl">

                <h2 className='text-2xl text-center mb-2 font-bold mt-5'>Add Money from Bank</h2>
                <form className='mx-auto w-full -mt-1  px-2'
                    onSubmit={handelAddMoney}>
                    <input type="text"
                        name='name' value={user?.displayName || ''}
                        className='input input-bordered w-full  font-bold'
                    // {...register("AccountHolderName")}
                    />
                    <input type="number"
                        name='name'
                        value={userData?.phone}
                        className='input input-bordered mt-5 mx-auto w-full px-2 font-bold'
                    // {...register("AccountNumber")}
                    />

                    <select
                        name='bankNameSelect'
                        class="select w-full mt-5 mx-auto  px-2"
                    >
                        {
                            bName.map((b, index) => <option
                                className='border-8'
                                key={index}
                                value={b.name}
                            >{b.name}</option>)
                        }

                    </select>


                    <input type="Number"
                        name='bankAccountNumber'
                        placeholder='Enter Bank Account Number'
                        className='input input-bordered w-full mt-5 mx-auto'
                    // {...register("bankAccountNumber")}
                    />

                    <input type="Number"
                        name='transferredAmount'
                        placeholder='Enter your Amount'
                        className='input input-bordered mt-5 w-full  mx-auto'
                    // {...register("addMoneyAmount", {
                    //     required: {
                    //         value: true,
                    //         message: 'Please Type Your Amount'
                    //     },
                    //     pattern: {
                    //         value: /^[0-9]+$/,
                    //         message: 'Provide Valid Amount'
                    //     }
                    // })}
                    />

                    <input type="text"
                        name='reference'
                        placeholder='Enter Reference'
                        className='input input-bordered mt-5 w-full  mx-auto'
                    // {...register("Reference", {
                    //     required: {
                    //         value: true,
                    //         message: 'Reference is required'
                    //     }
                    // })}

                    />

                    <input type="submit" value="Add Money" className="btn btn-secondary mt-5 w-full  mx-auto" />

                </form>

            </div>

        </div>

    );
};

export default AddMoneyFromBank;