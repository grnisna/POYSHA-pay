import React, { useEffect, useState } from 'react';
import StripePayment from '../Hooks/Stripe/StripePayment';
import AddMoneyCard from './AddMoneyCard';
import AddMoneyModal from './AddMoneyModal';

const AddMoney = () => {

    const [addMoneys, setAddMoneys] = useState([]);
    const [banks, setBanks] = useState(null)

    useEffect(() => {
        fetch('addMoneyInfo.json')
            .then(res => res.json())
            .then(data => setAddMoneys(data))
    }, [])
    return (
        <div className='bg-slate-200 mb-20'>
            <h1 className='text-accent text-center text-3xl font-bold pt-10 pb-10'>Your Courant Balance is:  <span className='text-orange-700'> $1000.54</span> </h1>
            <h1 className='text-primary text-center text-4xl uppercase font-bold pb-10'>Add Money in wallet from bank</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-10 mb-10'>
                {
                    addMoneys.map(addMoney => <AddMoneyCard
                        key={addMoney._id}
                        addMoney={addMoney}
                        setBanks={setBanks}
                    ></AddMoneyCard>)
                }

            </div>
            {banks && <AddMoneyModal
                banks={banks}
                setBanks={setBanks}
            ></AddMoneyModal>}

            {/* <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-10 mb-10 '>
                <button className='w-96 shadow-2xl rounded-3xl '>
                    <figure class=" image-full ">
                        <img src="https://compassplus.ru/static/materials/testimonials/city-1.png" alt="Shoes" />
                        
                    </figure>
                </button>
                <button className='w-96 shadow-2xl rounded-3xl '>
                    <figure class=" image-full px-5 pt-5">
                        <img src="https://i.pinimg.com/originals/52/96/8a/52968af44228ad023542426899b2fb07.jpg" alt="Shoes" />
                        
                    </figure>
                </button>
                <button className='w-96 shadow-2xl rounded-3xl '>
                    <figure class=" image-full px-5 pt-5">
                        <img src="https://updateoffer.com/wp-content/uploads/2019/01/Dutch-Bangla-Bank.jpg" alt="Shoes" />
                        
                    </figure>
                </button>
                <button className='w-96 shadow-2xl rounded-3xl '>
                    <figure class=" image-full px-5 pt-5">
                        <img src="https://bizdatainsights.com/wp-content/uploads/2020/07/ebl.jpg" alt="Shoes" />

                    </figure>
                </button>
                <button className='w-96 shadow-2xl rounded-3xl '>
                    <figure class=" image-full px-5 pt-5">
                        <img src="https://banner2.cleanpng.com/20180530/ker/kisspng-world-bank-group-finance-world-development-report-5b0f49865e2ef4.1289488015277285183858.jpg" alt="Shoes" />

                    </figure>
                </button>
                <button className='w-96 shadow-2xl rounded-3xl '>
                    <figure class=" image-full px-5 pt-5">
                        <img src="https://explain.com.ng/wp-content/uploads/2021/07/paypal-logo.jpeg" alt="Shoes" />

                    </figure>
                </button>


            </div> */}

        </div>
    );
};

export default AddMoney;