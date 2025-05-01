import React, { useEffect, useState } from 'react';
import ProductCard from "../../Components/Produits/ProductCard";
import { useProduct } from '../../context/ProductContext';
import { useCategory } from '../../context/CategoryContext';


const OrdiPage = () => {


  // import des Produits et categorie
  const {loading, products, setLimit, totalPages, currentPage, setCurrentPage, setCategoryId} = useProduct();
  // les miges des limit et categoryId

  useEffect(() => {
    setLimit(20);
    setCategoryId(2);
  }, [setLimit, setCategoryId]);
  
  // 🔹 Génération dynamique des marques en ajoutant "products" dans les dépendances
  const [marks, setMarks] = useState(["All"]);
  useEffect(() => {
    if (products.length > 0) {
      const uniqueMarks = Array.from(
        new Set(products.map((product) => product.mark.toLowerCase()))
      );
      setMarks(["All", ...uniqueMarks]); // Inclure "All" pour tout afficher
    }
  }, [products]); // Déclenche l'effet à chaque changement de products

  const [selectedMark, setSelectedMark] = useState(["All"]);

  


  // Ajoutez d'autres produits ici...
  

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setSelectedMark(['All']);
    } else {
      const newSelectedMark = selectedMark.includes('All')
        ? [category]
        : selectedMark.includes(category)
        ? selectedMark.length > 1
          ? selectedMark.filter(mark => mark !== category)
          : selectedMark
        : [...selectedMark, category];

      setSelectedMark(newSelectedMark.length ? newSelectedMark : ['All']);
    }
  };

  const filteredProducts = products.filter((product) => selectedMark.includes('All') || selectedMark.includes(product.mark.toLowerCase()));


   // Fonctions pour la pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Optionnel : Générer les numéros de pages
  

  return (
    loading?
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
      </div>
    </div>
    :
    <div className='w-[90%] mx-auto py-[100px] bg-transparent dark:text-white'>
      <div className=" min-h-screen mb-[100px] flex flex-col md:flex-row gap-4 ">
        <div className="w-[30%] flex flex-col space-y-4">
          <h1 className="text-3xl font-bold mb-8">Ordinateurs</h1>
          <div className="w-full md:w-64 space-y-6">
            <h2 className="text-lg font-semibold mb-2">Catégorie</h2>
            <ul className="space-y-2 ">
              {marks.map((mark) => (
                <li key={mark} className="flex items-center">
                  <input
                    type="checkbox"
                    id={mark}
                    className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedMark.includes(mark)}
                    onChange={() => handleCategoryChange(mark)}
                  />
                  <label htmlFor={mark} className="text-gray-700 dark:bg-slate-800 dark:text-white ">{mark}</label>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        <div className="w-full grid sm:grid-cols-sm:productPage grid-cols-productPage  gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
            />
          ))}
        </div>


      </div>
      <div className="w-full mx-auto flex items-center justify-center mt-8 space-x-2">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded-md ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Précédent
        </button>
        <generatePageNumbers />
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded-md ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Suivant
        </button>
    </div>
    </div>
  );
};

export default OrdiPage;