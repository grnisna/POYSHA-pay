import React, { useEffect, useState } from 'react';

const useAddedAccounts = () => {
    const [addedAccount, setAddedAccounts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/addedAccount')
            .then(res => res.json())
            .then(data => setAddedAccounts(data));
    }, []);
    return [addedAccount, setAddedAccounts]
};

export default useAddedAccounts;
