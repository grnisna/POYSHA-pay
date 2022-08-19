import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input';
// import PhoneInput from 'react-phone-number-input'
import BgSendMoney from '../../../Assets/Send Money/background2.jpg';
import DBUserData from '../../Hooks/UserData/DBUserData';


const SendMoney = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [value, setValue] = useState();

    const [userData, setUserData] = DBUserData([]);

    console.log(userData);


    const onSubmit = (data) => {
        console.log(data);
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
<<<<<<< HEAD
                setValue('');



=======

>>>>>>> dbba14e1cd1336c29585c42c7df62d7a3164735a
            })
    };

    return (

        <div className='flex flex-col items-center justify-center p-5 bg-slate-200'

            style={{
                // backgroundImage: `url(${BgSendMoney})`,
                // backgroundSize: 'cover',

                backgroundColor: '#f8f9fa'

            }}
        >
            <div className='flex items-center justify-center rounded-md '
            // style={{
            //   backgroundImage: `url(${BgSendMoney})`,
            //   backgroundSize: 'cover',


            // }}
            >
                <form className='lg:w-96 md:w-96 sm:w-96 shadow-xl  bg-clip-padding bg-slate-200 text-secondary  backdrop-blur-md py-10 px-8 rounded-md' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-center text-2xl'>Send Money</h2>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">From To</span>
                        </label>
                        <PhoneInput
                            className='input'
                            placeholder="Enter phone number"
                            value="+8801629504411"
                            readOnly
                            {...register("senderNumber")}
                        />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text ">Send To</span>
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
                                }
                            })}
                        />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Amount</span>
                        </label>
                        <input
                            placeholder="Sending amount $"
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
                            <span class="label-text ">Reference</span>
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
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: 'Only Number is allowed'
                                }
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
    );
};

export default SendMoney;