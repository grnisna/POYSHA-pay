import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import SignUp from "./components/Auth/SignUp/SignUp";
import Home from "./components/Pages/HomePage/Home";
import AddMoney from "./components/Services/AddMoney";
import Footer from "./components/SharedCompo/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// added new tost 
import { Toaster } from 'react-hot-toast';

//components
import SendMoney from "./components/Dashboard/Shared/SendMoney";
import OthersAccounts from "./components/Dashboard/OthersAccounts/OthersAccounts";
import Dashboard from "./components/Dashboard/MyAccount/Dashboard";


import RechargeMoney from "./components/Services/RechargeMoney";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import SubFooter from './components/SharedCompo/Footer/SubFooter';


import ViewAllTransaction from "./components/Dashboard/Shared/ViewAllTransaction/ViewAllTransaction";




// import SendMoney2 from "./components/Dashboard/Shared/SendMoney2";

import TakeLone from "./components/Dashboard/TakeLone/TakeLone";
import DashboardOverView from "./components/Dashboard/MyAccount/DashboardOverView";
import CurrencyConvert from "./components/CurrencyConvert/CurrencyConvert";
import StripePayment from "./components/Hooks/Stripe/StripePayment";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import ContactUS from "./components/Pages/ContactUS/ContactUS";






// import CurrencyConvert from './components/Dashboard/CurrencyConvert/CurrencyConvert'
// import Calculate from "./components/Calculator/Calculate";


import UserImages from "./components/Pages/HomePage/UserImages";

import Setting from "./components/Dashboard/MyAccount/Setting";

import Faqs from "./components/Dashboard/MyAccount/Faqs";




import Questions from "./components/Pages/HomePage/Questions";
import SettingDemo from "./components/Dashboard/MyAccount/SettingDemo";



function App() {
  return (
    <div>
      <Routes>
        {/* ------------------main menu---------------------  */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/addMoney' element={<RequireAuth>
          <AddMoney />
        </RequireAuth>}>
        </Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
        </Route>



        <Route path='/dashboard' element={

          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>  </Route>

        <Route path='/addMoney' element={<RequireAuth><AddMoney /></RequireAuth>}></Route>
        <Route path='/sendMoney' element={<RequireAuth><SendMoney /></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth> <Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path='/addAccount' element={<RequireAuth> <OthersAccounts></OthersAccounts> </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth> <Dashboard /></RequireAuth>}></Route>
        <Route path="/contactUs" element={<ContactUS></ContactUS>} ></Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>

        <Route path='/resetpassword' element={<ResetPassword />}></Route>

        {/* ---------------Dashboard Menu----------------------- */}
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard> </RequireAuth>}>
          <Route index element={<DashboardOverView />}></Route>
          <Route path="dashboard" element={<SendMoney />}></Route>
          <Route path="myAccount" element={<SendMoney />}></Route>
          <Route path="sendMoney" element={<SendMoney />}></Route>
          <Route path="addMoney" element={<AddMoney></AddMoney>}></Route>
          <Route path="addAccount" element={<OthersAccounts />}></Route>
          <Route path="RequestMoney" element={<AddMoney />}></Route>
          <Route path="BankTransfer" element={<StripePayment />}></Route>
          <Route path="addMoney" element={<AddMoney />}></Route>
          <Route path="CurrencyConvert" element={<CurrencyConvert />}></Route>
          <Route path="TransitionHistory" element={<ViewAllTransaction></ViewAllTransaction>}></Route>
          <Route path="takeLone" element={<TakeLone />}></Route>
          <Route path="ContactUS" element={<ContactUS></ContactUS>}></Route>
          <Route path="Faqs" element={<Faqs></Faqs>}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="SupportTicket" element={<TakeLone />}></Route>
          <Route path="Setting" element={<Setting />}></Route>
          <Route path="Setting" element={<SettingDemo />}></Route>
          <Route path="LogOut" element={<TakeLone />}></Route>
        </Route>
      </Routes>
      <Toaster />
      <ToastContainer />
    </div>
  );
}

export default App;
