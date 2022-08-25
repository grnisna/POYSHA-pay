
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import SignUp from "./components/Auth/SignUp/SignUp";
import Home from "./components/Pages/HomePage/Home";
import AddMoney from "./components/Services/AddMoney";
import Footer from "./components/SharedCompo/Footer/Footer";
import Navbar from "./components/SharedCompo/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SendMoney from "./components/Dashboard/Shared/SendMoney";
import OthersAccounts from "./components/Dashboard/OthersAccounts/OthersAccounts";
import Dashboard from "./components/Dashboard/MyAccount/Dashboard";
import ViewAllTransaction from "./components/Dashboard/Shared/ViewAllTransaction/ViewAllTransaction";
// import SendMoney2 from "./components/Dashboard/Shared/SendMoney2";

import TakeLone from "./components/Dashboard/TakeLone/TakeLone";
import DashboardOverView from "./components/Dashboard/MyAccount/DashboardOverView";
import StripePayment from "./components/Hooks/Stripe/StripePayment";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import ContactUS from "./components/Pages/ContactUS/ContactUS";
import Calculate from "./components/Calculator/Calculate";
import UserImages from "./components/Pages/HomePage/UserImages";
import Setting from "./components/Dashboard/MyAccount/Setting";
import AddMoneyFromBank from "./components/Services/AddMoneyFromBank";







function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>



        <Route path='/addMoney' element={<RequireAuth>
          <AddMoney />
        </RequireAuth>}>
        </Route>
        <Route path='/BankTransfer' element={<RequireAuth>
          <StripePayment />
        </RequireAuth>}>
        </Route>
        {/* <Route path='/addMoneyFromBank' element={
          <AddMoneyFromBank />
        }>
        </Route> */}


        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
        </Route>




        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<DashboardOverView />}></Route>
          <Route path="dashboard" element={<SendMoney />}></Route>
          <Route path="myAccount" element={<SendMoney />}></Route>
          <Route path="sendMoney" element={<SendMoney />}></Route>
          <Route path="addMoney" element={
            <AddMoney></AddMoney>
          }></Route>
          <Route path="addAccount" element={<OthersAccounts />}></Route>
          <Route path="RequestMoney" element={<AddMoney />}></Route>
          <Route path="BankTransfer" element={<StripePayment />}></Route>
          <Route path="addMoney" element={<AddMoney />}></Route>
          <Route path="addMoneyFromBank" element={<AddMoneyFromBank />}></Route>
          <Route path="Calculator" element={<Calculate></Calculate>}></Route>
          <Route path="TransitionHistory" element={<ViewAllTransaction></ViewAllTransaction>}></Route>
          <Route path="takeLone" element={<TakeLone />}></Route>
          <Route path="ContactUS" element={<ContactUS></ContactUS>}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="SupportTicket" element={<TakeLone />}></Route>
          {/* <Route path="Setting" element={<UserImages />}></Route> */}
          <Route path="Setting" element={<Setting />}></Route>
          <Route path="LogOut" element={<TakeLone />}></Route>
        </Route>
        <Route path='/addMoney' element={<RequireAuth><AddMoney /> </RequireAuth>}></Route>
        <Route path='/sendMoney' element={<RequireAuth><SendMoney /></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth> <Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path='/addAccount' element={<RequireAuth> <OthersAccounts></OthersAccounts> </RequireAuth>}></Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
