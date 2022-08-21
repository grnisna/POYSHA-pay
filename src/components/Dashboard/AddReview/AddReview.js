import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating'
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
//  
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};
const AddReview = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [review, setReview] = useState(null);
    const stars = Array(5).fill(0)

    const [ratingValue, setRatingValue] = useState(0)

    const [user, loading] = useAuthState(auth);



    // const handleClick = value => {
    //     setCurrentValue(value)
    // }

    // const handleMouseOver = newHoverValue => {
    //     setHoverValue(newHoverValue)
    // };

    // const handleMouseLeave = () => {
    //     setHoverValue(undefined)
    // }

    const onSubmit = data => {

        console.log(data);



        const url = `https://powerful-basin-90376.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Review successfully Added')
                reset();
            })
    }


    return (
        <div >
            <div class="card w-96 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="font-bold text-center text-xl">Add review!</h2>

                    <form onSubmit={handleSubmit(onSubmit)}
                        className='w-full'>

                        <input
                            type="text"
                            value={user.displayName}

                            className='input input-bordered w-full'
                            {...register('userName')} />
                        <label class="label">
                            <span class="label-text">Rate Count</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Input rate"
                            className="input input-bordered w-full"
                            {...register("star", {
                                required: {
                                    value: true,
                                    message: 'number is required'
                                },
                                pattern: {
                                    value: /^[1-5]+$/,
                                    message: 'Only Number is allowed'
                                }
                            })}
                        />


                        <label class="label mt-5">
                            <span class="label-text">Give us an feedback</span>
                        </label>
                        <textarea
                            name="feedback" id="" placeholder='Please Give us an feedback'
                            className='border-2 border-base-500 w-full'
                            {...register("Reference", {
                                required: {
                                    value: true,
                                    message: 'feedback is required'
                                },

                            })} />

                        <div class="card-actions  justify-center">
                            <input class="btn btn-primary w-full mt-5 " type="submit" value="submit " />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};




export default AddReview;