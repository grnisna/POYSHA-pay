import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardNav.css'
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
import Setting from '../../../Assets/DashboardNav/settings.png';
import Logout from '../../../Assets/DashboardNav/log-out.png';

const DashboardNav = () => {
  return (
    <div className='dashboard-nav'>
      <div className="navLinks">
        <ul className='routeLinks p-5'>
          <li className='flex items-center navItem'>
            <img src={DashboardIcon} alt="" />
            <Link to='index'>Dashboard</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={Account} alt="" />
            <Link to='myAccount'>My Account</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={SendMoney} alt="" />
            <Link to='sendMoney'>Send Money</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={AddMoney} alt="" />
            <Link to='addMoney'>Add Money</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={AddMoneyRequest} alt="" />
            <Link to='RequestMoney'>Request Money</Link>
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
            <Link to='Calculator'>Calculator</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={TransitionHistory} alt="" />
            <Link to='TransitionHistory'>Transition History</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={TakeLone} alt="" />
            <Link to='takeLone'>Take Lone</Link>
          </li>
          <li className='flex items-center navItem'>
            {/* <img src={TakeLone} alt="" /> */}
            <Link to='addReview'>Add Review</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={SupportTicket} alt="" />
            <Link to='SupportTicket'>Support Ticket</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={Setting} alt="" />
            <Link to='Setting'>Setting</Link>
          </li>
          <li className='flex items-center navItem'>
            <img src={Logout} alt="" />
            <Link to='LogOut'>LogOut</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNav;