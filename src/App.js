<<<<<<< HEAD
// import AppDownload from "./components/Pages/HomePage/AppDownload";
=======
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
>>>>>>> e80776bfe95c041d7afca0638e21cb4fe0d1a0be
import Home from "./components/Pages/HomePage/Home";
import AddMoney from "./components/Services/AddMoney";
import Footer from "./components/SharedCompo/Footer/Footer";
import Navbar from "./components/SharedCompo/Navbar/Navbar";
<<<<<<< HEAD
=======
import { ToastContainer } from 'react-toastify';
import SendMoney from "./components/Dashboard/Shared/SendMoney";
import OthersAccounts from "./components/Dashboard/OthersAccounts/OthersAccounts";
import Dashboard from "./components/Dashboard/MyAccount/Dashboard";
import RechargeMoney from "./components/Services/RechargeMoney";
// import SendMoney2 from "./components/Dashboard/Shared/SendMoney2";

>>>>>>> e80776bfe95c041d7afca0638e21cb4fe0d1a0be

function App() {
  return (
    <div>
<<<<<<< HEAD
      {/* <AppDownload></AppDownload> */}
      <Navbar />
      <Home></Home>
      <Footer />
=======
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addMoney' element={<RequireAuth><AddMoney /> </RequireAuth>}></Route>
        <Route path='/sendMoney' element={<RequireAuth><SendMoney /></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth> <Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path='/addAccount' element={<RequireAuth> <OthersAccounts></OthersAccounts> </RequireAuth>}></Route>
        <Route path='/rechargeMoney' element={<RequireAuth> <RechargeMoney></RechargeMoney></RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />

>>>>>>> e80776bfe95c041d7afca0638e21cb4fe0d1a0be
    </div>
  );
}

export default App;
