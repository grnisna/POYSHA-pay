import React, { useEffect, useState } from 'react';

const BankNames = () => {
    const [banksNames, setBanksNames] = useState([]);

    useEffect(() => {
        fetch('banksName.json')
            .then(res => res.json())
            .then(data => {
                setBanksNames(data)
                //console.log(banksNames.name)
            })
    }, [])

    return [banksNames, setBanksNames];
};

export default BankNames;