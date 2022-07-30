import React from 'react';

const Navbar = () => {
    return (

        <div>
            <nav>
                <div className="navbar  bg-white rounded-2xl  border-b-2 border-violet-600  lg:px-40 text-violet-700 uppercase font-bold  ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2   bg-violet-500 text-white rounded-box w-48 ">
                                <li><a href='/'>Offers</a></li>
                                <li tabIndex="0">
                                    <a className="justify-between" href='/'>Service</a>
                                </li>
                                <li><a href='/'>My poisa</a></li>
                                <li><a href='/'>About us</a></li>
                                <li><a href='/'>Contact</a></li>


                            </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl font-bold uppercase" href='/'>POYSHA-pay</a>

                    </div>
                    <div className='navbar-center'>
                        <div className=" hidden lg:flex">
                            <ul className="menu menu-horizontal p-0">
                                <li><a href='/'>Offers</a></li>
                                <li tabIndex="0">
                                    <a href='/'>Service </a>
                                </li>
                                <li><a href='/'>My poisa</a></li>
                                <li><a href='/'>About us</a></li>
                                <li><a href='/'>Contact</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="navbar-end">
                        <ul><button className="btn rounded-2xl btn-outline mx-5 btn-ghost">Log in</button> </ul>
                        <ul><a className="btn rounded-2xl btn-active bg-violet-600" href='/'>Get started</a> </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;