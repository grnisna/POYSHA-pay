
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Rating from 'react-rating';
import { FaQuoteLeft } from 'react-icons/fa';

const Review = ({ review }) => {
  return (
    <div class="card  bg-slate-300  p-20 shadow-2xl">
      <FaQuoteLeft className='text-5xl -mt-20' />
      <div class="flex mt-10  justify-between px-10">
        <img className="avatar w-20 rounded-full" src="https://placeimg.com/192/192/people" alt="user" />
        <div className="flex flex-col justify-evenly items-center ">
          <p className="text-xl font-bold">  {review?.name}</p>
          {/* <p className="text-xl font-bold">  Bangladesh</p> */}

          <Rating
            initialRating={review.rating}
            emptySymbol={<AiFillStar style={{ color: 'gray', fontSize: '25px' }} />}
            fullSymbol={<AiFillStar style={{ color: 'goldenrod', fontSize: '25px' }} />}
            readonly
          ></Rating>
        </div>
      </div>
      <div class=" mt-5 text-center ">
        <span className=" text-lg ">{review?.feedback}</span>
      </div>
    </div>


  );
};

export default Review;

