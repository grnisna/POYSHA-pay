import React, { useEffect, useState } from 'react';
import UserImage from './UserImage';


const UserImages = () => {
    const [userImages, setUserImage] = useState([])
    useEffect(() => {
        fetch('https://powerful-basin-90376.herokuapp.com/userimage', {
            method: 'GET',

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setUserImage(data)
            })
    }, [])
    return (
        <div>
            {/* <h2>{userImages.length}</h2> */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-5'>
                {
                    userImages.slice(0,2).map(userimage => <UserImage
                        key={userimage._id}
                        userimage={userimage}
                    ></UserImage>)
                }
            </div>
        </div>
    );
};

export default UserImages;