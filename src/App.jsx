import React from "react";
import { Routes, Route } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

//import des pages de la partie client
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";

// les pages de la partie admin
import DashBoard from "./admin/pages/DashBoard";
import Header from "./admin/components/Header";
import Apropos from "./pages/Apropos";
import Login from "./pages/Login";
import Registre from "./pages/Registre";

import OrdiPage from "./pages/Ordinateurs/OrdiPage";
import PhonePage from "./pages/PhonePage.jsx/Phonepage";
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
        <Route
          path="/"
          element={<Navbar handleOrderPopup={handleOrderPopup} />}
        >
          <Route
            index
            path="/"
            element={<Home handleOrderPopup={handleOrderPopup} />}
          />
          <Route path="Apropos" element={<Apropos />} />
          <Route path="/ordinateurs" element={<OrdiPage />} />
          <Route path="/telephones" element={<PhonePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registre" element={<Registre />} />
        </Route>

        <Route path="/admin" element={<Header />}>
          <Route index path="dashboard" element={<DashBoard />} />
        </Route>
      </Routes>

      {/* <div className="bg-white dark:bg-gray-900 dark:text-white w-full h-full duration-200" >
        
        
      </div> */}
    </>
  );
};

export default App;
