import React from 'react';
import './DashboardNav.css'
import man from '../../../Assets/smiling.png'

const DashboardNav = () => {
    return (
        <div className='py-20'>
            <h2>this is DashboardNav</h2>
            <div className='dashnav mx-3 px-5 grid grid-cols-1 lg:grid-cols-3 gap-36'>
                <div className='image'> <img src={man} alt="" /></div>
                <div className='nav'>
                    <ul>
                        <li><a href="#">My Profile</a></li>
                        <li><a href="#">My Profile</a></li>
                        <li><a href="#">My Profile</a></li>
                        <li><a href="#">My Profile</a></li>

                    </ul>
                </div>
                <div className='navlogin row-end-7 '>
                    <ul>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Log in</a>
                            <ul>
                                <li><a href="#">Name</a></li>
                                <li><a href="#">Address</a></li>
                                <li><a href="#">Phone</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default DashboardNav;