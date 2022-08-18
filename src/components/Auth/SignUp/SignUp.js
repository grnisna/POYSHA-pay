import React, { useEffect, useState } from 'react';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import BGLogin from '../../../Assets/bg-login2.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import LoginImage from '../../../Assets/Login/Login.png';
import axios from 'axios';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/dashboard';
    const [value, setValue] = useState()
    const [myNewData, setMyNewData] = useState([]);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    console.log(user);

    const [updateProfile] = useUpdateProfile(auth);
    // const [newUser] = useAuthState(auth)


    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

        const newData = {
            name: data.name,
            email: data.email,
            password: data.password,
            address: data.address,
            phone: data.phone,
            balance: 1000,
            sendMoney: {
                transactionsBy: "bank",
                transactionsType: "debit",
                transactionsAccount: "nurthern2017@gmail.com",
                accountHolderName: "Rifat",
                transactionsAmount: 2000,
                transactionsDateTime: "10/jun/2022 at 05:30PM",
            },
            receiveMoney: {
                transactionsBy: "Paypal",
                transactionsType: "credit",
                transactionsAccount: "simul420@gmail.com",
                accountHolderName: "simul420",
                transactionsAmount: 100,
                transactionsDateTime: "15/mar/2022 at 02:10PM",
            },
            favoriteAccount: {
                nisanAccountInfo: {
                    accountHolderName: "Nisan",
                    accountHolderEmail: "nisan430@gamil.com",
                    accountHolderPhone: "(+880)1886627127",
                    accountHolderOrigin: "Bangladesh",
                },
                MehideAccountHolderInfo: {
                    accountHolderName: "Mehide",
                    accountHolderEmail: "mehide430@gamil.com",
                    accountHolderPhone: "(+880)1886627127",
                    accountHolderOrigin: "Bangladesh",
                },
            },

        }

        setMyNewData(newData)
        console.log(myNewData);

        const url = `http://localhost:5000/users`;

        fetch(url, {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                navigate(from, { replace: true });
            })
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
        <div className="flex flex-col items-center justify-center h-screen p-5 "
            style={{ backgroundImage: `url(${BGLogin})`, width: '100%', height: '100%', backgroundSize: 'cover' }}>

            <div className='lg:flex lg:justify-between lg:w-[1000px] lg:shadow-xl  lg:bg-clip-padding lg:backdrop-filter lg:opacity-90 lg:backdrop-blur-md lg:rounded-md'>
                <div className='lg:w-96  md:w-96 sm:w-96 flex items-center'>
                    <img src={LoginImage} alt="" />
                </div>
                <div className='lg:w-96 sm:w-80 shadow-xl bg-clip-padding backdrop-filter bg-white bg-opacity-50 backdrop-blur-md py-10 px-8 rounded-md text-black'>


                    <h1 className="mb-10 text-3xl font-bold text-center text-black">Sign Up</h1>
                    {/************* Sign Up Form ******************************/}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/****************** * Account Name ******************/}
                        <input type="name" className='input w-full max-w-md mt-1 mb-2'{...register("name")} placeholder="User Name" autocomplete="off" required />
                        {/******************* Email ******************/}
                        <input type="email" className='input w-full max-w-md mt-1 mb-2'{...register("email")} placeholder="Your Email" autocomplete="off" required />
                        {/******************* Password ******************/}
                        <input type="password" className='input w-full max-w-md mt-1 mb-2'{...register("password")} placeholder="Your Password" autocomplete="off" required />
                        {/******************* Address ******************/}
                        <input type="text" className='input w-full max-w-md mt-1 mb-2'{...register("address")} placeholder="Present Address" autoComplete="off" required />

                        {/******************* Phone Number ******************/}
                        <PhoneInput
                            className='input w-full max-w-md mt-1 mb-2'
                            placeholder="Enter phone number"
                            international
                            defaultCountry="BD"
                            value={value}
                            onChange={setValue}
                            {...register("phone")}
                            required
                        />

                        <input className='mt-7 bg-white bg-opacity-30 hover:bg-opacity-80 transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="REGISTER" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;