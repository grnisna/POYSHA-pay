import React from 'react';
import { BsFacebook, BsTwitter, BsPinterest, BsLinkedin, BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './SubFooter.css';

// import logo from '../../../Assets/poyshaLogo/poyshalogo.png';
import footerLogo from '../../../Assets/poyshaLogo/poyshalogo.png';


const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div className='backColor text-white pt-10 pb-2' >
            <div className='flex justify-between items-center  '>

                <hr />
                <div className='logoArea flex items-center'>

                    <img className='w-10' src={footerLogo} alt="" />
                    <NavLink to='/' className="logoArea btn btn-ghost lg:ml-1 ml-[-50px] lg:text-2xl font-bold uppercase text-xl" >POYSHA-pay</NavLink>
                </div>
                <hr />
                <div>
                    <div className="md:place-self-center md:justify-self-end  mx-auto">
                        <div className='grid grid-flow-col gap-4 mx-auto justify-between items-center'>
                            <a className='text-2xl bg-blue-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.google.com'><BsFacebook /></a>
                            <a className='text-2xl bg-blue-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.twitter.com'><BsTwitter /></a>
                            <a className='text-2xl bg-blue-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.printerest.com'><BsPinterest /></a>
                            <a className='text-2xl bg-blue-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.linkedin.com'><BsLinkedin /></a>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <footer className="footer py-10 lg:px-20  mx-auto shadow-2xl text-white font-bold ">

                <div className=' mx-auto'>
                    <span className="text-xl uppercase lg:pl-10">Services</span>
                    <a href='/' className="link link-hover lg:pl-10">Branding</a>
                    <a href='/' className="link link-hover lg:pl-10">Design</a>
                    <a href='/' className="link link-hover lg:pl-10">Marketing</a>
                    <a href='/' className="link link-hover lg:pl-10">Advertisement</a>
                </div>
                <div className='mx-auto'>
                    <span className="text-xl uppercase lg:pl-10">Company</span>
                    <a href='/' className="link link-hover lg:pl-10">About us</a>
                    <a href='/' className="link link-hover lg:pl-10">Contact</a>
                    <a href='/' className="link link-hover lg:pl-10">Blogs</a>
                    <a href='/' className="link link-hover lg:pl-10">Media</a>
                </div>
                <div className='mx-auto'>
                    <span className="text-xl uppercase lg:pl-10">Legal</span>
                    <a href='/' className="link link-hover lg:pl-10">Terms of use</a>
                    <a href='/' className="link link-hover lg:pl-10">Privacy policy</a>
                    <a href='/' className="link link-hover lg:pl-10">Cookie policy</a>
                    <a href='/' className="link link-hover lg:pl-10">Data Security</a>

                </div>

            </footer>


            <div className=' text-white font-bold flex justify-between items-center px-10 py-1'>
                <p className='text-center '><p>All Rights Received || Copyright &copy; {getYear()} - Team Cyber-6 </p></p>
                <p>Terms || Privacy</p>
            </div>
        </div>
    );
};

export default Footer;