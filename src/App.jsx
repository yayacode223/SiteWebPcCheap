import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import DashBoard from "./admin/pages/DashBoard"
import Header from "./admin/components/Header"
import Apropos from "./pages/Apropos";
import Footer from "./Components/Footer/Footer"; 



const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800, 
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>

    <Routes>
        <Route path="/" element={<Navbar handleOrderPopup={handleOrderPopup} />}>
          <Route index path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />y
          <Route  path="Apropos" element={<Apropos />} />
        </Route>

      

        <Route path='/admin' element={<Header/>}>
          <Route index path='dashboard' element={<DashBoard/>} />
        </Route>
    </Routes>
    

      {/* <div className="bg-white dark:bg-gray-900 dark:text-white w-full h-full duration-200" >
        
        
      </div> */}

    
    </>
  )
}

export default App;

