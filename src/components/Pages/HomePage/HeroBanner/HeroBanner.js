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

                    <h1 className='hero-h1'> MOST POPULAR AND TRUSTED PAYMENT SERVICES ON EARTH</h1>
                    <div className="hero-explore flex items-center">
                        <h3 className='explore py-8 '>KNOW MORE ABOUT OUR SERVICES </h3>
                        <div className="explore-arrow pl-5">
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
            <div className=" grid banner-image ">

                <img className='blob-svg' src={card} alt="" />
            </div>
        </section>
    );
};

export default HeroBanner;