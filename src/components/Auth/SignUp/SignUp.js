import React, { useEffect } from 'react';
import auth from '../../../firebase.init';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { useForm, Controller } from "react-hook-form";
import BGLogin from '../../../Assets/bg-login.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import axios from 'axios';


const SignUp = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile] = useUpdateProfile(auth);

    // const onSubmit = data => {
    //     createUserWithEmailAndPassword(data.email, data.password);
    //    


    // };

    const onSubmit = (data) => {

        const newData = {
            name: data.name,
            email: data.email,
            password: data.password,
            address: data.address,
            phone: data.phone,
            balance: 1000
        }

        const url = `https://powerful-basin-90376.herokuapp.com/users`;

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

            <div className='lg:w-96 sm:w-80 shadow-xl mx-auto bg-clip-padding backdrop-filter bg-white bg-opacity-50 backdrop-blur-md py-10 px-8 rounded-md text-black'>

                <h1 className="mb-10 text-3xl font-bold text-center text-black">Sign Up</h1>
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
                    {/******************* Address ******************/}

                    <label htmlFor="">Address</label>
                    <input type="text" className='input w-full max-w-md mt-1 mb-7'{...register("address")} placeholder="Your Address" autoComplete="off" required />

                    {/******************* Phone Number ******************/}
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