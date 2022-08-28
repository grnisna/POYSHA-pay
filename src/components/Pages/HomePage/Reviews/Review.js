
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








//   return (
//     <div className="w-full mx-auto mt-10">
//       <h2 className="text-center text-3xl font-bold text-primary">Our Clint Says </h2>
//       <div className="  grid lg:grid-cols-3 mt-5 sm:grid-cols-1  gap-10 justify-items-center">
//        {
//           reviews.slice(0, 6).map(review =>
//             // console.log(parseInt(review.star))
//             <div class="card w-96 bg-base-100 p-5 shadow-2xl">
//               <div class="flex  justify-between px-2">
//                 <img className="avatar w-20 rounded-full" src="https://placeimg.com/192/192/people" alt="user" />
//                 <div className="flex flex-col justify-evenly items-center ">
//                   <p className="text-xl font-bold">  {review.userName}</p>
//                   <p className="text-yellow-500 font-bold">Rating: {review.star}</p>
//                   {/* <p className="text-yellow-700"><AiFillStar values={parseInt(review.star)} /></p> */}
//                 </div>
//               </div>
//               <div class=" mt-5 text-left ">
//                 <span className="text-xs  ">{review.Reference}</span>
//               </div>
//             </div>
//           )}
//       </div>
//
//     </div>
//   );
// };

// export default Review;