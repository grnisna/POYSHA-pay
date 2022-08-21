import React, { useEffect, useState } from 'react';
import User from './User';


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
        <div>
            <h2 className='p-10'>we are users</h2>
            <h3 className='p-10'>{users.length}</h3>

            {
                users.map(user => <User
                    key={user._id}
                    user={user}
                ></User>)
            }

        </div>
    );
};

export default Users;