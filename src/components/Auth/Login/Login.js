import React, { useEffect } from 'react';
import BGLogin from '../../../Assets/bg-login.jpg';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';



const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const onSubmit = async event => {
        await signInWithEmailAndPassword(event.email, event.password);
        const email = event.email;
        const { data } = await axios.post('http://localhost:5000/login', { email });
        console.log(data);
        const gettingToken = await  localStorage.setItem('Token', data);

        // if (gettingToken) {
            navigate('/MyAccount');
        // }
    };



    return (
        <div className="flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${BGLogin})`, backgroundSize: 'cover' }}>
            <div className='lg:w-96 sm:w-80 shadow-xl mx-auto bg-clip-padding backdrop-filter bg-white bg-opacity-50 backdrop-blur-md py-10 px-8 rounded-md'>
                <h1 className="mb-10 text-3xl font-bold text-center text-black">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label >Email</label>

<<<<<<< HEAD
                    <input type="email" className='input w-full max-w-md mt-1 mb-7 rounded-3xl'{...register("email")} placeholder="Type Your Email" autocomplete="off" required />

                    <label htmlFor="">Password</label>
                    <input type="password" className='input w-full max-w-md mt-1 rounded-3xl'{...register("password")} placeholder="Type Your Password" autocomplete="off" required />
=======
                    <input type="email" className='input w-full max-w-md mt-1 mb-7'{...register("email")} placeholder="Type Your Email" autoComplete="off" required />

                    <label htmlFor="">Password</label>
                    <input type="password" className='input w-full max-w-md mt-1'{...register("password")} placeholder="Type Your Password" autoComplete="off" required />
>>>>>>> 3d7dedfe00c8a7fd5a6ce4001ea3928335de56f9

                    <input className='mt-7 bg-white bg-opacity-30 hover:bg-opacity-80 transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="LOGIN" />
                </form>
                <p className='pt-3 text-black'>New to <span className='text-blue-500 pointer '> <Link to="/signup" >Registration now</Link> </span> </p>
            </div>
        </div >
    );
};

export default Login;