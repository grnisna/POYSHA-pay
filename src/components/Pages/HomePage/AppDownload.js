import React from 'react';
import AppleStore from '../../../Assets/AppDownload/apple-store.png';
import PlayStore from '../../../Assets/AppDownload/play-store.png';
import mobile from '../../../Assets/AppDownload/mobile.gif';
import support from '../../../Assets/AppDownload/support.png';
import userinterface from '../../../Assets/AppDownload/user-interface.png';
import customize from '../../../Assets/AppDownload/easy-customize.png';
import security from '../../../Assets/AppDownload/Security.png';
import QRCode from '../../../Assets/AppDownload/QR Code.png';

const AppDownload = () => {
    return (
        <div>
            {/* first part */}
            <div className='flex flex-col items-center justify-center h-screen bg-rose-300'>
                <h1 className='text-white text-2xl lg:text-5xl font-bold mt-2'>Easy To Use</h1>
                <h1 className='text-white text-2xl lg:text-5xl font-bold mt-2'>Download Your App.</h1>
                <p className='text-white font-bold mt-2'>Our goal is safe and complete service</p>
                <div className='flex justify-center mt-2'>
                    <a href="https://apps.apple.com/us/app/nagad/id1471844924" target='_blank' rel="noreferrer"><img src={AppleStore} alt="" width={170} /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.konasl.nagad&hl=en&gl=US" target='_blank' rel="noreferrer"><img src={PlayStore} alt="" width={170} /></a>
                </div>
            </div>
            {/* Second Part */}
            <div className='lg:flex items-center justify-center h-screen '>
                <div className='lg:mr-20 lg:mt-0 mt-10 '>
                    <div className='lg:text-right text-center mb-10'>
                        <div className='flex justify-center lg:justify-end'>
                            <img src={support} alt="" width={50} />
                        </div>
                        <h1 className='font-bold text-xl'>Support</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className='lg:text-right text-center mb-10'>
                        <div className='flex justify-center lg:justify-end'>
                            <img src={userinterface} alt="" width={50} />
                        </div>
                        <h1 className='font-bold text-xl'>User Inerface</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className='lg:text-right text-center mb-10'>
                        <div className='flex justify-center lg:justify-end'>
                            <img src={customize} alt="" width={100} />
                        </div>
                        <h1 className='font-bold text-xl'>Easy To Handle</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <img className='lg:block hidden' src={mobile} alt="" />

                <div className='lg:ml-20'>
                    <div className='lg:text-left text-center mb-10'>
                        <div className='flex justify-center lg:justify-start'>
                            <img src={security} alt="" width={50} />
                        </div>
                        <h1 className='font-bold text-xl'>Security</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='text-center lg:text-start'>
                        <h1 className='font-bold text-2xl'>Download your app</h1>
                        <div className='flex justify-center lg:justify-start'>
                            <img src={QRCode} alt="" width={250} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDownload;