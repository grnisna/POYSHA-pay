import React from 'react';
import BGLogin from '../../../Assets/bg-login.jpg';
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="flex flex-col items-center justify-center h-screen"
            style={{ backgroundImage: `url(${BGLogin})`, backgroundSize: 'cover' }}>
            <div className='lg:w-96 sm:w-80 shadow-xl mx-auto bg-clip-padding backdrop-filter bg-white bg-opacity-50 backdrop-blur-md py-10 px-8 rounded-md'>
                <h1 className="mb-10 text-3xl font-bold text-center text-black">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label >Email</label>

                    <input type="email" className='input w-full max-w-md mt-1 mb-7'{...register("email")} placeholder="Type Your Email" autocomplete="off" required />

                    <label htmlFor="">Password</label>
                    <input type="password" className='input w-full max-w-md mt-1'{...register("password")} placeholder="Type Your Password" autocomplete="off" required />

                    <input className='mt-7 bg-white bg-opacity-30 hover:bg-opacity-80 transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="LOGIN" />
                </form>
            </div>
        </div >
    );
};

export default Login;