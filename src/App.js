import Home from "./components/Pages/HomePage/Home";
import Footer from "./components/SharedCompo/Footer/Footer";
import Navbar from "./components/SharedCompo/Navbar/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">The POYSHA-pay is F-Commerce Wallet</h1>
      <Home></Home>
      <Footer />
    </div>
  );
}

export default App;
