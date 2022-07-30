import DashboardNav from "./components/Dashboard/Shared/DashboardNav";
import SendMoney from "./components/Dashboard/Shared/SendMoney";
import CardSlide from "./components/Pages/HomePage/CardSlide";

import Home from "./components/Pages/HomePage/Home";
import Users from "./components/Pages/HomePage/Users";
import Footer from "./components/SharedCompo/Footer/Footer";
import Navbar from "./components/SharedCompo/Navbar/Navbar";

function App() {
  return (
    <div>
      <h1 className="text-center">The POYSHA-pay is F-Commerce Wallet</h1>
      <CardSlide></CardSlide>
      <Navbar />
      <Home></Home>
      <Users></Users>
      <DashboardNav></DashboardNav>
      <SendMoney></SendMoney>
      <Footer />
    </div>
  );
}

export default App;
