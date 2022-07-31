import DashboardNav from "./components/Dashboard/Shared/DashboardNav";
import SendMoney from "./components/Dashboard/Shared/SendMoney";

import Home from "./components/Pages/HomePage/Home";
import Footer from "./components/SharedCompo/Footer/Footer";
import Navbar from "./components/SharedCompo/Navbar/Navbar";
import Account from "./components/Dashboard/MyAccount/Account"
import LinkedAccounts from "./components/Dashboard/MyAccount/LinkedAccounts";
import ShortHistory from "./components/Dashboard/ShortTransHistory/ShortHistory";


function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Home></Home>
      <Footer></Footer>
      <Account></Account>
      <LinkedAccounts></LinkedAccounts>
      <ShortHistory></ShortHistory>

    </div>
  );
}

export default App;
