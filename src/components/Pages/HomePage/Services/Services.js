import React from 'react';
import './Services.css';
import sendmoney from '../../../../Assets/serviceImg/sendmoney.png'
import cashin from '../../../../Assets/serviceImg/cashin.png';
import billpay from '../../../../Assets/serviceImg/billpay.png';
import recharge from '../../../../Assets/serviceImg/recharge.png';
import twintyfourHours from '../../../../Assets/serviceImg/twintyfourHours.png';
import gasbill from '../../../../Assets/serviceImg/gasbill.png';
import creditcard from '../../../../Assets/serviceImg/creditcard.png';
import ourPackage from '../../../../Assets/serviceImg/package.gif';
import { GoArrowRight } from 'react-icons/go'
import serviceBackground from '../../../../Assets/serviceImg/serviceSectionBG.png';

const Services = () => {
    return (
        <div className=' lg:py-20 py-5 ' style={{
            backgroundImage: `url(${serviceBackground})`,
            backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: '0.9.5'


        }} >
            {/* <div className='services flex justify-center items-center gap-5'><h2 className='text-base-100 font-bold lg:text-2xl text-l'>SERVICE'S </h2><GoArrowRight color='white' size={24}></GoArrowRight>  </div> */}
            <h2 className='Tcompany lg:text-2xl text-l uppercase text-center'>Our Services</h2>

            <div className='serviceArea lg:py-10'>
                <div className='lg:flex justify-center items-center'>
                    <div className='myCard '>
                        <div className='success '></div>
                        <div className='imageContainer '>
                            <img className='w-24' src={sendmoney} alt="Recharge" />
                        </div>
                        <h1 className='3xl font-bold text-white pt-5 summaryText'>SEND MONEY</h1>
                    </div>
                    <div className='myCard '>
                        <div className='success '></div>
                        <div className='imageContainer '>
                            <img className='w-24' src={cashin} alt="Recharge" />
                        </div>
                        <h1 className='3xl font-bold text-white pt-5 summaryText'>CASH IN</h1>
                    </div>
                    <div className='myCard '>
                        <div className='success '></div>
                        <div className='imageContainer '>
                            <img className='w-24' src={billpay} alt="Recharge" />
                        </div>
                        <h1 className='3xl font-bold text-white pt-5 summaryText'>BILL PAY</h1>
                    </div>
                    <div className='myCard '>
                        <div className='success '></div>
                        <div className='imageContainer '>
                            <img className='w-24' src={recharge} alt="Recharge" />
                        </div>
                        <h1 className='3xl font-bold text-white pt-5 summaryText'>RECHARGE</h1>
                    </div>

                </div>

            </div>
            <div className='serviceArea lg:py-6'>
                <div className='lg:flex justify-center items-center'>
                    <div className='myCard '>
                        <div className='success '></div>
                        <div className='imageContainer '>
                            <img className='w-24' src={ourPackage} alt="Recharge" />
                        </div>
                        <h1 className='3xl font-bold text-white pt-5 summaryText'>SERVICES</h1>
                    </div>
                    <div className='myCard '>
                        <div className='success '></div>
                        <div className='imageContainer '>
                            <img className='w-24' src={gasbill} alt="Recharge" />
                        </div>
                        <h1 className='3xl font-bold text-white pt-5 summaryText'>GAS BILL</h1>
                    </div>
                    <div className='myCard '>
                        <div className='success '></div>
                        <div className='imageContainer '>
                            <img className='w-24' src={creditcard} alt="Recharge" />
                        </div>
                        <h1 className='3xl font-bold text-white pt-5 summaryText'>PAYMENT</h1>
                    </div>
                    <div className='myCard '>
                        <div className='success '></div>
                        <div className='imageContainer '>
                            <img className='w-24' src={twintyfourHours} alt="Recharge" />
                        </div>
                        <h1 className='3xl font-bold text-white pt-5 summaryText'>CALL US</h1>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Services;