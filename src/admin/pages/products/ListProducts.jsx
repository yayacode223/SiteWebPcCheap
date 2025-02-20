import React, { useState, useEffect, useRef } from 'react'
import { MdLaptopChromebook } from "react-icons/md";
import Image1 from "../../../assets/ImagesPC/4.jpg";
import Image2 from "../../../assets/ImagesPC/5.jpg";
import Image3 from "../../../assets/ImagesPC/6.jpg";
import Image4 from "../../../assets/ImagesPC/7.jpg";
import Image5 from "../../../assets/ImagesPC/8.jpg";
import { Link } from 'react-router-dom';
import { BiSolidShow } from "react-icons/bi";
import ModalPopUp from '../delete/ModalPopUp';



/*
 * $targetEl: required
 * options: optional
 */






export default function ListProducts() {

  

  const products = [
    {
      id: 1,
      name: 'Apple MacBook Pro 17',
      category: 'Ordinateurs',
      mark: 'MacBook',
      stock: true,
      promos: true,
      description: 'So, it is natural that this sphere is one of the most popular ones and it is really hard to offer computer hardware because of great number of competitors. We are providing a great choice of different commodities. We are producing reliable and durable goods. That is why we are always in touch with the latest new inventions and improvements. We can satisfy customers with different claims.',
      carateristique: ['Accessories (18)','CPUs (9)', 'RAM: 16GH','Hard Drives (9)', 'Keyboards / Mice (9)', 'Monitors (9)', 'Stockage: SSD 256GH', 'Ecran: 14 Pouce'],
      images: [Image1,Image2,Image3, Image4, Image5]
    },
    {
      id: 2,
      name: 'Apple MacBook Pro 17',
      category: 'Ordinateurs',
      mark: 'MacBook',
      stock: true,
      promos: true,
      description: 'So, it is natural that this sphere is one of the most popular ones and it is really hard to offer computer hardware because of great number of competitors. We are providing a great choice of different commodities. We are producing reliable and durable goods. That is why we are always in touch with the latest new inventions and improvements. We can satisfy customers with different claims.',
      carateristique: ['Accessories (18)','CPUs (9)', 'RAM: 16GH','Hard Drives (9)', 'Keyboards / Mice (9)', 'Monitors (9)', 'Stockage: SSD 256GH', 'Ecran: 14 Pouce'],
      images: [Image1,Image2,Image3, Image4, Image5]
    },
    {
      id: 3,
      name: 'Apple MacBook Pro 17',
      category: 'Ordinateurs',
      mark: 'MacBook',
      stock: true,
      promos: true,
      description: 'So, it is natural that this sphere is one of the most popular ones and it is really hard to offer computer hardware because of great number of competitors. We are providing a great choice of different commodities. We are producing reliable and durable goods. That is why we are always in touch with the latest new inventions and improvements. We can satisfy customers with different claims.',
      carateristique: ['Accessories (18)','CPUs (9)', 'RAM: 16GH','Hard Drives (9)', 'Keyboards / Mice (9)', 'Monitors (9)', 'Stockage: SSD 256GH', 'Ecran: 14 Pouce'],
      images: [Image1,Image2,Image3, Image4, Image5]
    },
    {
      id: 4,
      name: 'Apple MacBook Pro 17',
      category: 'Ordinateurs',
      mark: 'MacBook',
      stock: true,
      promos: true,
      description: 'So, it is natural that this sphere is one of the most popular ones and it is really hard to offer computer hardware because of great number of competitors. We are providing a great choice of different commodities. We are producing reliable and durable goods. That is why we are always in touch with the latest new inventions and improvements. We can satisfy customers with different claims.',
      carateristique: ['Accessories (18)','CPUs (9)', 'RAM: 16GH','Hard Drives (9)', 'Keyboards / Mice (9)', 'Monitors (9)', 'Stockage: SSD 256GH', 'Ecran: 14 Pouce'],
      images: [Image1,Image2,Image3, Image4, Image5]
    },
    {
      id: 5,
      name: 'Apple MacBook Pro 17',
      category: 'Ordinateurs',
      mark: 'MacBook',
      stock: true,
      promos: true,
      description: 'So, it is natural that this sphere is one of the most popular ones and it is really hard to offer computer hardware because of great number of competitors. We are providing a great choice of different commodities. We are producing reliable and durable goods. That is why we are always in touch with the latest new inventions and improvements. We can satisfy customers with different claims.',
      carateristique: ['Accessories (18)','CPUs (9)', 'RAM: 16GH','Hard Drives (9)', 'Keyboards / Mice (9)', 'Monitors (9)', 'Stockage: SSD 256GH', 'Ecran: 14 Pouce'],
      images: [Image1,Image2,Image3, Image4, Image5]
    },
    {
      id: 6,
      name: 'EliteBook',
      category: 'Ordinateurs',
      mark: 'Hp',
      stock: true,
      promos: true,
      description: 'So, it is natural that this sphere is one of the most popular ones and it is really hard to offer computer hardware because of great number of competitors. We are providing a great choice of different commodities. We are producing reliable and durable goods. That is why we are always in touch with the latest new inventions and improvements. We can satisfy customers with different claims.',
      carateristique: ['Accessories (18)','CPUs (9)', 'RAM: 16GH','Hard Drives (9)', 'Keyboards / Mice (9)', 'Monitors (9)', 'Stockage: SSD 256GH', 'Ecran: 14 Pouce'],
      images: [Image1,Image2,Image3, Image4, Image5]
    },

  ]

  const [selectedCategory, setSelectedCategory] = useState('Ordinateurs');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDeleteClick = (productId) => {
    setSelectedProduct(productId);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    console.log(`Produit avec ID ${selectedProduct} supprimé`);
    // Ici, ajoute la logique pour supprimer le produit dans ton état ou base de données
    setIsModalOpen(false);
  };

  


  return (
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
                <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button"   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                    </svg>
                    Filtrer
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownRadio" className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600`} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style={{position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate3d(522.5px, 3847.5px, 0px)",}} >
                    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                        <li>
                            <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input id="filter-radio-example-1" type="radio" value="Ordinateurs" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  checked={selectedCategory === "Ordinateurs"} onChange={(e) => setSelectedCategory(e.target.value)} />
                                <label htmlFor="filter-radio-example-1" className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Ordinateurs</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input checked={selectedCategory === "Téléphones"} id="filter-radio-example-2" type="radio" value="Téléphones" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setSelectedCategory( e.target.value )}/>
                                <label htmlFor="filter-radio-example-2" className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Téléphones</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <label htmlFor="table-search" className="sr-only">Recherche</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Chercher un produit" />
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
                products.map((product) => (
                  <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4">
                          <img src={product.images[0]} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {product.name}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {product.category}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {product.mark}
                      </td>
                      <td className="px-6 py-4 flex gap-8 items-center h-[150px]">
                          <Link to={'/admin/afficher-produit/'+product.id} className='flex items-center justify-center gap-2 py-2 w-[100px] text-sm rounded-xl bg-blue-500 text-white duration-300 ease-in-out hover:bg-blue-900 '>
                          <BiSolidShow/> <span>Voir</span>
                          </Link>
                          <button  className="font-medium text-white flex items-center justify-center gap-2 py-2 w-[100px] text-sm rounded-xl bg-red-500 duration-300 ease-in-out hover:bg-red-900 " type='button' 
                          onClick={() => handleDeleteClick(product.id)} >Supprimer</button>
                          
                      </td>
                  </tr>
                ))
              }
                
            </tbody>
        </table>
        <nav className="flex items-center flex-column flex-wrap md:flex-row gap-4 pt-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Affichage
          <span className="font-semibold text-gray-900 dark:text-white"> 1-10</span> de <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Précédent</a>
              </li>
              <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                  <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
              </li>
              <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
              </li>
              <li>
          <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Suivant</a>
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
