import React, { useState } from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-clos-1'>
            <div className="nav rounded-md ">
                <DashboardNav className=''></DashboardNav>
            </div>
            <div className="sections lg:col-span-5 md:col-span-2 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;