import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ReactStars from 'react-rating-stars-component';
import swal from 'sweetalert';


const AddReview = () => {
    const [user, loading] = useAuthState(auth)
    console.log(user)
    const [currentRating, setCurrentRating] = useState(0)
    const ratingChanged = (rating) => {
        setCurrentRating(rating)
    }

    const handleFeedback = e => {
        e.preventDefault();
        const review = {
            name: user?.displayName,
            //photo: user?.photoURL,
            feedback: e.target.feedback.value,
            rating: currentRating
        }
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                swal({
                    icon: "success",
                    text: "Feedback  Successful Added"
                });
            })
        e.target.reset();
    }

    return (
        <div className='mb-12 text-base bg-slate-300 py-20'>

            <div className='flex  justify-center'>
                <div className="mt-8  stack">
                    <div className="card shadow-2xl bg-white ">
                        <h1 className='mt-12 text-center font-bold text-3xl'>Your Feedback</h1>
                        <div className="card-body">
                            <div className='flex justify-center'>
                                <ReactStars
                                    size={40}
                                    isHalf={true}
                                    activeColor='goldenrod'
                                    onChange={ratingChanged}
                                />
                            </div>
                            <form onSubmit={handleFeedback}>

                                <p class="text-xl">What is your Feedback?</p>
                                <textarea name='feedback' className=" textarea mt-2 input-lg  border-4 border-black  w-96" placeholder="Please add your feedback here"></textarea><br />

                                <input className='w-full btn-sm btn btn-primary mt-3' type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;