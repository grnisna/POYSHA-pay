import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';
import Loading from '../../SharedCompo/Loading';
import { useQuery } from 'react-query'


const DBUserData = () => {

  const [user] = useAuthState(auth)
  const userEmail = user?.email;
  const [userData, setUserData] = useState([])



  // const { data: userDataQuery } = useQuery('userData',
  //   axios.get(`http://localhost:4000/user/${userEmail}`)
  //     .then(response => {
  //       if (response?.error) {
  //         toast.error(`${response?.error}`)
  //       }
  //       if (response?.data) {
  //         setUserData(response?.data);
  //       }
  //     })

  // )



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