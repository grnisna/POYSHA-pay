import React, { useEffect, useRef, useState } from 'react';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import BGLogin from '../../../Assets/bg-login2.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import LoginImage from '../../../Assets/Login/Login.png';
import axios from 'axios';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import toast from 'react-hot-toast';

const SignUp = () => {
  //lottifle 
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, control } = useForm();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/dashboard';
  const [value, setValue] = useState()
  const [addUser, setaddUser] = useState([]);
  const [error, setError] = useState(null)
  const [
    createUserWithEmailAndPassword,
    user
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile] = useUpdateProfile(auth);


  const onSubmit = async data => {

    //if password not matched it will show error
    if (data.password === data.conformPassword) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
      const newData = {
        name: data.name,
        email: data.email,
        password: data.password,
        phoneNumber: data.phone,
        balance: "1000",
      }

      setaddUser(newData)

      const url = `http://localhost:4000/addUser`;
      // add by ashraf
      axios.post(url, newData)
        .then(response => {
          console.log(response);
          toast.success("Account Created")
          navigate(from, { replace: true });
        })

        .catch(error => {
          // navigate(from, { replace: true });
          toast.error(`${error?.response?.data?.error}`)
        });
      // navigate(from, { replace: true });


    } else {
      console.log("Password Is not Matched");
    }

  };


  useEffect(() => {
    if (user) {
      async function getToken() {
        const email = user.email;
        const { data } = await axios.post('https://localhost:400/login', { email });
        localStorage.setItem('AccessToken', data);

        navigate(from, { replace: true });
      }

      getToken();
    }
  }, [navigate, user, from])




  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-info text-secondary ">

      <div className='lg:flex lg:justify-between lg:w-[1000px] lg:shadow-2xl hover:bg-secondary bg-primary delay-150 transition duration-300  lg:rounded-md'>
        <div className='lg:w-96 lg:pl-10 md:w-96 sm:w-96 flex items-center justify-center '>
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
        <div className='lg:w-96 md:w-96 sm:w-96  shadow-xl bg-secondary hover:bg-primary delay-150 transition duration-300   px-8 rounded-md'>
          <div className='flex gap-4 uppercase pt-10'>
            <Link to='/login' className=" text-3xl hover:underline hover: underline-offset-8 duration-500 cursor-pointer font-bold text-center text-white">Login</Link>
            <Link to='/signUp' className=" text-3xl hover:underline hover: underline-offset-8 duration-500 cursor-pointer font-bold text-center text-white">Sing Up</Link>
          </div>
          {/************* Sign Up Form ******************************/}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/****************** * Account Name ******************/}
            <input type="name" className='input w-full max-w-md mt-1 mb-2'{...register("name")} placeholder="Full Name" autocomplete="off" required />
            {/******************* Email ******************/}
            <input type="email" className='input w-full max-w-md mt-1 mb-2'{...register("email")} placeholder="Your Email" autocomplete="off" required />
            {/******************* Password ******************/}
            <input type="password" className='input w-full max-w-md mt-1 mb-2'{...register("password")} placeholder="Your Password" autocomplete="off" required />
            {/******************* Address ******************/}
            <input type="password" className='input w-full max-w-md mt-1 mb-2'{...register("conformPassword")} placeholder="Conform Password" autoComplete="off" required />

            {/******************* Phone Number ******************/}
            <PhoneInput
              className='input text-primary hover:border-0 w-full max-w-md mt-1 mb-2'
              placeholder="Enter phone number"
              international
              defaultCountry="BD"
              value={value}
              onChange={setValue}
              {...register("phone")}
              required
            />

            <p className='text-red-500'>{error}</p>

            <input className='mt-7 bg-white hover:bg-secondary text-secondary hover:text-white  transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="REGISTER" />

          </form>

        </div>
      </div>
    </div>
  );
};

export default SignUp;