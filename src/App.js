import DashboardNav from "./components/Dashboard/Shared/DashboardNav";
import SendMoney from "./components/Dashboard/Shared/SendMoney";
import Home from "./components/Pages/HomePage/Home";
import Footer from "./components/SharedCompo/Footer/Footer";
import Navbar from "./components/SharedCompo/Navbar/Navbar";
import Login from "./components/Auth/Login/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/Auth/SignUp/SignUp";
import Account from "./components/Dashboard/MyAccount/Account";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <DashboardNav></DashboardNav> */}
      {/* <SendMoney></SendMoney> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='/MyAccount' element={<Account></Account>}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
