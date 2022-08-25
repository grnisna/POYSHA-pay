import React, { useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
const CurrencyConvert = () => {
    const [from, setFrom] = useState();
    const handleInputChange = (e) => {
        setFrom(e.target.value);
    }
    let inputValue = parseFloat(from) ? parseFloat(from) : 0;
    console.log(inputValue);
    let exchangeRate = inputValue * parseFloat(0.011).toFixed(3);
    console.log(exchangeRate);

    return (

        <div className="">
            <h1 className=''>Currency Converter</h1>
            <form>
                {/* Input Field */}

                <p className=''>Enter Amount</p>
                <input type="text" className=" " onChange={handleInputChange} required autoComplete='off' />

                {/* From Currency */}

                <div className="">
                    <div className="">
                        <p className=''>From</p>
                        <div className="">
                            <img className='' src="https://flagcdn.com/48x36/bd.png" alt="flag" />
                            <select className=''>
                                <option>BDT</option>
                            </select>
                        </div>
                    </div>

                    {/* Exchange Icon  */}
                    <div className=''><FaExchangeAlt /></div>

                    {/* To Currency */}
                    <div className="">
                        <p className=''>To</p>
                        <div className="">
                            <img className='' src="https://flagcdn.com/48x36/us.png" alt="flag" />
                            <select className=''>
                                <option>USD</option>
                            </select>
                        </div>
                    </div>
                </div>
                <p className="bg-blue-700 text-white font-bold py-2 w-full px-4 rounded mt-5 mb-5 text-center"> {inputValue} BDT = {exchangeRate} USD </p>
            </form>
        </div>

    );
};

export default CurrencyConvert;