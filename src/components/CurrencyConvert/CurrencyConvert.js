import React, { useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
const CurrencyConvert = () => {
    const [from, setFrom] = useState();
    const handleInputChange = (e) => {
        setFrom(e.target.value);
    }
    let inputValue = parseFloat(from);
    console.log(inputValue);
    let exchangeRate = inputValue * parseFloat(0.011).toFixed(3);
    console.log(exchangeRate);

    return (
        <div className='bg-info p-20'>
            <div className="bg-white rounded-lg shadow-xl">
                <h1 className='text-center text-[30px] pt-10 font-bold text-secondary'>Currency Converter</h1>
                <form className='justify-center pb-10'>
                    {/* Input Field */}
                    <p className='mb-1 ml-1 text-secondary'>Enter Amount</p>
                    <input type="number" placeholder='amount' id="first_name" className="w-full bg-gray-50 border border-secondary text-secondary text-sm rounded-sm focus:border-primary  p-2.5"
                        onChange={handleInputChange}
                        required autoComplete='off' />

                    {/* From Currency */}

                    <div className="flex gap-10 my-10">
                        <div className="w-auto">
                            <p className='text-secondary'>From</p>
                            <div className="flex border border-gray-500 rounded p-2">
                                <img className='mr-2 w-[22px] h-[16px] my-auto' src="https://flagcdn.com/48x36/bd.png" alt="flag" />
                                <select className='w-40 bg-white text-[16px] '>
                                    <option>BDT</option>
                                    {/* <option>USD</option> */}
                                </select>
                            </div>
                        </div>

                        <div className='mt-10 cursor-pointer'><FaExchangeAlt /></div>

                        {/* To Currency */}
                        <div className="w-auto ">
                            <p className='text-black'>To</p>
                            <div className="flex border border-gray-500 rounded p-2">
                                <img className='mr-2 w-[22px] h-[16px] my-auto' src="https://flagcdn.com/48x36/us.png" alt="flag" />
                                <select className='w-40 bg-white text-[16px]'>
                                    <option>USD</option>
                                    {/* <option>BDT</option> */}
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className="w-full hover:bg-primary bg-secondary delay-300 duration-200 text-white font-bold py-2  px-4 rounded mt-5 mb-5 text-center">
                        {inputValue} BDT = {exchangeRate} USD
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CurrencyConvert;