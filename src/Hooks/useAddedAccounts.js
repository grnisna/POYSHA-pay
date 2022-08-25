import React, { useEffect, useState } from 'react';

const useAddedAccounts = () => {
    const [addedAccount, setAddedAccounts] = useState([]);
    useEffect(() => {
        fetch('https://powerful-basin-90376.herokuapp.com/addedAccount')
            .then(res => res.json())
            .then(data => setAddedAccounts(data));
    }, []);
    return [addedAccount, setAddedAccounts]
};

export default useAddedAccounts;
