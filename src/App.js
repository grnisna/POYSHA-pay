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


function App() {
  return (
    <div>
      <Navbar></Navbar>
<<<<<<< HEAD
      {/* <DashboardNav></DashboardNav> */}
      {/* <SendMoney></SendMoney> */}
=======
>>>>>>> 3d7dedfe00c8a7fd5a6ce4001ea3928335de56f9
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addMoney' element={<RequireAuth>
          <AddMoney />
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
