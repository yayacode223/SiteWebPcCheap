import React, { useEffect, useState, useRef } from 'react';
import { MdLaptopChromebook, MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import TodoApp from '../../components/TodoApp';
import { useProduct } from '../../../context/ProductContext';
import { useCategory } from '../../../context/CategoryContext';
import { BASE_URL } from '../../../utils/AxiosInstance';

export default function EditProduct() {
  
  const { loading, oldProduct, updateProduct } = useProduct();
  const { categories } = useCategory();
  
  const [product, setProduct] = useState(null);
  const [list, setList] = useState([]);

  // Vérification que oldProduct est bien chargé avant de l'utiliser
  useEffect(() => {
    if (oldProduct) {
      setProduct({
        name: oldProduct.name || '',
        mark: oldProduct.mark || '',
        category: oldProduct.category?.id || '',
        stock: oldProduct.stock || false,
        promos: oldProduct.promos || false,
        description: oldProduct.description || '',
        images: [],
        features: oldProduct.features ? [...oldProduct.features] : [],
      });

      // Initialisation de la liste des features
      setList(
        oldProduct.features
          ? oldProduct.features.map((feature, index) => ({
              id: Date.now() + index,
              title: feature,
              completed: false
            }))
          : []
      );
    }
  }, [oldProduct]);

  useEffect(() => {
    if (product) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        features: list.map((item) => item.title)
      }));
    }
  }, [list]);

  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  let sliderRef = useRef(null);
  const next = () => sliderRef?.current?.slickNext();
  const previous = () => sliderRef?.current?.slickPrev();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!product || product.category === '') {
      alert('Veuillez choisir une catégorie');
      return;
    }

    try {
      updateProduct(oldProduct.id, product);
      console.log("✅ Produit mis à jour avec succès !");
      navigate('/admin/liste-produits');
    } catch (error) {
      alert("❌ Erreur lors de la mise à jour du produit : " + error);
    }
  }

  return loading || !product ? (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
      </div>
    </div>
  ) : (
    <div className='w-full h-full'>
      <div className='flex justify-between'>
        <div className='flex flex-col space-y-0'>
          <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>Éditer <span className='text-black'>Produit: {product.name}</span></h2>
          <p className='text-sm font-base text-[#4F75FF]'> {"PANNEAU D'ADMINISTRATION"} </p>
        </div>
        <h4 className='flex items-center justify-center text-sm font-base'><MdLaptopChromebook className='text-[20px] mr-4' />/Produits</h4>
      </div>

      {/* Formulaire de modification */}
      <div className='md:w-full mt-[50px] rounded-xl  bg-slate-100 h-full gap-4 flex flex-col-reverse md:flex-row'>

        <div className="relative md:w-[30%] w-full no-scrollbar">
          <Slider ref={(slider) => { sliderRef = slider; }} {...settings}>
            {oldProduct.images.map((image, index) => (
              <div key={index} className="w-full mx-auto flex items-center justify-center">
                <img src={BASE_URL.replace('/api', '') + image.imageName} alt="" className="block object-cover object-center" />
              </div>
            ))}
          </Slider>

          <button className="absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer bg-slate-200 text-white font-bold text-sm p-1 rounded-full duration-300 ease-in-out hover:bg-slate-500" onClick={previous}>
            <MdNavigateBefore />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 block cursor-pointer bg-slate-200 text-white font-bold text-sm p-1 rounded-full duration-300 ease-in-out hover:bg-slate-500" onClick={next}>
            <MdNavigateNext />
          </button>
        </div>

        <form onSubmit={handleSubmit} className='sm:w-full text-[1rem] p-4 h-auto' action="">
          <div className='w-full h-auto space-y-4 mb-4'>
            <input className='block w-full rounded-md px-4 py-2 mb-4 outline-none border-none focus:border focus:border-[#4F75FF] border-[1.5px] text-[1rem] focus:shadow-lg shadow-[#acbcf8]' type="text" name='name' placeholder='Nom du produit' value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} required />
            <input className='block w-full rounded-md px-4 py-2 mb-4 outline-none border-none focus:border focus:border-[#4F75FF] border-[1.5px] text-[1rem] focus:shadow-lg shadow-[#acbcf8]' type="text" name='mark' placeholder='Marque' value={product.mark} onChange={(e) => setProduct({...product, mark: e.target.value})} required />

            <select id="categories" className="bg-white border-none border-gray-300 focus:shadow-lg text-gray-500 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={product.category || ''} onChange={(e) => setProduct({...product, category: e.target.value})} >
              <option value={''}>Choisir une catégorie</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>

            <div className='flex gap-4 w-full py-2'>
              <label className="flex items-center">
                <input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' type="checkbox" checked={product.stock} onChange={() => setProduct({...product, stock: !product.stock})} />
                <span className="ms-2">En stock</span>
              </label>

              <label className="flex items-center">
                <input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' type="checkbox" checked={product.promos} onChange={() => setProduct({...product, promos: !product.promos})} />
                <span className="ms-2">En promotion</span>
              </label>
            </div>

            <textarea className='block w-full h-[200px] p-2 outline-none border-none focus:border focus-border-[1.5px] border-[#4F75FF] rounded-md focus:shadow-lg shadow-[#4F75FF]  mb-4' name="description" id="description" value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} ></textarea>
              
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white" htmlFor="file_input">Choisir les images</label>
            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" multiple onChange={(e) => setProduct({...product, images: Array.from(e.target.files)})} />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

          </div>

          <button className='bg-blue-500 duration-300 ease-in-out hover:bg-blue-800 text-[1rem] shadow-lg shadow-blue-200 block w-full text-white font-bold rounded-md p-2'>Enregistrer</button>
        </form>
      
        <div className='sm:w-full h-[100%] p-4' >
          <TodoApp features={list} setFeatures={setList} />
        </div>
      </div>
    </div>
  );
}
