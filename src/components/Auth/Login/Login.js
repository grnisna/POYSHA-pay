import React, { useEffect } from 'react';
import BGLogin from '../../../Assets/bg-login2.jpg';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import LoginImage from '../../../Assets/Login/Login.png';



const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

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
            <div className='lg:flex lg:justify-between lg:w-[1000px] lg:shadow-xl  lg:bg-clip-padding lg:backdrop-filter lg:opacity-90 lg:backdrop-blur-md lg:rounded-md'>
                <div className='lg:w-96  md:w-96 sm:w-96 flex items-center '>
                    <img src={LoginImage} alt="" />
                </div>

                <div className='lg:w-96 md:w-96 sm:w-96 shadow-xl bg-clip-padding backdrop-filter bg-white bg-opacity-50 backdrop-blur-md py-10 px-8 rounded-md'>
                    <h1 className="mb-10 text-3xl font-bold text-center text-black">Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input type="email" className='input w-full max-w-md rounded-3xl mt-1 mb-3 '{...register("email")} placeholder="Type Your Email" autocomplete="off" required />
                        </div>

                        <input type="password" className='input w-full max-w-md mt-1 h-10 rounded-3xl'{...register("password")} placeholder="Type Your Password" autocomplete="off" required />

                        <input className='mt-7 bg-white bg-opacity-0 hover:bg-opacity-90 hover:rounded-3xl transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="LOGIN" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Login;