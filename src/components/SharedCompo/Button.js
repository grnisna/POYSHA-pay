import React from 'react';

const Button = ({ children }) => {
    return (
        <div className="btn  w-96 uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</div>
    );
};

export default Button;