import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';

const DBUserData = () => {

  const [userData, setUserData] = useState([])
  const [user] = useAuthState(auth)
  const userEmail = user?.email;

  useEffect(() => {
    if (userEmail) {
      axios.get(`http://localhost:4000/user/${userEmail}`)
        .then(response => {
          if (response?.error) {
            toast.error(`${response?.error}`)
          }
          if (response?.data) {
            setUserData(response?.data);
          }
        })
    }
  }, [userEmail])

  return [userData, setUserData]
};

export default DBUserData;