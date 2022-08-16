import React from 'react';
import { BsFacebook, BsTwitter, BsPinterest, BsLinkedin, BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
<<<<<<< HEAD
import './Footer.css'
import ScrollToTop from "react-scroll-to-top";
=======

import './Footer.css';
// import MessengerCustomerChat from "react-messenger-customer-chat";
>>>>>>> 0b8face25d91c879a87d07da21226b595a80df88


const Footer = () => {

    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div className='text-primary bg-secondary' >
<<<<<<< HEAD
            <ScrollToTop smooth top="2000" />
=======
>>>>>>> 0b8face25d91c879a87d07da21226b595a80df88
            <footer className="footer  py-10 lg:px-20 mx-auto text-white font-normal">

                <div className=' mx-auto content-footer '>
                    <span className="text-xl uppercase lg:pl-10 font-medium">Services</span>
                    <a href='/' className="link link-hover lg:pl-10">Branding</a>
                    <a href='/' className="link link-hover lg:pl-10">Design</a>
                    <a href='/' className="link link-hover lg:pl-10">Marketing</a>
                    <a href='/' className="link link-hover lg:pl-10">Advertisement</a>
                </div>
                <div className='mx-auto content-footer'>
                    <span className="text-xl uppercase lg:pl-10 font-medium">Company</span>
                    <a href='/' className="link link-hover lg:pl-10">About us</a>
                    <a href='/' className="link link-hover lg:pl-10">Contact</a>
                    <a href='/' className="link link-hover lg:pl-10">Blogs</a>
                    <a href='/' className="link link-hover lg:pl-10">Media</a>
                </div>
                <div className='mx-auto content-footer'>
                    <span className="text-xl uppercase lg:pl-10 font-medium">Legal</span>
                    <a href='/' className="link link-hover lg:pl-10">Terms of use</a>
                    <a href='/' className="link link-hover lg:pl-10">Privacy policy</a>
                    <a href='/' className="link link-hover lg:pl-10">Cookie policy</a>
                    <a href='/' className="link link-hover lg:pl-10">Data Security</a>

                </div>
                <div className='w-full '>
                    <div className="grid justify-start">
                        <h1 className='text-xl uppercase lg:text-left mx-auto'>
                            Follow us
                        </h1>
                        <span className='w-48 mx-auto'>
                            To make your life easier Download Nagad app and <br />access all our services from a single touch point.
                        </span>
                        <div className='lg:flex lg:gap-4 mb-2 mx-auto'>
                            <button className='btn btn-sm  rounded-full bg-black'><FaGooglePlay className=' text-green-400' />  Google Play</button>
                            <button className='btn btn-sm  rounded-full bg-black'><BsApple className=' text-grey-400' />  Apple Store</button>
                        </div>
                    </div>

                </div>
                <div className='w-full'>
                    <span className="text-xl uppercase mx-auto">Newsletter</span>
                    <div className="form-control  w-60 mx-auto">
                        <label className="label">
                            <span className="">Enter your email address and get every update of the features via Email. </span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered rounded-lg w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>

            <div className='bg-primary text-white text-sm'>
                <p className='text-center py-4'><p>All Rights Received || Copyright &copy; {getYear()} - Team Cyber-6 </p></p>
            </div>


            {/* <MessengerCustomerChat
                pageId="104407232378992"
                appId="5433920909987628"
            /> */}

            </div>
            );
};

            export default Footer;