import React from 'react';
import { useForm } from "react-hook-form";
import Button from '../../SharedCompo/Button';
import { toast } from 'react-toastify';

const SendMoney = () => {
    const { register, formState: { errors }, reset , handleSubmit } = useForm();    


    const onSubmit = (data) => {
        const url = `https://powerful-basin-90376.herokuapp.com/sendMoney`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('send money successfully')
                reset();
                
            })
    };



    return (
        <div className=''>
            <h2 className='text-center text-2xl'>Send Money Amount</h2>
            <div className='flex items-center justify-center'>
                <form className='bg-base-200 shadow-2xl py-2 px-2 rounded' onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-96">
                        <label class="label">
                            <span class="label-text">Your available balance</span>
                        </label>
                        <input id='balance' type=
                            "number" placeholder="Your available balance"
                            class="input input-bordered w-96"
                            {...register("balance", {
                                required: {
                                    value: true,
                                    // message: 'Amount is reqiured'
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    // message: 'Provide valid Amount'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.yourBalance?.type === 'required' && <span class="label-text-alt text-red-500">{errors.yourBalance.message}</span>}
                            {errors.yourBalance?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.yourBalance.message}</span>}

                        </label>
                    </div>
                    <div class="form-control w-96">
                        <label class="label">
                            <span class="label-text">Send Amount</span>
                        </label>
                        <input id='sendAmount' type=
                            "number" placeholder="Sending amount $"
                            class="input input-bordered w-96"
                            {...register("sendAmount", {
                                // required: {
                                //     value: true,
                                //     message: 'Sending amount is reqiured'
                                // },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: 'Provide valid sending amount'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.sendAmount?.type === 'required' && <span class="label-text-alt text-red-500">{errors.sendAmount.message}</span>}
                            {errors.sendAmount?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.sendAmount.message}</span>}

                        </label>
                    </div>
                    <div class="form-control w-96">
                        <label class="label">
                            <span class="label-text">Mobile Number</span>
                        </label>
                        <input id='sendNumber' type=
                            "number" placeholder="Sending number"
                            class="input input-bordered w-96"
                            {...register("sendNumber", {
                                // required: {
                                //     value: true,
                                //     message: 'Sending number is reqiured'
                                // },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: 'Provide valid sending number'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.sendNumber?.type === 'required' && <span class="label-text-alt text-red-500">{errors.sendNumber.message}</span>}
                            {errors.sendNumber?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.sendNumber.message}</span>}

                        </label>
                    </div>
                    <div class="form-control w-96">
                        <label class="label">
                            <span class="label-text">Refference</span>
                        </label>
                        <textarea id='refference' type=
                            "text" placeholder="Refference"
                            class="input input-bordered w-96"
                            {...register("refference", {
                                // required: {
                                //     value: true,
                                //     message: 'Refference is reqiured'
                                // },
                                // pattern: {
                                //     value: /[A-Za-z]{10}/,
                                //     message: 'Provide valid Refference'
                                // }
                            })}
                        />
                        <label class="label">
                            {errors.refference?.type === 'required' && <span class="label-text-alt text-red-500">{errors.refference.message}</span>}
                            {errors.refference?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.refference.message}</span>}

                        </label>
                    </div>
                    {/* <input type="submit" /> */}

                    <Button id="restBalance" className='w-96'><input type="submit" /></Button>

                </form>
            </div>
        </div>
    );
};

export default SendMoney;