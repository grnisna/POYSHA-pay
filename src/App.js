
import Home from "./components/Home/Home";

import AppDownload from "./components/Pages/HomePage/AppDownload";
import Footer from "./components/SharedCompo/Footer/Footer";
import Navbar from "./components/SharedCompo/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <AppDownload></AppDownload>
      <Footer></Footer>

    </div>
  );
}

export default App;
