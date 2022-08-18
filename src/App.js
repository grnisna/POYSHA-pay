

// import AppDownload from "./components/Pages/HomePage/AppDownload";

import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";

import Home from "./components/Pages/HomePage/Home";
import AddMoney from "./components/Services/AddMoney";
import Footer from "./components/SharedCompo/Footer/Footer";
import Navbar from "./components/SharedCompo/Navbar/Navbar";
import SendMoney from "./components/Dashboard/Shared/SendMoney";
import OthersAccounts from "./components/Dashboard/OthersAccounts/OthersAccounts";
import Dashboard from "./components/Dashboard/MyAccount/Dashboard";
import RechargeMoney from "./components/Services/RechargeMoney";

import AddReview from "./components/Pages/AddReview/AddReview";

import ContactUS from "./components/Pages/ContactUS/ContactUS";

import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import Calculate from "./components/Calculator/Calculate";

import SubFooter from './components/SharedCompo/Footer/SubFooter';
import ViewAllTransaction from "./components/Dashboard/Shared/ViewAllTransaction/ViewAllTransaction";
// import SendMoney2 from "./components/Dashboard/Shared/SendMoney2";
import DashboardNav from "./components/Dashboard/DashboardNav/DashboardNav";
import TakeLone from "./components/Dashboard/TakeLone/TakeLone";
import DashboardOverView from "./components/Dashboard/MyAccount/DashboardOverView";
import StripePayment from "./components/Hooks/Stripe/StripePayment";





function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<DashboardOverView />}></Route>
          <Route path="dashboard" element={<SendMoney />}></Route>
          <Route path="myAccount" element={<SendMoney />}></Route>
          <Route path="sendMoney" element={<SendMoney />}></Route>
          {/* <Route path="addMoney" element={<AddMoney />}></Route> */}
          <Route path="addAccount" element={<OthersAccounts />}></Route>
          <Route path="RequestMoney" element={<AddMoney />}></Route>
          <Route path="BankTransfer" element={<StripePayment />}></Route>
          <Route path="addMoney" element={<AddMoney />}></Route>
          <Route path="Calculator" element={<AddMoney />}></Route>
          <Route path="TransitionHistory" element={<ViewAllTransaction></ViewAllTransaction>}></Route>
          <Route path="takeLone" element={<TakeLone />}></Route>
          <Route path="ContactUS" element={<ContactUS />}></Route>
          <Route path="SupportTicket" element={<TakeLone />}></Route>
          <Route path="Setting" element={<TakeLone />}></Route>
          <Route path="LogOut" element={<TakeLone />}></Route>
        </Route>
        <Route path='/addMoney' element={<RequireAuth><AddMoney /> </RequireAuth>}></Route>
        <Route path='/sendMoney' element={<RequireAuth><SendMoney /></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth> <Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path='/addAccount' element={<RequireAuth> <OthersAccounts></OthersAccounts> </RequireAuth>}></Route>

        <Route path='/rechargeMoney' element={<RequireAuth> <RechargeMoney></RechargeMoney></RequireAuth>}></Route>
        <Route path='/ContactUS' element={<ContactUS />}></Route>
        <Route path='/addReview' element={<AddReview />}></Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/resetpassword' element={<ResetPassword />}></Route>
        <Route path='/calculate' element={<Calculate />}></Route>
      </Routes>
      <Footer />



    </div>
  );
}

export default App;