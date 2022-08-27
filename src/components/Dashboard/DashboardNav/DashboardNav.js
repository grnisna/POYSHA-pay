import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DashboardNav.css'

//dashboard icons
import Home from '../../../Assets/DashboardNav/house.png'
import DashboardIcon from '../../../Assets/DashboardNav/dashboardN.png';
import Account from '../../../Assets/DashboardNav/userN.png';
import SendMoney from '../../../Assets/DashboardNav/sendMoney.png';
import AddMoney from '../../../Assets/DashboardNav/addMoney.png';
import AddMoneyRequest from '../../../Assets/DashboardNav/addMoneyRequest.png';
import BankTransfer from '../../../Assets/DashboardNav/bank-transfer.png';
import AddAccount from '../../../Assets/DashboardNav/addAccount.png';
import Calculator from '../../../Assets/DashboardNav/calculator.png';
import TransitionHistory from '../../../Assets/DashboardNav/invoice.png';
import TakeLone from '../../../Assets/DashboardNav/lones.png';
import SupportTicket from '../../../Assets/DashboardNav/customer-service.png';
import ContactUS from '../../Pages/ContactUS/ContactUS';
import Setting from '../../../Assets/DashboardNav/settings.png';
import Logout from '../../../Assets/DashboardNav/log-out.png';
import FAQs from '../../../Assets/DashboardNav/faqs.png'
import Rating from '../../../Assets/DashboardNav/rating.png'
import LiveChat from '../../../Assets/DashboardNav/live-chat.png'

import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const DashboardNav = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth);
    // localStorage.removeItem('AccessToken');
    navigate('/login');
    window.localStorage.removeItem('AccessToken');
  }

  return (
    <div className='dashboard-nav '>
      <div className="navLinks">
        <ul className='routeLinks px-5 py-2 overflow-y-visibale'>
          <li className='flex items-center navItem'>
            <img src={Home} alt="" />
            <Link to='/'>POYSHAPAY</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={DashboardIcon} alt="" />
            <Link to=''>Dashboard</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={SendMoney} alt="" />
            <Link to='sendMoney'>Send Money</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={AddMoney} alt="" />
            <Link to='addMoneyFromBank'>Add Money</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={AddMoneyRequest} alt="" />
            <Link to='addMoney'>Request Money</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={BankTransfer} alt="" />
            <Link to='BankTransfer'>Transfer Bank</Link></li>
          <li className='flex items-center navItem'>
            <img src={AddAccount} alt="" />
            <Link to='AddAccount'>Add Account</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={Calculator} alt="" />
            <Link to='CurrencyConvert'>CurrencyConvert</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={TransitionHistory} alt="" />
            <Link to='TransitionHistory'>Transition History</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={TakeLone} alt="" />
            <Link to='takeLone'>Paypal</Link>
          </li>

          <li className='flex items-center navItem'>
            <img src={SupportTicket} alt="" />
            <Link to='Faqs'>FAQs</Link>
          </li>

          <li className='flex items-center navItem'>
            <img src={SupportTicket} alt="" />
            <Link to='ContactUS'>ContactUs</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={LiveChat} alt="" />
            <Link to='SupportTicket'>Support Ticket</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={Rating} alt="" />
            <Link to='addReview'>Add Review</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={Setting} alt="" />
            {/* <Link to='Setting'>Setting</Link> */}
            <Link to='Setting'>Setting</Link>
          </li>
        </ul>


      </div>

      <div className='pt-[-5rem]'>
        <div className='lg:[height:1px] bg-primary' />
        <div className="user py-5">
          <div className="user-profile flex gap-4 justify-center justify-items-center items-center">
            <div class="avatar online">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="user-info justify-center ">
              <p className='font-bold'>Alex Dom</p>
              <p className='text-xs'>Bangladesh</p>
            </div>
            <div className="singOut">
              <img src={Logout} onClick={logOut} className="w-6" alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardNav;