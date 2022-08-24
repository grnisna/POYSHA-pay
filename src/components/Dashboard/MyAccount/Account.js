import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import './Account.css'
import './MyAccount.css'
import Services from "./Services";
import axios from 'axios';
import DBUserData from "../../Hooks/UserData/DBUserData";
import { Link } from "react-router-dom";

const dashCardBg = `https://eduvibe.react.devsvibe.com/static/media/home-two-cta.73d10bc1e4f1217dd528.jpg`

const Account = () => {
  const [services, setServices] = useState([])
  const [userData, setUserData] = DBUserData()

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  useEffect(() => {
    fetch('Services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  console.log("Hey i got the user data", userData);



  return (

    <div className="account grid lg:grid-cols-3 lg:grid-flow-row-dense py-10  gap-10 px-6 bg-slate-200">
      <div className="card w-100 bg-base-100 shadow-xl lg:col-span-2 justify-center">

        <div className="account-info grid lg:grid-cols-2  p-5 m-5 justify-center justify-items-center">
          <div className="type">
            <div className="account">
              <div className="account-num">
                <div className="">
                  <p className="account-section-title lg:text-left text-center">Main Account</p>
                  <div className="">
<<<<<<< HEAD
                    <h1 className="account-title">
                      Personal Account
                    </h1>
                    <div className="account-number grid grid-cols-1 items-center">
                      <h5 className="account-id font-medium">{userData?.name}</h5>
                      <h5 className="account-id">{userData?.phone}</h5>
                      <h5 className="account-id">{userData?.email}</h5>
                      {/* <FaArrowRight className='left-arrow' /> */}
                    </div>
                  </div>
                  <div className="account-btn lg:flex hidden">
                    <div className="transfer-btn ">
                      <Link to='sendMoney' className=" dsh-btn">Transfer Money</Link>
=======
                    <h1 className="account-title lg:text-left text-center">
                      Poysha - Pay Personal Account
                    </h1>
                    <div className="account-number grid grid-cols-1 items-center">
                      <h5 className="account-id lg:text-left text-center">{userData?.email}</h5>
                      {/* <FaArrowRight className='left-arrow' /> */}
                    </div>
                  </div>
                  <div className="account-btn flex lg:flex hidden">
                    <div className="transfer-btn  ">
                      <button className=" dsh-btn">Transfer Money</button>
>>>>>>> e39c2ebe53af9a87468629203505746010ae5270
                    </div>
                    <div className="link-account pl-2">
                      <button className="link-btn dsh-btn">
                        Link Bank Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="account-founds grid justify-end ">
            <div className=" grid lg:justify-end justify-start">
              <p className="account-section-title h-0">Account Founds</p>
=======
          <div className="account-founds grid ">
            <div className=" grid lg:justify-end justify-center">
              <p className="account-section-title lg:text-left text-center">Account Founds</p>
>>>>>>> e39c2ebe53af9a87468629203505746010ae5270
              <div className="">
                <h1 className="founds text-green-500 lg:text-left text-center">
                  {userData?.balance}
                  <span className="money-type">USD</span>
                </h1>
                {/* <h1 className="founds">
                  {userData?.balance}
                  <span className="money-type">ERU</span>
                </h1>
                <h1 className="founds">
                  {userData?.balance}
                  <span className="money-type">BDT</span>
                </h1> */}
              </div>
            </div>
<<<<<<< HEAD
            <div className="account-btn flex  lg:hidden sm:flex ">
              <div className="transfer-btn ">
                <Link to='sendMoney' className=" dsh-btn">Transfer Money</Link>
=======
            <div className="account-btn lg:flex  lg:hidden  ">
              <div className="transfer-btn  ">
                <button className=" dsh-btn lg:btn-lg btn-sm p-0 text-sm">Transfer Money</button>
>>>>>>> e39c2ebe53af9a87468629203505746010ae5270
              </div>
              <div className="link-account pl-2">
                <button className="link-btn dsh-btn ">
                  Link Bank Account
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
<<<<<<< HEAD

      <div className="card bg-base-100 shadow-xl justify-center px-4"
        style={{
          backgroundImage: `url(${dashCardBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >


        <lottie-player
          style={{
          }}
          id="firstLottie"
          ref={ref}
          autoplay
          background="transparent"
          mode="normal"
          src="https://lottie.host/8715199c-6c62-4319-bdb8-4f08a51199d7/h2wdQMWm0m.json"
        ></lottie-player>
        {/* <div className="account-info col-span-1 m-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4 justify-center">
=======
      <div className="card bg-base-100 shadow-xl justify-center p-4">
        <div className="account-info col-span-1 lg:p-3 p-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-14  justify-center">
>>>>>>> e39c2ebe53af9a87468629203505746010ae5270

          {
            services.map(service => <Services
              service={service}
              key={service.servicesLogo}
            ></Services>)
          }
        </div> */}
      </div>
    </div>
  );
};

export default Account;
