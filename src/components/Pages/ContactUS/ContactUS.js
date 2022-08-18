import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import bglogin2 from "../../../Assets/bg-login2.jpg";
import contactf from "../../../Assets/SVG/contact.23fbd6d6.svg"

const ContactUS = () => {

  const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault();

   emailjs
     .sendForm(
       "mugdho@72",
       "template_z5yzx8o",
       form.current,
       "aGSC7EmhR02srlfQA"
     )
     .then(
       (result) => {
         console.log(result.text);
       },
       (error) => {
         console.log(error.text);
       }
   );
   e.target.reset();
 };

  return (
    <div
      className="flex justify-center bg-primary px-10 py-14 "
      style={{ backgroundImage: `url(${bglogin2})` }}
    >
      <form ref={form} onSubmit={sendEmail}>
        <div className="lg:w-96 md:w-96 sm:w-96 shadow-xl bg-clip-padding backdrop-filter  bg-opacity-20 backdrop-blur-md py-10 px-8 rounded-md">
          <div className="card-body items-center text-center">
            <input
              required
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-md"
            />
            <input
              required
              type="email"
              name="user_email"
              placeholder="Your Email Address"
              className="input input-bordered w-full max-w-md"
            />
            <textarea
              required
              name="message"
              className="textarea input-bordered  w-full max-w-md"
              placeholder="Your message"
              rows={6}
            ></textarea>

            <input
              className="btn btn-primary w-full max-w-xs"
              type="submit"
              value="Send"
            />
          </div>
        </div>
      </form>
      <div className="flex">
        <img src={contactf} alt="" />
      </div>
    </div>
  );
};

export default ContactUS;
