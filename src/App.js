

// import AppDownload from "./components/Pages/HomePage/AppDownload";

import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";

import Home from "./components/Pages/HomePage/Home";
import AddMoney from "./components/Services/AddMoney";
import Footer from "./components/SharedCompo/Footer/Footer";
import Navbar from "./components/SharedCompo/Navbar/Navbar";

import { ToastContainer } from 'react-toastify';
import SendMoney from "./components/Dashboard/Shared/SendMoney";
import OthersAccounts from "./components/Dashboard/OthersAccounts/OthersAccounts";
import Dashboard from "./components/Dashboard/MyAccount/Dashboard";
import RechargeMoney from "./components/Services/RechargeMoney";
import AddReview from "./components/Pages/AddReview/AddReview";

import ContactUS from "./components/Pages/ContactUS/ContactUS";
// import SendMoney2 from "./components/Dashboard/Shared/SendMoney2";



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addMoney' element={<RequireAuth><AddMoney /> </RequireAuth>}></Route>
        <Route path='/sendMoney' element={<RequireAuth><SendMoney /></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth> <Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path='/addAccount' element={<RequireAuth> <OthersAccounts></OthersAccounts> </RequireAuth>}></Route>
        <Route path='/rechargeMoney' element={<RequireAuth> <RechargeMoney></RechargeMoney></RequireAuth>}></Route>
        <Route path='/ContactUS' element={<ContactUS />}></Route>
        <Route path='/addReview' element={<AddReview />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />



    </div>
  );
}

export default App;
