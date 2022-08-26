import React, { useRef, useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";

const CurrencyConvert = () => {
 const ref = useRef(null);
 React.useEffect(() => {
  import("@lottiefiles/lottie-player");
 });

 const [from, setFrom] = useState();
 const handleInputChange = (e) => {
  setFrom(e.target.value);
 }
 let inputValue = parseFloat(from) ? parseFloat(from) : 0;
 console.log(inputValue);
 let exchangeRate = inputValue * parseFloat(0.011).toFixed(4);
 console.log(exchangeRate);

 return (
  <div className="CurrencyConvert">
   <div className="shadow-xl border-2 ">
    <h1 className='text-4xl font-medium text-center pt-10 text-secondary'>Currency Converter</h1>
    <form className='grid justify-center justify-items-center'>
     {/* Input Field */}

     <p className='text-left font-bold text-md pb-4'>Enter Amount</p>
     <input type="text" placeholder='Convert Amount' className="input w-full w-xs border-2 border-primary" onChange={handleInputChange} required autoComplete='off' />

     {/* From Currency */}

     <div className="grid grid-cols-2 gap-10">
      <div className="font-bold pt-4">
       <p className=''>From</p>
       <div className="flex items-center pt-0">
        <div className="flag">
         <img className='w-8' src="https://flagcdn.com/48x36/bd.png" alt="flag" />
        </div>
        <div className="option pl-2">
         <select className='w-32'>
          <option>BDT</option>
         </select>
        </div>
       </div>
      </div>

      {/* Exchange Icon  */}
      {/* <div className=''><FaExchangeAlt /></div> */}

      {/* To Currency */}
      <div className=" font-bold pt-4">
       <p className=''>To</p>
       <div className="flex items-center pt-0">
        <div className="flag">
         <img className='w-8' src="https://flagcdn.com/48x36/us.png" alt="flag" />
        </div>
        <div className="option pl-2">
         <select className='w-32'>
          <option>USD</option>
         </select>
        </div>
       </div>
      </div>
     </div>
     <div className="bg-secondary w-96 text-white font-bold py-2 px-4 rounded mt-5 mb-5 text-center"> {inputValue} BDT = {exchangeRate} USD </div>
    </form>
   </div>
  </div>
 );
};

export default CurrencyConvert;