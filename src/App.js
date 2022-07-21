import Home from "./components/Pages/HomePage/Home";
import AppDownload from "./components/Pages/HomePage/AppDownload";
import Footer from "./components/SharedCompo/Footer/Footer";
import Navbar from "./components/SharedCompo/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home></Home>
      <Footer />
    </div>
  );
}

export default App;
