import React from 'react';
import './CardSlide.css'
import CardSlide1 from "../../../Assets/images/card1.png"
import CardSlide2 from '../../../Assets/images/card2.png'
import CardSlide3 from '../../../Assets/images/card3.png'
import CardSlide4 from '../../../Assets/images/card4.png'
import CardSlide5 from '../../../Assets/images/card5.png'

const CardSlide = () => {
    return (
        <div>
            <h2 className='Tcompany text-2xl uppercase text-center py-10'>Your Trusted Companies</h2>
            <div className=' grid lg:grid-cols-5 grid-cols-3 justify-items-center px-32 mx-auto '>
                <img className='opacity-80 cursor-pointer hover:opacity-100 ' src={CardSlide1} alt="" />
                <img className='opacity-80 cursor-pointer hover:opacity-100 ' src={CardSlide2} alt="" />
                <img className='cursor-pointer hover:opacity-100 ' src={CardSlide3} alt="" />
                <img className='opacity-80 cursor-pointer hover:opacity-100 ' src={CardSlide4} alt="" />
                <img className='opacity-80 cursor-pointer hover:opacity-100 ' src={CardSlide5} alt="" />
                {/* <img className='opacity-50 cursor-pointer hover:opacity-100 ' src={CardSlide5} alt="" /> */}
            </div>
        </div>
    );
};

export default CardSlide;