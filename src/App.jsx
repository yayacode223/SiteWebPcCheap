import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import DashBoard from "./admin/pages/DashBoard"
import Header from "./admin/components/Header"
import Products from './Components/Produits/Produits';
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer"; 
import Apropos from "./Components/Apropos/Apropos";


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
          <Route index path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
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

