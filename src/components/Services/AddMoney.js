import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AddMoneyCard from './AddMoneyCard';
import AddMoneyModal from './AddMoneyModal';
import PhoneInput from 'react-phone-number-input'
import { useAuthState, } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddMoney = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [addMoneys, setAddMoneys] = useState([]);
    const [banks, setBanks] = useState(null)
    const [value, setValue] = useState();
    const [user, loading] = useAuthState(auth);
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])

    // console.log(user.displayName);

    //filter

    // const recentUser = users.filter(u => u.name.includes(user))
    // console.log(recentUser);

    // useEffect(() => {
    //     fetch('addMoneyInfo.json')
    //         .then(res => res.json())
    //         .then(data => setAddMoneys(data))
    // }, [])

    const onSubmit = (data) => {
        console.log(data)
        const url = `https://powerful-basin-90376.herokuapp.com/addMoney`;
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

    }

    return (
        <div className='bg-black mb-20'>
            <h1 className='text-accent text-center text-3xl font-bold pt-10 pb-10'>Your Courant Balance is:  <span className='text-orange-700'> $1000.54</span> </h1>
            <h1 className='text-primary text-center text-4xl uppercase font-bold pb-10'>Add Money in wallet from bank</h1>
            {/* <>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-10 mb-10'>
                    {
                        addMoneys.map(addMoney => <AddMoneyCard
                            key={addMoney._id}
                            addMoney={addMoney}
                            setBanks={setBanks}
                        ></AddMoneyCard>)
                    }

                </div>
                {banks && <AddMoneyModal
                    banks={banks}
                    setBanks={setBanks}
                ></AddMoneyModal>}
            </> */}

            <form className=' w-96 mx-auto shadow-xl  bg-clip-padding backdrop-filter bg-base-300 bg-opacity-10 backdrop-blur-md py-10 px-8 rounded-md' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-center text-white text-2xl'>Add Money</h2>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text text-white">Account Name</span>
                    </label>
                    <input class="input input-bordered"
                        value={user.displayName}
                        disabled
                        {...register("myAccountNumber")}
                    />


                    <label class="label">
                        <span class="label-text text-white"> My Account Number</span>
                    </label>
                    <PhoneInput
                        className='input'
                        placeholder="Enter phone number"
                        value="+8801629504411"
                        readOnly
                        {...register("bankAccountNumber")}
                    />


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
                        {...register("addNumber", {
                            required: {
                                value: true,
                                message: 'Phone Number is required'
                            }
                        })}
                    />




                    <input
                        placeholder="Sending amount $"
                        class="input input-bordered"
                        {...register("addAmount", {
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
    );
};

export default AddMoney;