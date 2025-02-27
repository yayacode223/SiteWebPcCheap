import React, { useState, useEffect, useRef } from 'react'
import { MdLaptopChromebook } from "react-icons/md";
import { useCategory } from '../../../context/CategoryContext';

import { Link } from 'react-router-dom';
import { BiSolidShow } from "react-icons/bi";
import ModalPopUp from '../delete/ModalPopUp';
import { useProduct } from '../../../context/ProductContext';
import { BASE_URL } from '../../../utils/AxiosInstance';




export default function ListProducts() {


    const {categories} = useCategory();

    const {products, setProducts,  currentPage, setCurrentPage, totalPages, setCategoryId, categoryId, loading, setProductId, deleteProduct} = useProduct();


    // systeme de recherche
    const [searchValue, setSearchValue] = useState('');
  const filteredProducts = searchValue
    ? products.filter(product =>
        product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.mark.toLowerCase().includes(searchValue.toLowerCase())
      )
    : products;

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  

  // les états de la pages liste des produits
  const [selectedCategory, setSelectedCategory] = useState('filtrer');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDeleteClick = (productId) => {
    setSelectedProduct(productId);
    setIsModalOpen(true);
  };

  // la logique pour supprimer le produit dans ton état ou base de données
  const confirmDelete = () => {
    try {
      deleteProduct(selectedProduct);
      console.log(`Produit avec ID ${selectedProduct} supprimé`);
    }
    catch(error){
      alert('erreur de suppression: '+error)
    }
    setIsModalOpen(false);
  };

  // 🔹 Pagination sécurisée
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };


  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3; // Nombre max de pages affichées à la fois

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li>
            <a href="#" className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-white'}`}
                onClick={() => setCurrentPage(i)}
            >
                {i}
            </a>
        </li>
      );
    }

    return pages;
  };
  


  return (
    loading && categories ?
    <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
        </div>

    </div>
    :
    <div className=' w-full h-full' >
      
      <div className='flex justify-between'>
        <div className='flex flex-col space-y-0'>
          <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>Liste Des  <span className='text-black'>Produits</span></h2>
          <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
        </div>
        <h4 className='flex items-center justify-center text-sm font-base'><MdLaptopChromebook className='text-[20px] mr-4' />/ Produits</h4>
                  
      </div>

      <div className='w-full p-2 mt-[60px] relative overflow-x-auto shadow-md sm:rounded-lg'>

          <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            <div>
                <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="w-[200px] inline-flex items-center justify-between text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button"   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                    </svg>
                    {selectedCategory}
                    <svg className={`w-2.5 h-2.5 ms-2.5 duration-300 ease-in-out ${isDropdownOpen? 'rotate-[-180deg]': 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownRadio" className={`w-[200px] z-[100] absolute ${isDropdownOpen ? 'block' : 'hidden'} w-48 bg-slate-100 divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600`} >
                    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                        <li>
                            <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input checked={categoryId === 0} id="filter-radio-example-2" type="radio" value={0} name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => {setCategoryId( parseInt(e.target.value) ); setSelectedCategory('filtrer') }}/>
                                <label htmlFor="filter-radio-example-2" className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">voir tous</label>
                            </div>
                        </li>
                        {
                            categories.map((category) => (
                            <li key={category.id}>
                                <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="filter-radio-example-1" type="radio" value={category.id} name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  checked={categoryId === category.id} onChange={(e) => {setCategoryId(parseInt(e.target.value)); setSelectedCategory(category.name) } }/>
                                    <label htmlFor="filter-radio-example-1" className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">{category.name}</label>
                                </div>
                            </li>

                            ))
                        }
                        
                    </ul>
                </div>
            </div>
            <label htmlFor="table-search" className="sr-only">Recherche</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Chercher un produit par nom ou mark" value={searchValue} onChange={handleSearchChange}/>
            </div>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-16 py-3">
                        <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nom du produit
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Categorie
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Marque
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
              { 
              filteredProducts.length > 0 ?
              
              (filteredProducts.map((product) => (
                <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {
                      product.images && product.name && product.mark && product.category.name  && product.images.length > 0 ?
                      (
                          <>
                              <td className="p-4">
                                  <img src={BASE_URL.replace('/api','')+product.images[0].imageName} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                              </td>
                              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                  {product.name}
                              </td>
                              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                  {product.category.name}
                              </td>
                              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                  {product.mark}
                              </td>
                              <td className="px-6 py-4 flex gap-8 items-center h-[150px]">
                                  <Link to={'/admin/afficher-produit/'+product.id} onClick={() => setProductId(product.id)} className='flex items-center justify-center gap-2 py-2 w-[100px] text-sm rounded-xl bg-blue-500 text-white duration-300 ease-in-out hover:bg-blue-900 '>
                                  <BiSolidShow/> <span>Voir</span>
                                  </Link>
                                  <button  className="font-medium text-white flex items-center justify-center gap-2 py-2 w-[100px] text-sm rounded-xl bg-red-500 duration-300 ease-in-out hover:bg-red-900 " type='button' 
                                  onClick={() => handleDeleteClick(product.id)} >Supprimer</button>
                                  
                              </td>
                          </>
                          
                      )
                      :
                      ''

                  }
                </tr>
              )))
              :
                (
                    <p className='text-sm text-gray-600'>Aucun produit correspondant !</p>
                )
              }
                
            </tbody>
        </table>
        <nav className="flex items-center flex-column flex-wrap md:flex-row gap-4 pt-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Affichage
          <span className="font-semibold text-gray-900 dark:text-white"> 1-10</span> de <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
           
              <li>
                  <button onClick={previousPage} disabled={currentPage === 1} className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'} `} >Précédent</button>
              </li>
              <>
                {
                    generatePageNumbers()
                }
              </>
              <li >
                <button onClick={nextPage} disabled={currentPage === totalPages} className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}>Suivant</button>
              </li>
          </ul>
        </nav>
      </div>

      {isModalOpen && (
        <ModalPopUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} confirmDelete={confirmDelete} />
      )}

    </div>
  )
}
