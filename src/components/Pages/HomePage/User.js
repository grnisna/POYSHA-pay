import React from 'react';

const User = ({ user }) => {

    return (
        <div>
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
            <h4>{user.address}</h4>
            <h4>{user.phone}</h4>
            <h4>{user.balance}</h4>
        </div>
    );
};

export default User;