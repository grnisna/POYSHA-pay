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
        <div className='w-full bg-blue-600 p-5'>
            <div className="w-80 mx-auto bg-white p-4 rounded-lg">
                <h1 className='text-center text-[30px] mb-10 text-black'>Currency Converter</h1>
                <form>
                    {/* Input Field */}
                    <p className='mb-1 ml-1 text-black'>Enter Amount</p>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-400 text-black text-sm rounded-sm focus:border-blue-500  w-full p-2.5"
                        onChange={handleInputChange}
                        required autoComplete='off' />

                    {/* From Currency */}

                    <div className="flex justify-between mt-10">
                        <div className="w-auto">
                            <p className='text-black'>From</p>
                            <div className="flex border border-gray-500 rounded p-2">
                                <img className='mr-2 w-[22px] h-[16px] my-auto' src="https://flagcdn.com/48x36/bd.png" alt="flag" />
                                <select className='bg-white text-[16px] '>
                                    <option>BDT</option>
                                    {/* <option>USD</option> */}
                                </select>
                            </div>
                        </div>

                        <div className='mt-10 cursor-pointer'><FaExchangeAlt /></div>

                        {/* To Currency */}
                        <div className="w-auto">
                            <p className='text-black'>To</p>
                            <div className="flex border border-gray-500 rounded p-2">
                                <img className='mr-2 w-[22px] h-[16px] my-auto' src="https://flagcdn.com/48x36/us.png" alt="flag" />
                                <select className='bg-white text-[16px]'>
                                    <option>USD</option>
                                    {/* <option>BDT</option> */}
                                </select>
                            </div>
                        </div>
                    </div>
                    <p className="hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 w-full px-4 rounded mt-5 mb-5 text-center">
                        {inputValue} BDT = {exchangeRate} USD
                    </p>
                </form>
            </div>
        </div>
    );
};

export default CurrencyConvert;