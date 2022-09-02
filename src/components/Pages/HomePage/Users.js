import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='px-5'>
            <h2 className='text-2xl text-center text-primary '>Honorable Users:  {users.length} </h2>

            <div class="overflow-x-auto border-none">
                <table class="table table-zebra w-full border-none">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Balance</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody className='border-none'>
                        {
                            users.map((user, index) =>
                                <tr className='border-none'>
                                    <th>{index + 1}</th>

                                    <td> <img className='avatar w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={user.image} alt="user" /></td>
                                    <td>{user.name}</td>
                                    <td> Phone: {user.phoneNumber} <br /> Email: {user.email}</td>

                                    <td>$ {user.balance}</td>
                                    <th>
                                        <Link class="btn btn-secondary" to={`user/${user._id}`}

                                        >Detail</Link>

                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default Users;