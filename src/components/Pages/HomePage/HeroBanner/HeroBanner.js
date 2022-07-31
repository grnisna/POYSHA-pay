import React from 'react';
import card from '../../../../Assets/SVG/3rd-bannar-blob.svg'
// import HeroBlob from '../../../Assets/SVG/3rd-bannar-blob.svg'
import './HeroBanner.css';
import { FaArrowRight } from "react-icons/fa";
const HeroBanner = () => {
    return (
        <section className='hero-banner lg:px-20 grid lg:grid-cols-2 justify-center grid-flow-dense '>
            <div className="hero-content ">
                <div className="content-header">
                    <div className='hero-title '>
                        <h1 className='hero-h1'>NOW MOST POPULAR, TRUSTED AND FASTED</h1>
                        <span className='hero-h1-color text-primary underline'>PAYMENT SERVICES</span></div>
                    <div className="hero-explore lg:pt-4 pt-2 lg:pb-10 pb-6 flex items-center">
                        <h3 className='explore  '>KNOW MORE ABOUT OUR SERVICES </h3>
                        <div className="explore-arrow lg:pl-5 pl-2">
                            <FaArrowRight />
                        </div>
                    </div>

                    <div className="getApp-link flex items-center">
                        <div className="email-input ">
                            <input class=" email-input appearance-none border-2 rounded-full border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@gamil.com"></input>
                        </div>
                        <div className="get-link-btn lg:px-8 px-2  ">
                            <button className='get-link rounded-full'>GET LINK</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-blob grid">
                <img className='blob-svg' src={card} alt="" />
            </div>
        </section>
    );
};

export default HeroBanner;