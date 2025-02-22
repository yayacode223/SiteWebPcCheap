import React from "react";
import { Routes, Route } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import ProtectedRoute from "./protection/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { ProductsProvider } from "./context/ProductContext";
import { NewsProvider } from "./context/NewsContext";

//import des pages de la partie client
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";

// les pages de la partie admin
import DashBoard from "./admin/pages/DashBoard";
import Header from "./admin/components/Header";
import Apropos from "./pages/Apropos";
import Login from "./pages/Login";
import Registre from "./pages/Registre";

import AddCategory from "./admin/pages/categories/AddCategory";
import AddProduct from "./admin/pages/products/AddProduct";
import EditProduct from "./admin/pages/products/EditProduct";
import ListProducts from "./admin/pages/products/ListProducts";
import ShowProduct from "./admin/pages/products/ShowProduct";
import ListUser from "./admin/pages/users/ListUser";
import AddPromos from "./admin/pages/promotion/AddPromos";
import EditerPromos from "./admin/pages/promotion/EditerPromos";
import ListPromos from "./admin/pages/promotion/ListPromos";

import OrdiPage from "./pages/Ordinateurs/OrdiPage";
import PhonePage from "./pages/PhonePage.jsx/Phonepage";
import { CategoryProvider } from "./context/CategoryContext";


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
    <AuthProvider>
      <CategoryProvider>
        <ProductsProvider>
          <NewsProvider>
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
                <Route path="/register" element={<Registre />} />
              </Route>
            

              <Route path='/admin' element={<ProtectedRoute><Header/></ProtectedRoute>}>
                <Route index path='dashboard' element={<DashBoard/>} />

                <Route index path='categories' element={<AddCategory/>} />

                <Route path="liste-produits" element={<ListProducts/>} />
                <Route path="ajouter-produit" element={<AddProduct/>} />
                <Route path="editer-produit/:produitId" element={<EditProduct/>} />
                <Route path="afficher-produit/:produitId" element={<ShowProduct/>} />


                <Route path="liste-promos" element={<ListPromos/>} />
                <Route path="ajouter-promos" element={<AddPromos/>} />
                <Route path="editer-promos/:promosId" element={<EditerPromos/>} />


                <Route path="liste-utilisateurs" element={<ListUser/>} />
              </Route>
            </Routes>
            
          </NewsProvider>
        </ProductsProvider>
      </CategoryProvider>
    </AuthProvider>

      {/* <div className="bg-white dark:bg-gray-900 dark:text-white w-full h-full duration-200" >
        
        
      </div> */}
    </>
  );
};

export default App;
