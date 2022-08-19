import React from 'react';

const UserImage = ({ userimage }) => {
    console.log(userimage);
    return (
        <div className='card w-68 bg-base-200 shadow-xl py-3'>
            <div className=' grid justify-items-center items-center '>
                <div> <h2 className='text-3xl uppercase py-2'>{userimage?.name}</h2></div>
                <div className="avatar">
                    <div className='w-24 rounded-full'>
                        <img src={userimage?.img} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserImage;