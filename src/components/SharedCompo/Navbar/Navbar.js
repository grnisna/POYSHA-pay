import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Assets/poyshaLogo/poyshalogo.png';
import './Navbar.css'


const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location?.state?.from?.pathname|| '/';


  const menu = <>
    <li className='z-50' tabIndex="0">
      <a className="justify-between">
        Service
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
      </a>

      <ul className="p-2 bg-white border">
        <li><NavLink to='/sendMoney' >Send Money</NavLink></li>
        <li><NavLink to='/addMoney' >Add Money from Bank</NavLink></li>
        <li><NavLink to='/BankTransfer' >Add Money From Card</NavLink></li>
        <li><NavLink to='/addAccount' >Add Account</NavLink></li>
        <li><a>Recharge</a></li>
      </ul>
    </li>
  </>





  const logOut = () => {
    signOut(auth);
    // localStorage.removeItem('AccessToken');
    navigate('/login');
    window.localStorage.removeItem('AccessToken');
  }

  const navMenu = <>
    <Link to='/dashboard' className='nav-btn btn btn-sm px-5 rounded-full btn-active text-secondary border-0 hover:text-white bg-white hover:bg-primary content-center'>Explore</Link>
    <Link to='/dashboard' className='nav-btn btn btn-sm px-5 rounded-full btn-active text-secondary border-0 hover:text-white bg-white hover:bg-primary content-center'>AboutUs</Link>
    <Link to='/dashboard' className='nav-btn btn btn-sm px-5  rounded-full btn-active text-secondary border-0 hover:text-white bg-white hover:bg-primary content-center'>FAQs</Link>
    <Link to='/dashboard' className='nav-btn btn btn-sm px-5  rounded-full btn-active text-secondary border-0 hover:text-white bg-white hover:bg-primary content-center'>Support</Link>
  </>


  return (
    <nav className='lg:pt-2 ' >
      <div className="navbar  bg-white border-b-primary lg:px-40 text-violet-700 uppercase font-medium">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navMenu}
            </ul>
          </div>
          <Link to="/" className=" lg:ml-1 ml-[-50px] lg:text-md font-semibold uppercase text-primary lg:flex  hidden " >POYSHAPAY</Link>
        </div>
        <div className='navbar-center'>
          <div className=" hidden lg:flex">
            {navMenu}

          </div>
        </div>
        <div className="navbar-end lg:pr-0 pr-6">
          <ul>
            {
              user ?
                <button className='btn lg:btn-sm btn-xs rounded-full btn-active bg-secondary text-white ' onClick={logOut}  >Logout</button>
                : <div className='flex items-center justify-center gap-2'>
                  <Link to="/login" className="nav-btn btn lg:btn-sm btn-xs px-5 rounded-full btn-active btn-outline">Log in</Link>
                  <Link to='/signUp' className=" btn lg:btn-sm btn-xs rounded-full btn-active bg-primary hover:bg-secondary border-0 text-white" href='/'>Get started</Link>
                </div>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;