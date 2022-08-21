import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Assets/poyshaLogo/poyshalogo.png';


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
        <li><NavLink to='/addMoney' >Add Money</NavLink></li>
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


  return (
    <nav className='lg:py-2' >
      <div className="navbar  bg-white border-b-primary lg:px-14 text-violet-700 uppercase font-medium">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2   bg-white w-32 border">
              {menu}

              <li><NavLink to='/dashboard'>My poisa</NavLink></li>
              <li><a>About us</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <NavLink to="/" ><img src={logo} className="w-12 lg:visible invisible " alt="" /></NavLink>
          <NavLink to="/" className="lg:ml-1 ml-[-50px] lg:text-md font-semibold uppercase " >POYSHA-PAY</NavLink>

        </div>
        <div className='navbar-center'>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {menu}

              <li><NavLink to='/dashboard'>My poysha</NavLink></li>
              <li><a>About us</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>


        <div className="navbar-end">


          <ul>
            {
              user ?
                <button className='btn btn-sm rounded-full btn-active btn-outline border-violet-600 invisible lg:visible hover:text-violet-600 hover:bg-white hover:border-violet-600' onClick={logOut}  >Logout</button>
                : <div className='flex items-center justify-center gap-2'>

                  <NavLink to="/login" className="btn btn-sm rounded-full btn-active btn-outline border-violet-600 invisible lg:visible hover:text-violet-600 hover:bg-white hover:border-violet-600">Log in</NavLink>
                  <NavLink to='/signUp' className="btn btn-sm rounded-full btn-active bg-primary border-0 text-white" href='/'>Get started</NavLink>

                </div>

            }

          </ul>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;