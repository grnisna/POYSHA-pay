import React, { useState } from 'react';
import auth from '../../../firebase.init';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { useForm, Controller } from "react-hook-form";
import BGLogin from '../../../Assets/bg-login.jpg';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';




const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, control } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = data => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password);        
    };




    return (
        <div className="flex flex-col items-center justify-center h-screen p-5 "
            style={{ backgroundImage: `url(${BGLogin})`, width: '100%', height: '100%', backgroundSize: 'cover' }}>

            <div className='lg:w-96 sm:w-80 shadow-xl mx-auto bg-clip-padding backdrop-filter bg-white bg-opacity-50 backdrop-blur-md py-10 px-8 rounded-md text-black'>
                <h1 className="mb-10 text-3xl font-bold text-center text-white">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label >Account Name</label>
                    <input type="name" className='input w-full max-w-md mt-1 mb-7'{...register("name")} placeholder="Type Your Account Name" autocomplete="off" required />

                    <label >Email</label>
                    <input type="email" className='input w-full max-w-md mt-1 mb-7'{...register("email")} placeholder="Type Your Email" autocomplete="off" required />

                    <label htmlFor="">Password</label>
                    <input type="password" className='input w-full max-w-md mt-1 mb-7'{...register("password")} placeholder="Type Your Password" autocomplete="off" required />

                    <label htmlFor="">Address</label>
                    <input type="text" className='input w-full max-w-md mt-1 mb-7'{...register("address")} placeholder="Type Your Address" autocomplete="off" required />

                    <label>Phone Number</label>
                    <Controller
                        name="phone"
                        control={control}
                        rules={{
                            validate: (value) => isValidPhoneNumber(value)
                        }}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput className='w-20 ' placeholder="Type Your Phone Number"
                                value={value}
                                defaultCountry="BD"
                                onChange={onChange}
                            />
                        )}
                    />
                    {errors["phone-input"] && (
                        <p className="text-red-600">Invalid Phone</p>
                    )}

                    <input className='mt-7 bg-white bg-opacity-30 hover:bg-opacity-80 transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="REGISTER" />



                </form>

                <p className='pt-3 text-white'>Already have a Account ? <span className='text-blue-500 pointer '> <Link to="/login" >Please login</Link> </span> </p>

            </div>
        </div >
    );
};
export default SignUp;