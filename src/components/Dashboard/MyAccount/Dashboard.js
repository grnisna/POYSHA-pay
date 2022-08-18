import React, { useState } from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import { Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState([]);

    const [user] = useAuthState(auth)

    const newData = {
        name: user?.displayName,
        email: user?.email,
        password: '',
        address: '',
        phone: '',
        balance: 1000,
        sendMoney: {
            transactionsBy: "bank",
            transactionsType: "debit",
            transactionsAccount: "nurthern2017@gmail.com",
            accountHolderName: "Rifat",
            transactionsAmount: 2000,
            transactionsDateTime: "10/jun/2022 at 05:30PM",
        },
        receiveMoney: {
            transactionsBy: "Paypal",
            transactionsType: "credit",
            transactionsAccount: "simul420@gmail.com",
            accountHolderName: "simul420",
            transactionsAmount: 100,
            transactionsDateTime: "15/mar/2022 at 02:10PM",
        },
        favoriteAccount: {
            nisanAccountInfo: {
                accountHolderName: "Nisan",
                accountHolderEmail: "nisan430@gamil.com",
                accountHolderPhone: "(+880)1886627127",
                accountHolderOrigin: "Bangladesh",
            },
            MehideAccountHolderInfo: {
                accountHolderName: "Mehide",
                accountHolderEmail: "mehide430@gamil.com",
                accountHolderPhone: "(+880)1886627127",
                accountHolderOrigin: "Bangladesh",
            },
        },
    }

    useEffect(() => {

    }, [])
    console.log(newData);


    return (
        <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-clos-1'>
            <div className="nav">
                <DashboardNav></DashboardNav>
            </div>
            <div className="sections lg:col-span-5 md:col-span-2 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;