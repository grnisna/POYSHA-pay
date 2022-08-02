import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Assets/poyshaLogo/poyshalogo.png';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const logOut = () => {
        signOut(auth);
        navigate('/login');
        // localStorage.removeItem('accessToken');
    }

    // if(user){
    //     navigate('/')
    // }

    return (
        <nav>
            <div className="navbar  bg-white border-b-2 lg:px-14 text-violet-700 uppercase font-bold">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2   bg-white w-32 border">
                            <li><a>Offers</a></li>
                            <li tabIndex="0">
                                <a className="justify-between">
                                    Service
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-white border">
                                    <li><a>Send Money</a></li>
                                    <li><a>Add Money</a></li>
                                    <li><a>Recharge</a></li>
                                </ul>
                            </li>
                            <li><a>My poisa</a></li>
                            <li><a>About us</a></li>
                            <li><a>Contact</a></li>


                        </ul>
                    </div>
                    <img src={logo} className="w-12 lg:visible invisible " alt="" />
                    <a className="btn btn-ghost lg:ml-1 ml-[-50px] lg:text-2xl font-bold uppercase text-xl" href='/'>POYSHA-pay</a>

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
                                <ul className="p-2 bg-white border z-10">
                                    <li><a>Send Money</a></li>
                                    <li><a>Add Money</a></li>
                                    <li><a>Recharge</a></li>
                                </ul>
                            </li>
                            <li><a>My poisa</a></li>
                            <li><a>About us</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>


                <div className="navbar-end">
                    <ul>
                    {
                            user ?
                                <button className='btn btn-secondary' onClick={logOut}  >Logout</button>
                                : <div className='flex items-center justify-center gap-2'>

                                    <NavLink to="/login" className="btn lg:w-24 w-14 rounded-2xl btn-active btn-outline border-violet-600 invisible lg:visible hover:text-violet-600 hover:bg-white hover:border-violet-600">Log in</NavLink>

                                    <NavLink to='/signUp' className="btn lg:w-24 w-20 rounded-2xl btn-active btn-outline border-violet-600 hover:text-violet-600 hover:bg-white hover:border-violet-600" href='/'>Get started</NavLink>
                                </div>

                        }
                    </ul>
                    
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