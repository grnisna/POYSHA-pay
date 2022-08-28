import { async } from '@firebase/util';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AddMoneyModal = () => {
 const [addMoney, setAddMoney] = useState(null)

 useEffect(() => {
  const fetchAddMoney = async () => {
   const response = await fetch('http://localhost:4000/dashboard')
   const json = await response.json()

   if (response.ok) {
    setAddMoney(json)
   }
  }
  fetchAddMoney();
 }, [])
 return [addMoney, setAddMoney]
};

export default AddMoneyModal;