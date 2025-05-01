import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

import Hero from "../Components/Hero/Hero";
import Produits from "../Components/Produits/Produits";
import Footer from "../Components/Footer/Footer";
import Features from "../Components/Features/Features";
import { useNews } from "../context/NewsContext";
import { useProduct } from "../context/ProductContext";

export default function Home({ handleOrderPopup }) {
  const { loading, news, fetchNews } = useNews();
  const { products, setLimit, fetchProducts, setCategoryId } = useProduct();

  // Définition des états pour ordinateurs et téléphones
  const [ordinateurs, setOrdinateurs] = useState([]);
  const [telephones, setTelephones] = useState([]);

  // Au montage, on charge tous les produits (limit = 1000) et on remet categoryId à 0 (tout)
  useEffect(() => {
    fetchNews();
    setLimit(1000);
    setCategoryId(0);
  }, []);


  // Une fois les produits chargés, on filtre pour extraire ordinateurs et téléphones
  useEffect(() => {
    if (!loading && products?.length > 0) {
      // Filtre ordinateurs : si le nom de la catégorie contient "nateur"
      const ordis = products.filter((product) =>
        product.category?.name?.toLowerCase()?.includes("nateur")
      );
      // Filtre téléphones : si le nom de la catégorie contient "phone"
      const tels = products.filter((product) =>
        product.category?.name?.toLowerCase()?.includes("phone")
      );

      setOrdinateurs(ordis);
      setTelephones(tels);
    }
  }, [loading, products]);

  // Si on est encore en train de charger ou qu'on n'a pas de produits/news, on affiche un loader
  if (loading || !products || !news) {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
        </div>
      </div>
    );
  }

  // Sinon, on affiche la page d'accueil
  return (
    <div className="w-full min-h-screen overflow-hidden dark:bg-slate-800 dark:text-white">
      <Hero news={news} handleOrderPopup={handleOrderPopup} />
      <Produits ordinateurs={ordinateurs} telephones={telephones} />
      <Features />
      <Footer />
    </div>
  );
}
