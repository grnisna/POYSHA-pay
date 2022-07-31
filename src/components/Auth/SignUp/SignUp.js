<<<<<<< HEAD
=======
import React, { useEffect } from 'react';
import auth from '../../../firebase.init';
>>>>>>> 157dc87948680079dc8461d0aa567677cf2585a3
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { useForm, Controller } from "react-hook-form";
import BGLogin from '../../../Assets/bg-login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';




const SignUp = () => {
<<<<<<< HEAD
    const { register, handleSubmit,  control } = useForm();
    const onSubmit = data => console.log(data);
=======
    const { register, handleSubmit, formState: { errors }, control } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password);        
    };

    const navigate = useNavigate();

    useEffect( ()=>{
        if(user){
            navigate('/');
        }
    } ,[navigate,user])




>>>>>>> 157dc87948680079dc8461d0aa567677cf2585a3
    return (
        <div className="flex flex-col items-center justify-center h-screen p-5 "
            style={{ backgroundImage: `url(${BGLogin})`, width: '100%', height: '100%', backgroundSize: 'cover' }}>

            <div className='lg:w-96 sm:w-80 shadow-xl mx-auto bg-clip-padding backdrop-filter bg-white bg-opacity-50 backdrop-blur-md py-10 px-8 rounded-md text-black'>

                <h1 className="mb-10 text-3xl font-bold text-center text-white">Sign Up</h1>
                {/************* Sign Up Form ******************************/}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/****************** * Account Name ******************/}
                    <label >Account Name</label>
                    <input type="name" className='input w-full max-w-md mt-1 mb-7'{...register("name")} placeholder="Type Your Account Name" autocomplete="off" required />
                    {/******************* Email ******************/}
                    <label >Email</label>
                    <input type="email" className='input w-full max-w-md mt-1 mb-7'{...register("email")} placeholder="Type Your Email" autocomplete="off" required />
                    {/******************* Password ******************/}
                    <label htmlFor="">Password</label>
                    <input type="password" className='input w-full max-w-md mt-1 mb-7'{...register("password")} placeholder="Type Your Password" autocomplete="off" required />
<<<<<<< HEAD
                    {/******************* Phone Number ******************/}
=======

                    <label htmlFor="">Address</label>
                    <input type="text" className='input w-full max-w-md mt-1 mb-7'{...register("address")} placeholder="Type Your Address" autocomplete="off" required />

>>>>>>> 157dc87948680079dc8461d0aa567677cf2585a3
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
<<<<<<< HEAD
                    <input className='mt-7 bg-white bg-opacity-30 hover:bg-opacity-80 transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="LOGIN" />
=======
                    {errors["phone-input"] && (
                        <p className="text-red-600">Invalid Phone</p>
                    )}

                    <input className='mt-7 bg-white bg-opacity-30 hover:bg-opacity-80 transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="REGISTER" />
>>>>>>> 157dc87948680079dc8461d0aa567677cf2585a3

                </form>

                <p className='pt-3 text-white'>Already have a Account ? <span className='text-blue-500 pointer '> <Link to="/login" >Please login</Link> </span> </p>

            </div>
        </div >
    );
};
export default SignUp;