
import React, { useEffect, useRef, useState } from 'react';
import BGLogin from '../../../Assets/bg-login2.jpg';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import LoginImage from '../../../Assets/Login/Login.png';

const Login = () => {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/dashboard';
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);


    const onSubmit = async event => {
        await signInWithEmailAndPassword(event.email, event.password);
    };


    useEffect(() => {
        if (user) {
            async function getToken() {
                const email = user.email;
                const { data } = await axios.post('https://powerful-basin-90376.herokuapp.com/login', { email });
                localStorage.setItem('AccessToken', data);
                navigate(from, { replace: true });
            }


            getToken();
        }
    }, [navigate, user, from])



    return (
        <div className="flex flex-col items-center justify-center h-screen p-5"
            style={{ backgroundImage: `url(${BGLogin})`, backgroundSize: 'cover' }}>
            <div className='lg:flex lg:justify-between lg:w-[1000px] lg:shadow-2xl lg:bg-clip-padding lg:backdrop-filter  lg:rounded-md'>
                <div className='lg:w-96  md:w-96 sm:w-96 flex items-center '>
                    {/* <img src={LoginImage} alt="" /> */}
                    <lottie-player
                        id="firstLottie"
                        ref={ref}
                        autoplay
                        loop
                        mode="normal"
                        src="https://assets2.lottiefiles.com/packages/lf20_fnqxk1bz.json"
                    ></lottie-player>
                </div>

                <div className='lg:w-96 md:w-96 sm:w-96 shadow-xl bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur-md py-10 px-8 rounded-md'>
                    <h1 className="mb-10 text-3xl font-bold text-center text-black">Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input type="email" className='input w-full max-w-md rounded-3xl mt-1 mb-3 '{...register("email")} placeholder="Type Your Email" autocomplete="off" required />
                        </div>

                        <input type="password" className='input w-full max-w-md mt-1 rounded-3xl'{...register("password")} placeholder="Type Your Password" autocomplete="off" required />

                        <input className='mt-7 bg-white text-black bg-opacity-0 hover:bg-opacity-90  hover:rounded-3xl transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="LOGIN" />

                        <p onClick={() => navigate('/resetpassword')} className='btn btn-link text-primary pe-auto text-decoration-none' variant="link">Forget Password</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;