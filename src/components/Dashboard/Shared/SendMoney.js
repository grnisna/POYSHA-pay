import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import PhoneInput from 'react-phone-number-input'
import BgSendMoney from '../../../Assets/Send Money/background2.jpg';
import Button from '../../SharedCompo/Button';




const SendMoney = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [value, setValue] = useState();
    const [user] = useAuthState(auth);

    const onSubmit = (sending) => {
        console.log(sending);
        const onSubmit = (data) => {

            const url = `https://powerful-basin-90376.herokuapp.com/sendMoney`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(sending)
            })
                .then(res => res.json())
                .then(result => {
                    toast.success('send money successfully')
                    reset();

                    setValue('');

                })
        }
    };

    return (

        <div className='flex flex-col items-center justify-center p-5'
            style={{
                // backgroundImage: `url(${BgSendMoney})`,
                // backgroundSize: 'cover',
                backgroundColor: '#f8f9fa'
            }}
        >

            <div className='flex items-center justify-center'>
                {/* <form className='lg:w-96 md:w-96 sm:w-96 shadow-xl bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur-md py-10 px-8 rounded-md' onSubmit={handleSubmit(onSubmit)}> */}


                <div className='flex items-center justify-center rounded-md'
                    style={{
                        backgroundImage: `url(${BgSendMoney})`,
                        backgroundSize: 'cover',


                    }}
                >
                    <form className='lg:w-96 md:w-96 sm:w-96 shadow-xl  bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur-md py-10 px-8 rounded-md' onSubmit={handleSubmit(onSubmit)}>

                        <h2 className='text-center text-white text-2xl'>Send Money</h2>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-white">Your available balance</span>
                            </label>
                            <input
                                className='input'
                                disabled
                                value={user?.balance}
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-white">From</span>
                            </label>
                            <PhoneInput
                                className='input'
                                disabled
                                // placeholder="Enter phone number"
                                value={user?.phone}
                                readOnly
                                {...register("senderNumber")}
                            />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-white">Send To</span>
                            </label>
                            <PhoneInput
                                className='input'
                                placeholder="Enter phone number"
                                international
                                defaultCountry="BD"
                                value={value}
                                onChange={setValue}
                                {...register("receiverNumber", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is required'
                                    },
                                    pattern: {
                                        value: /^([+]\d{3}[ ])?\d{4}[ ]?\d{6}$/,
                                        message: 'Phone Number is invalid'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.receiverNumber?.type === 'required' && <span class="label-text-alt text-red-500">{errors.receiverNumber.message}</span>}
                                {errors.receiverNumber?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.receiverNumber.message}</span>}

                            </label>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-white">Amount</span>
                            </label>
                            <input
                                placeholder="Sending amount $"
                                name='sendAmount'
                                class="input input-bordered"
                                {...register("sendAmount", {
                                    required: {
                                        value: true,
                                        message: 'Please Type Your Amount'
                                    },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Provide Valid Amount'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.sendAmount?.type === 'required' && <span class="label-text-alt text-red-500">{errors.sendAmount.message}</span>}
                                {errors.sendAmount?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.sendAmount.message}</span>}

                            </label>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-white">Reference</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Write Something"
                                className="input input-bordered"
                                {...register("Reference", {
                                    required: {
                                        value: true,
                                        message: 'Reference is required'
                                    },
                                    // pattern: {
                                    //     value: /^[0-9]+$/,
                                    //     message: 'Only Number is allowed'
                                    // }
                                })}
                            />
                            <label class="label">
                                {errors.Reference?.type === 'required' && <span class="label-text-alt text-red-500">{errors.Reference.message}</span>}
                                {errors.Reference?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.Reference.message}</span>}

                            </label>
                        </div>
                        <input className='input input-bordered w-full cursor-pointer bg-violet-400' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SendMoney;