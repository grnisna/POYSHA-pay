import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillStar } from 'react-icons/ai';

const Review = () => {
  const [reviews, setReviews] = useState([]);



  useEffect(() => {
    const url = 'https://powerful-basin-90376.herokuapp.com/addReview';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        console.log(reviews);
      })
  }, [reviews])

  return (
    <div className="w-full mx-auto mt-10">
      <h2 className="text-center text-3xl font-bold text-primary">Our Clint Says </h2>
      <div className="  grid lg:grid-cols-3 mt-5 sm:grid-cols-1  gap-10 justify-items-center">
        {
          reviews.slice(0, 6).map(review =>
            // console.log(parseInt(review.star))
            <div className="card w-96 bg-base-100 p-5 shadow-2xl">
              <div className="flex  justify-between px-2">
                <img className="avatar w-20 rounded-full" src="https://placeimg.com/192/192/people" alt="user" />
                <div className="flex flex-col justify-evenly items-center ">
                  <p className="text-xl font-bold">  {review.userName}</p>
                  <p className="text-yellow-500 font-bold">Rating: {review.star}</p>
                  {/* <p className="text-yellow-700"><AiFillStar values={parseInt(review.star)} /></p> */}
                </div>
              </div>
              <div className=" mt-5 text-center ">
                <span className="text-xs ">{review.Reference}</span>
              </div>
            </div>
          )}
      </div>
      <div className="flex justify-end mx-5">

        <button className="btn btn-link  content-center justify-items-center  btn-lg">


       See More....


        </button>
        </div>
    </div>





  );
};

export default Review;
