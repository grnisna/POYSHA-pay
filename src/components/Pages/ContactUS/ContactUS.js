import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import bglogin2 from "../../../Assets/bg-login2.jpg";
import contactf from "../../../Assets/SVG/contact.23fbd6d6.svg"
import swal from 'sweetalert';
import './ContactUs.css';

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
          swal("Mail Sent", "Check Your Email Please", "success");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className=" contactUs flex justify-evenly items-center bg-slate-200 px-10 py-14 "
    // style={{ backgroundImage: `url(${bglogin2})` }}
    >
      <div className="contactImage">
        <img className="w-full" src={contactf} alt="" />
      </div>

      <form className="bg-white shadow-xl rounded-md" ref={form} onSubmit={sendEmail}>
        <h1 className="text-center pt-4 text-2xl font-bold">Contact With Us</h1>
        <div className="lg:w-96 md:w-96 sm:w-96 shadow-xl bg-clip-padding backdrop-filter   backdrop-blur-md py-4 px-8 rounded-md">
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



    </div>
  );
};

export default ContactUS;
