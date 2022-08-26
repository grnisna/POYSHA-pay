import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const DBUserData = () => {

  const [userData, setUserData] = useState([])
  const [user] = useAuthState(auth)

  const userEmail = user?.email;

  useEffect(() => {
    if (userEmail) {

      axios.get(`http://localhost:5000/users/${userEmail}`)

      axios.get(`https://powerful-basin-90376.herokuapp.com/users/${userEmail}`)


        .then(response => {
          setUserData(response?.data[0]);
        })
    }
  }, [userEmail])

  return [userData, setUserData]
};

export default DBUserData;