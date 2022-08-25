import React, { useEffect, useRef } from 'react';
import BGLogin from '../../../Assets/bg-login2.jpg';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import LoginImage from '../../../Assets/Login/Login.png';



const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/dashboard';

    //lottifle 
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });

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
        <div className="flex flex-col items-center justify-center h-screen p-5 bg-info "
        // style={
        //     { backgroundImage: `url(${BGLogin})`, backgroundSize: 'cover' }
        //     }
        >
            <div className='lg:flex lg:justify-between lg:w-[1000px] lg:shadow-2xl hover:bg-secondary bg-primary delay-150 transition duration-300  lg:rounded-md'>
                <div className='lg:w-96 lg:pl-6 md:w-96 sm:w-96 flex items-center justify-center '>
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

                <div className='lg:w-96 md:w-96 sm:w-96  shadow-xl bg-secondary hover:bg-primary delay-150 transition duration-300  py-4 px-8 rounded-md'>
                    <div className='flex gap-4 uppercase pt-10'>
                        <Link to='/login' className=" text-3xl hover:underline hover: underline-offset-8 duration-500 cursor-pointer font-bold text-center text-white">Login</Link>
                        <Link to='/signUp' className="text-3xl hover:underline hover: underline-offset-8 duration-500 cursor-pointer font-bold text-center text-white">Sing Up</Link>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input type="email" className='input w-full max-w-md rounded-3xl mt-1 mb-3 '{...register("email")} placeholder="Type Your Email" autocomplete="off" required />
                        </div>

                        <input type="password" className='input w-full max-w-md mt-1 h-10 rounded-3xl'{...register("password")} placeholder="Type Your Password" autocomplete="off" required />

                        <input className='mt-7 bg-white hover:text-white hover:bg-secondary text-secondary   transition duration-500 rounded-3xl shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="LOGIN" />

                        <p onClick={() => navigate('/resetpassword')} className='btn btn-link  pe-auto text-decoration-none' variant="link">Forget Password</p>

                        {/* <input className='mt-7 bg-white bg-opacity-0 hover:bg-opacity-90 hover:rounded-3xl transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="LOGIN" /> */}

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;