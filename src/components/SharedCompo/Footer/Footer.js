import React from 'react';
import { BsFacebook, BsTwitter, BsPinterest, BsLinkedin, BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';


const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div className='bg-violet-800 shadow-2xl mt-10  text-white' >
            <footer className="footer px-20 py-4 border-t  border-base-300">
                <div className="items-center grid-flow-col">
                    <p className='text-2xl font-bold uppercase'>Poysha-pay.</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className='grid grid-flow-col gap-4 mx-auto justify-between items-center'>
                        <a className='text-2xl bg-blue-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.google.com'><BsFacebook /></a>
                        <a className='text-2xl bg-blue-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.google.com'><BsTwitter /></a>
                        <a className='text-2xl bg-blue-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.google.com'><BsPinterest /></a>
                        <a className='text-2xl bg-blue-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.google.com'><BsLinkedin /></a>
                    </div>
                </div>
            </footer>
            <footer className="footer py-10 lg:px-20 bg-violet-500 mx-auto shadow-2xl text-white font-bold ">

                <div>
                    <span className="text-xl uppercase">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="text-xl uppercase">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Media</a>
                </div>
                <div>
                    <span className="text-xl uppercase">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <a className="link link-hover">Data Security</a>

                </div>
                <div >
                    <h1 className='text-xl uppercase '>
                        Follow us</h1>
                    <span className='w-48'>
                        To make your life easier Download Nagad app and <br />access all our services from a single touch point.
                    </span>
                    <div className='lg:flex lg:gap-4 mb-2  '>
                        <button className='btn btn-sm  rounded-full bg-black'><FaGooglePlay className=' text-green-400' />  Google Play</button>
                        <button className='btn btn-sm  rounded-full bg-black'><BsApple className=' text-grey-400' />  Apple Store</button>
                    </div>

                </div>
                <div>
                    <span className="text-xl uppercase">Newsletter</span>
                    <div className="form-control  w-60">
                        <label className="label">
                            <span className="">Enter your email address hear and get every update of the features via Email. </span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered rounded-lg w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>
            <div className='bg-violet-800 text-white font-bold'>
                <p className='text-center p-5'><p>All Rights Received || Copyright &copy; {getYear()} - Team Cyber-6 </p></p>
            </div>
        </div>
    );
};

export default Footer;