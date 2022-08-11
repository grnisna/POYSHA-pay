import React from 'react';
import { BsFacebook, BsTwitter, BsPinterest, BsLinkedin, BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';

import './Footer.css';
// import MessengerCustomerChat from "react-messenger-customer-chat";


const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div className='text-primary bg-secondary' >
            {/* <footer className="footer px-14 py-4 border  border-base-300">
                <div className="items-center grid-flow-col  mx-auto">
                    <p className='text-2xl font-bold uppercase'>Poysha-pay.</p>
                </div>
                <div className="md:place-self-center md:justify-self-end  mx-auto">
                    <div className='grid grid-flow-col gap-4 mx-auto justify-between items-center'>
                        <a className='text-2xl bg-blue-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.google.com'><BsFacebook /></a>
                        <a className='text-2xl bg-blue-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.twitter.com'><BsTwitter /></a>
                        <a className='text-2xl bg-blue-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.printerest.com'><BsPinterest /></a>
                        <a className='text-2xl bg-blue-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.linkedin.com'><BsLinkedin /></a>
                    </div>
                </div>
            </footer> */}

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