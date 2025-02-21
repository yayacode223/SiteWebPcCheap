import React, {useEffect, useState, useRef} from 'react'
import { MdLaptopChromebook } from "react-icons/md";
import { useParams } from "react-router";
import Slider from "react-slick";
import { Link } from "react-router";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import TodoApp from '../../components/TodoApp';
import { useProduct } from '../../../context/ProductContext';


// Importation des images
import Image1 from "../../../assets/ImagesPC/4.jpg";
import Image2 from "../../../assets/ImagesPC/5.jpg";
import Image3 from "../../../assets/ImagesPC/6.jpg";
import Image4 from "../../../assets/ImagesPC/7.jpg";
import Image5 from "../../../assets/ImagesPC/8.jpg";


export default function EditProduct() {

  // recuperation des donnes du context

  const {loading, setProductId, oldProduct, updateProduct} = useProduct()
  
  // Données du produit
  const product = {
    id: 3,
    name: "Apple MacBook Pro 17",
    category: "Ordinateurs",
    mark: "MacBook",
    stock: true,
    promos: true,
    description:
      "So, it is natural that this sphere is one of the most popular ones and it is really hard to offer computer hardware because of great number of competitors. We are providing a great choice of different commodities. We are producing reliable and durable goods. That is why we are always in touch with the latest new inventions and improvements. We can satisfy customers with different claims.",
    carateristique: [
      "Accessories (18)",
      "CPUs (9)",
      "RAM: 16GH",
      "Hard Drives (9)",
      "Keyboards / Mice (9)",
      "Monitors (9)",
      "Stockage: SSD 256GH",
      "Ecran: 14 Pouce",
    ],
    images: [Image1, Image2, Image3, Image4, Image5],
  };

  const [list, setList] = useState([
    ...product.carateristique.map((caract, index) => ( 
      { 
        id: Date.now() + index,
        title: caract,
        completed: false
      }
    )
  )])
    
  const [features, setFeatures] = useState([]);
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category)
  const [mark, setMark] = useState(product.mark)
  const [stock, setStock] = useState(product.stock)
  const [promos, setPromos] = useState(product.promos);
  const [description, setDescription] = useState(product.description);
  useEffect(() => {
      setFeatures(
        list.map((item) => (
          item.title
        ))
      )
    console.log(list)
  }, [list])

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
  const next = () => {
      sliderRef.slickNext();
  };
  const previous = () => {
      sliderRef.slickPrev();
  };

  return (
    <div className='w-full h-full'>
      <div className='flex justify-between'>
        <div className='flex flex-col space-y-0'>
          <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>Editer <span className='text-black'>Produits:# {productId}</span></h2>
          <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
        </div>
        <h4 className='flex items-center justify-center text-sm font-base'><MdLaptopChromebook className='text-[20px] mr-4' />/ Produits</h4>
                          
      </div>

      {/* Formulaire de modification */}

      <div className='md:w-full mt-[50px] rounded-xl bg-white h-full gap-4 flex flex-col-reverse md:flex-row'>

        <div className="relative md:w-[30%] w-full no-scrollbar">
          <Slider
              ref={slider => {
                  sliderRef = slider
              }}
              {...settings}
          >
              {
                  product.images.map((image, index) => (
                      
                      <div key={index} className="w-full mx-auto flex items-center justify-center">
                          <img src={image} alt="" className="block object-cover object-center" />
                      </div>
                  ))
              }
          </Slider>
        
          <button className="absolute left-0 top-1/2 -translate-y-1/2 block  cursor-pointer bg-slate-200 text-white font-bold text-sm p-1 rounded-full duration-300 ease-in-out hover:bg-slate-500" onClick={previous}>
          <MdNavigateBefore  />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 block cursor-pointer bg-slate-200 text-white font-bold text-sm p-1 rounded-full duration-300 ease-in-out hover:bg-slate-500" onClick={next}>
          <MdNavigateNext/>
          </button>

                    
        </div>

        <form className='sm:w-full text-[1rem] p-4 h-auto' action="">
            <div className='w-full h-auto space-y-4 mb-4'>
                <input className='block w-full rounded-md px-4 py-2 mb-4 outline-none border-none focus:border focus:border-[#4F75FF] border-[1.5px] text-[1rem] focus:shadow-lg shadow-[#acbcf8]' type="text" name='name' placeholder='nom du produit' value={name} onChange={(e) => setName(e.target.value)}/>
                <input className='block w-full rounded-md px-4 py-2 mb-4 outline-none focus:border focus:border-[#4F75FF] border-none border-[1.5px] text-[1rem] focus:shadow-lg shadow-[#91a7f4]' type="text" name='mark'  placeholder='La marque du produit' value={mark} onChange={(e) => setMark(e.target.value)} />

                <select id="categories" className="bg-white border-none border-gray-300 focus:shadow-lg text-gray-500 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={category} onChange={(e) => setCategory(e.target.value)} >
                  <option value="">Choisir la catégorie</option>
                  <option value="ordinateur">Ordinateur</option>
                  <option value="téléphone">Téléphone</option>
                </select>

                <div className='flex gap-4 w-full justify-between  py-2'>
                  <div className="flex items-center w-1/2">
                    <input id="stock" type="checkbox" value={stock} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={stock} onChange={() => setStock(!stock)} />
                    <label htmlFor="stock" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">En stock</label>
                  </div>

                  <div className="flex items-center w-1/2">
                      <input id="promos" type="checkbox" value={promos} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={promos} onChange={() => setPromos(!promos)} />
                      <label htmlFor="promos" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">En promotion</label>
                  </div>

                </div>

                <textarea className='block w-full h-[200px] p-2 outline-none border-none focus:border focus-border-[1.5px] border-[#4F75FF] rounded-md focus:shadow-lg shadow-[#4F75FF]  mb-4' name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>

                
              
                <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white" htmlFor="file_input">Choisir les images</label>
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" multiple/>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

                
            </div>

            <button className='bg-blue-500 duration-300 ease-in-out hover:bg-blue-800 text-[1rem] shadow-lg shadow-blue-200 block w-full text-white font-bold rounded-md p-2 '>Enregistrer</button>
        </form>
      
        <div className='sm:w-full h-[100%] p-4' >
          <TodoApp features={list} setFeatures={setList} />
        </div>
      </div>

    </div>
  )
}
