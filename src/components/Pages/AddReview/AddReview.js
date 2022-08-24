import React from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(watch("register"));
  };
  //   const handleReview = event => {
  //    event.preventDefault();
  //     const name=  event.target.name.value;
  //     console.loge( name);

  // }


  return (
    <div
      className="flex justify-center bg-black px-10 py-14 "

    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body items-center text-center">
            <input
              type="name"
              {...register("name")}
              placeholder="Your Full Name"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="email"
              {...register("email")}
              placeholder="Your Email Address"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="text"
              {...register("text")}
              placeholder="subject"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <textarea
              className="textarea input-bordered w-full max-w-md"
              placeholder="Your message"
              {...register("messageRequired", { required: true })}
              rows={6}
            ></textarea>
            {errors.messageRequired && (
              <p className="text-red-500">This field is required</p>
            )}
            <div className="card-actions">
              <button
                type="submit"
                value="Submit"
                className="btn btn-primary w-full max-w-xs"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* <input
            type="submit"
            value="submit"
            className="btn btn-secondary w-full max-w-xs"
          /> */}
      </form>

    </div>
  );
};

export default AddReview;