import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import Home from "./components/Pages/HomePage/Home";
import AddMoney from "./components/Services/AddMoney";
import Footer from "./components/SharedCompo/Footer/Footer";
import Navbar from "./components/SharedCompo/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Account from "./components/Dashboard/MyAccount/Account";
import SendMoney from "./components/Dashboard/Shared/SendMoney";
import OthersAccounts from "./components/Dashboard/OthersAccounts/OthersAccounts";
import Dashboard from "./components/Dashboard/MyAccount/Dashboard";
import DashboardNav from "./components/Dashboard/DashboardNav/DashboardNav";
import TakeLone from "./components/Dashboard/TakeLone/TakeLone";


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
          <Route index element={<Account></Account>}></Route>
          <Route path="dashboard" element={<SendMoney />}></Route>
          <Route path="sendMoney" element={<SendMoney />}></Route>
          <Route path="addMoney" element={<AddMoney />}></Route>
          <Route path="addAccount" element={<OthersAccounts />}></Route>
          <Route path="RequestMoney" element={<AddMoney />}></Route>
          <Route path="BankTransfer" element={<AddMoney />}></Route>
          <Route path="addMoney" element={<AddMoney />}></Route>
          <Route path="Calculator" element={<AddMoney />}></Route>
          <Route path="TransitionHistory" element={<AddMoney />}></Route>
          <Route path="takeLone" element={<TakeLone />}></Route>
          <Route path="SupportTicket" element={<TakeLone />}></Route>
          <Route path="Setting" element={<TakeLone />}></Route>
          <Route path="LogOut" element={<TakeLone />}></Route>
        </Route>
        {/* <Route path='/addMoney' element={<RequireAuth><AddMoney /> </RequireAuth>}></Route> */}
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
