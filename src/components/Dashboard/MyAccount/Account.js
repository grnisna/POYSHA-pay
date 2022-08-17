import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import './Account.css'
import './MyAccount.css'
import Services from "./Services";

const Account = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('Services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (

    <div className="account grid lg:grid-cols-3 lg:grid-flow-row-dense py-10  gap-10 px-10 bg-slate-200">
      <div className="card w-100 bg-base-100 shadow-xl lg:col-span-2 justify-center">

        <div className="account-info grid lg:grid-cols-2  p-5 m-5 justify-center justify-items-center items-center">
          <div className="type">
            <div className="account">
              <div className="account-num">
                <div className="">
                  <p className="account-section-title">Main Account</p>
                  <div className="">
                    <h1 className="account-title">
                      Poisha - Pay Personal Account
                    </h1>
                    <div className="account-number grid grid-cols-1 items-center">
                      <h5 className="account-id">880 1886 627 127</h5>
                      {/* <FaArrowRight className='left-arrow' /> */}
                    </div>
                  </div>
                  <div className="account-btn flex lg:flex hidden">
                    <div className="transfer-btn ">
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
              <p className="account-section-title">Account Founds</p>
              <div className="">
                <h1 className="founds">
                  500.55
                  <span className="money-type">, 39 $</span>
                </h1>
              </div>
            </div>
            <div className="account-btn flex  lg:hidden sm:flex ">
              <div className="transfer-btn ">
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


      <div className ="card bg-base-100 shadow-xl justify-center p-4">
        <div className="account-info col-span-1 m-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4 justify-center">

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
