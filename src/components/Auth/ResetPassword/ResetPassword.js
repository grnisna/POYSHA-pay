import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    if (sending) {
        return <div>Sending...</div>
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <div className="px-8 mb-4 text-center">
                        <p className="pt-4 mb-2 text-2xl">Forgot Your Password?</p>
                    </div>
                    <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded">

                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter Email Address..."
                            onChange={handleEmail}
                        />

                        <button className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none text-center cursor-pointer mt-5 focus:shadow-outline"
                            onClick={async () => {
                                if (email) {
                                    await sendPasswordResetEmail(email);
                                    if (error) {
                                        alert('Email not found');
                                    }
                                    else {
                                        toast('Email sent');
                                    }
                                }
                                else {
                                    alert('Please Enter Your Email Address');
                                }
                            }}>
                            Reset Password
                        </button>


                        <hr className="mb-6 border-t" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;