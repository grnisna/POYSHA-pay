import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const User = () => {
    const [user, setUser] = useState({

    });

    const { name, phoneNumber, email, balance } = user;
    const { id } = useParams();
    useEffect(() => {
        userInfo();
    }, []);
    const userInfo = async () => {
        const res = await axios.get(`http://localhost:5000/user/${user.id}`);
        setUser(res.data)
    };
    console.log(user);
    return (

        <div className='mx-5'>
            <div class="card w-full bg-base-100 shadow-xl">
                <h1 className="text-2xl">User Id: {id}</h1>
                <div class="card-body">
                    <h2 class="card-title">Name: {name}</h2>
                    <p>Contact No:{phoneNumber}</p>
                    <p>Email:{email}</p>
                    <p>Balance: ${balance}</p>
                    <div class="card-actions justify-end">
                        <Link class="btn btn-secondary" to="/dashboard/admin"
                        >Back</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default User;