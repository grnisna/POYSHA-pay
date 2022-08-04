import React, { useEffect } from 'react';
import auth from '../../../firebase.init';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { useForm, Controller } from "react-hook-form";
import BGLogin from '../../../Assets/bg-login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import axios from 'axios';


const SignUp = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, control } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    
    const [updateProfile] = useUpdateProfile(auth);



    const onSubmit = async event => {
        await createUserWithEmailAndPassword(event.email, event.password);        
        const email = event.email;
        const {data} = await axios.post('http://localhost:5000/login',{email});
        localStorage.setItem('token',data.accessToken);
        navigate('/MyAccount');
        
    };


    // useEffect( ()=>{
    //     if(user){
    //         navigate('/MyAccount');
    //     }
    // }, [navigate, user])




    return (
        <div className="flex flex-col items-center justify-center h-screen p-5 "
            style={{ backgroundImage: `url(${BGLogin})`, width: '100%', height: '100%', backgroundSize: 'cover' }}>

            <div className='lg:w-96 sm:w-80 shadow-xl mx-auto bg-clip-padding backdrop-filter bg-white bg-opacity-50 backdrop-blur-md py-10 px-8 rounded-md text-black'>

                <h1 className="mb-10 text-3xl font-bold text-center text-black">Sign Up</h1>
                {/************* Sign Up Form ******************************/}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/****************** * Account Name ******************/}
                    <label >Account Name</label>
                    <input type="name" className='input w-full max-w-md mt-1 mb-7'{...register("name")} placeholder="Type Your Account Name" autoComplete="off" required />

                    <label >Email</label>
                    <input type="email" className='input w-full max-w-md mt-1 mb-7'{...register("email")} placeholder="Type Your Email" autoComplete="off" required />

                    <label htmlFor="">Password</label>
                    <input type="password" className='input w-full max-w-md mt-1 mb-7'{...register("password")} placeholder="Type Your Password" autoComplete="off" required />

                    <label htmlFor="">Address</label>
                    <input type="text" className='input w-full max-w-md mt-1 mb-7'{...register("address")} placeholder="Type Your Address" autoComplete="off" required />

                    <label>Phone Number</label>
                    <Controller 
                        name="phone"
                        control={control}
                        rules={{
                            validate: (value) => isValidPhoneNumber(value)
                        }}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput className='w-24 ' placeholder="Type Your Phone Number"
                                value={value}
                                defaultCountry="BD"
                                onChange={onChange}
                            />
                        )}
                    />
                    <input className='mt-7 bg-white bg-opacity-30 hover:bg-opacity-80 transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="LOGIN" />
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