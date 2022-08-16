import React from "react";
import people1 from "../../../../Assets/images/people1.png";
import people2 from "../../../../Assets/images/people2.png";
import people3 from "../../../../Assets/images/people3.png";

import Review from "./Review";
const ReviewData = () => {
 
  const reviews = [
    {
      _id: 1,
      name: "Aleeksa Le",
      review:
        "PoyshaPay is really great service. They really care about clients and always super ready to help with issues. I only had great experience working with PoyshaPay unlike other services like that.",
      location: "california",
      img: people1,
    },
    {
      _id: 2,
      name: "Nana Abenyin",
      review:
        "I have been working with PoyshaPay for the last few years and have had absolutely no issues with them.The only thing is that the it take quite a bit of time to get a live agent to speak to when you have an issue but when you finally get one on board, it's a smooth experience. I'll definitely recommend PoyshaPay.",
      location: "Michelle Luna",
      img: people2,
    },
    {
      _id: 3,
      name: "Billy Windham",
      review:
        "The customer service lady that helped me was fantastic this is the model of every company should use. Knowledgeable new how to assist me with curiosity respect kindness. She's best service I have had Thank you for having wonderful person",
      location: "Las Vegas",
      img: people3,
    },
    {
      _id: 4,
      name: "Aleeksa Le",
      review:
        "Best Experience using their service for…FREELANCING.Best Experience using their service for business.I got a problem with sending and they helped in fixing it as soon as Possible.",
      location: "california",
      img: people1,
    },
    {
      _id: 5,
      name: "Nana Abenyin",
      review:
        "Very patient! Nice professional manner very helpful and wanted to help. Knew what she was talking about. A pleasure to work with. You’re lucky to have her for your customer service!",
      location: "Las Vegas",
      img: people2,
    },
    {
      _id: 6,
      name: "Rene' Wilmoth",
      review:
        "I'm using PoyshaPay since 2015 and I am very pleased with my experience. I've had to do a lot of operations, receive/change cards, etc, and in no point of the interaction was I displeased. Customer support is quick to respond and relevant. The pricing is very transparent, there were no surprises. Very happy with PoyshaPay.",
      location: "Las Vegas",
      img: people3,
    },
  ];
 
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Customers Review</h4>
          <h2 className="text-3xl">What our Customers say</h2>
        </div>
    
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default ReviewData;
