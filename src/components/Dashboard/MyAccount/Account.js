import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import './Account.css'
import './MyAccount.css'
import Services from "./Services";
import axios from 'axios';
import DBUserData from "../../Hooks/UserData/DBUserData";

const Account = () => {
  const [services, setServices] = useState([])
  const [userData, setUserData] = DBUserData()
  useEffect(() => {
    fetch('Services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  console.log("Hey i got the user data", userData);

  return (

    <div className="account grid lg:grid-cols-3 lg:grid-flow-row-dense py-10  gap-10 px-10 bg-slate-200">
      <div className="card w-100 bg-base-100 shadow-xl lg:col-span-2 justify-center">

        <div className="account-info grid lg:grid-cols-2  p-5 m-5 justify-center justify-items-center items-center">
          <div className="type">
            <div className="account">
              <div className="account-num">
                <div className="">
                  <p className="account-section-title lg:text-left text-center">Main Account</p>
                  <div className="">
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
          <div className="account-founds grid ">
            <div className=" grid lg:justify-end justify-center">
              <p className="account-section-title lg:text-left text-center">Account Founds</p>
              <div className="">
                <h1 className="founds text-green-500 lg:text-left text-center">
                  {userData?.balance}
                  <span className="money-type">, 39 $</span>
                </h1>
              </div>
            </div>
            <div className="account-btn lg:flex  lg:hidden  ">
              <div className="transfer-btn  ">
                <button className=" dsh-btn lg:btn-lg btn-sm p-0 text-sm">Transfer Money</button>
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
      <div className="card bg-base-100 shadow-xl justify-center p-4">
        <div className="account-info col-span-1 lg:p-3 p-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-14  justify-center">

          {
            services.map(service => <Services
              service={service}
              key={service.servicesLogo}
            ></Services>)
          }
        </div>
      </div>
    </div>
  );
};

export default Account;
