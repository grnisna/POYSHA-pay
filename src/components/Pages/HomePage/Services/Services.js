import React from 'react';
import './Services.css';
import sendmoney from '../../../../Assets/sendmoney.png';
import cashin from '../../../../Assets/cashin.png';
import billpay from '../../../../Assets/billpay.png';
import recharge from '../../../../Assets/recharge.png';

const Services = () => {
    return (
        <div>
            <div className='serviceArea lg:py-10'>
                <div className='flex justify-center items-center'>
                    <div className='myCard '>
                        <div className='success '></div>
                        <div className='imageContainer '>
                            <img className='w-24' src={sendmoney} alt="Recharge" />
                        </div>
                        <h1 className='3xl font-bold text-white pt-10 summaryText'>SEND MONEY</h1>
                    </div>
                    <div className='myCard '>
                        <div className='success '></div>
                        <div className='imageContainer '>
                            <img className='w-24' src={cashin} alt="Recharge" />
                        </div>
                        <h1 className='3xl font-bold text-white pt-10 summaryText'>CASH IN</h1>
                    </div>
                    <div className='myCard '>
                        <div className='success '></div>
                        <div className='imageContainer '>
                            <img className='w-24' src={billpay} alt="Recharge" />
                        </div>
                        <h1 className='3xl font-bold text-white pt-10 summaryText'>BILL PAY</h1>
                    </div>
                    <div className='myCard '>
                        <div className='success '></div>
                        <div className='imageContainer '>
                            <img className='w-24' src={recharge} alt="Recharge" />
                        </div>
                        <h1 className='3xl font-bold text-white pt-10 summaryText'>RECHARGE</h1>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Services;