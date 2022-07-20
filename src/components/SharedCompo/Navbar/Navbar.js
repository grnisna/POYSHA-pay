import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar  bg-white border-b-2 border-violet-600  lg:px-40 text-violet-700 uppercase font-bold  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2   bg-blue-500 rounded-box w-64 ">
                            <li><a>Offers</a></li>
                            <li tabIndex="0">
                                <a className="justify-between">
                                    Service
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>My poisa</a></li>
                            <li><a>About us</a></li>
                            <li><a>Contact</a></li>


                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold uppercase" href='/'>POYSHA-pay</a>

                </div>
                <div className='navbar-center'>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><a>Offers</a></li>
                            <li tabIndex="0">
                                <a>
                                    Service
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>My poisa</a></li>
                            <li><a>About us</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>


                <div className="navbar-end">
                    <ul><button className="btn rounded-2xl btn-outline mx-5 btn-ghost">Log in</button> </ul>
                    <ul><a className="btn rounded-2xl btn-active bg-violet-600" href='/'>Get started</a> </ul>

                    {/* <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label> */}
                    {/* <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li><NavLink to='/profile'>Profile</NavLink> </li>


                        <li><NavLink to='/setting'>Setting</NavLink> </li>



                        <li>
                            <button className="btn btn-active btn-ghost" onClick={logOut} >Sign Out</button> 

                            <NavLink to='/login' >Login</NavLink>
                        </li>

                    </ul> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;