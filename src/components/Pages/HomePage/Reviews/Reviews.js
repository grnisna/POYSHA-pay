import axios from 'axios';
import Carousel from "nuka-carousel";
import React, { useEffect, useState } from 'react';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const url = `http://localhost:5000/addReview`;


    useEffect(() => {
        const allReview = async () => {
            const { data } = await axios.get(url, {
            })
            setReviews(data)
        }
        allReview();
    }, [url])

    return (
        <div className='my-12'>
            <h1 className='text-center text-5xl font-bold mb-3'>What Our Client Says</h1>

            <div className='w-3/4  mx-auto mt-10 '>
                <Carousel
                    slidesToShow={1}
                    autoplay
                    renderCenterLeftControls={({ previousSlide }) => (
                        <button onClick={previousSlide}>
                            <HiOutlineChevronDoubleLeft className='text-primary text-4xl font-bold' />
                        </button>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <button onClick={nextSlide}>
                            <HiOutlineChevronDoubleRight className='text-primary text-4xl font-bold' />
                        </button>
                    )}
                    renderBottomCenterControls={false}
                >
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }

                </Carousel>
            </div>

        </div>
    );
};

export default Reviews;