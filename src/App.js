
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
<<<<<<< HEAD
import RechargeMoney from "./components/Services/RechargeMoney";

import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import Calculate from "./components/Calculator/Calculate";

import SubFooter from './components/SharedCompo/Footer/SubFooter';
import ViewAllTransaction from "./components/Dashboard/Shared/ViewAllTransaction/ViewAllTransaction";

=======
import ViewAllTransaction from "./components/Dashboard/Shared/ViewAllTransaction/ViewAllTransaction";
>>>>>>> 9e8d2451aee14847670e52d1a84dc7ca41ae361a
// import SendMoney2 from "./components/Dashboard/Shared/SendMoney2";

import TakeLone from "./components/Dashboard/TakeLone/TakeLone";
import DashboardOverView from "./components/Dashboard/MyAccount/DashboardOverView";
import AddReview from "./components/Dashboard/AddReview/AddReview";





function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>



<<<<<<< HEAD
=======
        <Route path='/addMoney' element={<RequireAuth>
          <AddMoney />
        </RequireAuth>}>
        </Route>


        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
        </Route>




>>>>>>> 9e8d2451aee14847670e52d1a84dc7ca41ae361a
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<DashboardOverView />}></Route>
          <Route path="dashboard" element={<SendMoney />}></Route>
          <Route path="myAccount" element={<SendMoney />}></Route>
          <Route path="sendMoney" element={<SendMoney />}></Route>
          <Route path="addMoney" element={<AddMoney />}></Route>
          <Route path="addAccount" element={<OthersAccounts />}></Route>
          <Route path="RequestMoney" element={<AddMoney />}></Route>
          <Route path="BankTransfer" element={<AddMoney />}></Route>
          <Route path="addMoney" element={<AddMoney />}></Route>
          <Route path="Calculator" element={<AddMoney />}></Route>
          <Route path="TransitionHistory" element={<ViewAllTransaction></ViewAllTransaction>}></Route>
          <Route path="takeLone" element={<TakeLone />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="SupportTicket" element={<TakeLone />}></Route>
          <Route path="Setting" element={<TakeLone />}></Route>
          <Route path="LogOut" element={<TakeLone />}></Route>
        </Route>
<<<<<<< HEAD

        <Route path='/addMoney' element={<RequireAuth><AddMoney /> </RequireAuth>}></Route>
=======
        {/* <Route path='/addMoney' element={<RequireAuth><AddMoney /> </RequireAuth>}></Route> */}
>>>>>>> 9e8d2451aee14847670e52d1a84dc7ca41ae361a
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
