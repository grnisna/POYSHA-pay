import { async } from '@firebase/util';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AddMoneyModal = () => {
 const [addMoney, setAddMoney] = useState(null)

 useEffect(() => {
  const fetchAddMoney = async () => {
   const response = await fetch('https://powerful-basin-90376.herokuapp.com/dashboard')
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