import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { useForm, Controller } from "react-hook-form";
import BGLogin from '../../../Assets/bg-login.jpg';
const SignUp = () => {
    const { register, handleSubmit,  control } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="flex flex-col items-center justify-center h-screen p-5 "
        style={{backgroundImage: `url(${BGLogin})`, width: '100%', height: '100%', backgroundSize: 'cover'}}>

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
                    {/******************* Phone Number ******************/}
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
                    <input className='mt-7 bg-white bg-opacity-30 hover:bg-opacity-80 transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="LOGIN" />

                </form>
            </div>
        </div >
    );
};
export default SignUp;