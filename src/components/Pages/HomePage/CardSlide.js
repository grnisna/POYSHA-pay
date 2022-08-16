import React from 'react';
import './CardSlide.css'
import CardSlide1 from "../../../Assets/images/card1.png"
import CardSlide2 from '../../../Assets/images/card2.png'
import CardSlide3 from '../../../Assets/images/card3.png'
import CardSlide4 from '../../../Assets/images/card4.png'
import CardSlide5 from '../../../Assets/images/card5.png'

const CardSlide = () => {
    return (
        <div className='lg:pt-20'>
            <h2 className='Tcompany lg:text-2xl text-l uppercase text-center '>Our Happy panthers</h2>
            <div className=' grid lg:grid-cols-5 grid-cols-3 justify-items-center lg:px-32 px-24 lg:pt-20  gap-3 mx-auto '>
                <img className='opacity-80 cursor-pointer hover:opacity-100 ' src={CardSlide1} alt="" />
                <img className='opacity-80 cursor-pointer hover:opacity-100 ' src={CardSlide2} alt="" />
                <img className='cursor-pointer hover:opacity-100 ' src={CardSlide3} alt="" />
                <img className='opacity-80 cursor-pointer hover:opacity-100 ' src={CardSlide4} alt="" />
                <img className='opacity-80 cursor-pointer hover:opacity-100 ' src={CardSlide5} alt="" />
                <img className='opacity-80 cursor-pointer hover:opacity-100 lg:invisible visible ' src={CardSlide5} alt="" />
                {/* <img className='opacity-50 cursor-pointer hover:opacity-100 ' src={CardSlide5} alt="" /> */}
            </div>
        </div>
    );
};

export default CardSlide;