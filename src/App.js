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
import Account from "./components/Dashboard/MyAccount/Account";
import Dashboard from "./components/Dashboard/Dashboard";


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


        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
        </Route>



        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
