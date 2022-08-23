import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import OthersAccountHooks from '../../Hooks/OthersAccountsHooks/OthersAccountHooks';
import './SettingDemo.css';

const SettingDemo = () => {
    const [othersAccount] = OthersAccountHooks();

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '346371b3f49c31b84126b628f818f105';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const userimage = {
                        name: data.name,
                        img: img
                    }

                    fetch('https://powerful-basin-90376.herokuapp.com/userimage', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(userimage)
                    })
                        .then(res => res.json())
                        .then(uploaded => {
                            if (uploaded.uploadedId) {
                                reset();
                            }
                        })
                }
            })
    }



    return (
        <div className='flex justify-center items-center gap-5'>

            <div className='left-side card shadow-xl'>
                <div className='m-10'>
                    <h1 className='font-bold text-4xl  '>Account Setting</h1>
                </div>
                <div className='m-10'>
                    <h2 className='font-bold text-xl '>Profile Detils</h2>
                    <div class="flex   gap-5 mt-10">
                        <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                            <img className='rounded-full' src="https://placeimg.com/192/192/people" />
                        </div>

                        <div>
                            <div className='flex justify center items-center gap-3'>
                                <button className='btn text-primary'>Upload Profile Photo</button>
                                <button className='btn text-primary'>Remove</button>
                            </div>
                            <p className='paragraph'>amar soner bangla ami tomay valobasi chirodin tomar akash tomar batas</p>
                        </div>
                    </div>

                </div>
                <div className='FormSection mt-[-75px] ml-5'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center gap-14 w-full'>
                        <div>
                            <label className="label ">
                                <span className="label-text font-bold">User Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Update Name"
                                className="input input-bordered w-full inputField "
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                        </div>
                        <div>
                            <label className="label ">
                                <span className="label-text font-bold">User Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Update Email"
                                className="input input-bordered w-full max-w-xs "
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is Required'
                                    }
                                })}
                            />
                        </div>
                    </form>
                </div>
            </div>

            <div className="right-side">
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Change Password</h2>
                            <p className='text-[#bbb]'>Your can  parmanently removed or temporally freeze your account </p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary w-full">Change password</button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl mt-10">
                        <div class="card-body">
                            <h2 class="card-title">Close Account</h2>
                            <p className='text-[#bbb]'>Your can  parmanently removed or temporally freeze your account </p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary w-full">Close Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingDemo;