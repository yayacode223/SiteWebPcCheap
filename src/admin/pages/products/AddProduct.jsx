import React, { useEffect, useState } from 'react'
import { MdLaptopChromebook } from "react-icons/md";
import TodoApp from '../../components/TodoApp';
import { useCategory } from '../../../context/CategoryContext';
import { useProduct } from '../../../context/ProductContext';
import { useNavigate } from 'react-router';

export default function AddProduct() {

  const { loading, categories, deleteCategory } = useCategory();
  const { addProduct } = useProduct();

  const navigate = useNavigate();

  const [list, setList] = useState([]);

  useEffect(() => {
    setProduct({...product, features: list.map((item) => item.title)})
  }, [list] )

  const [product, setProduct] = useState({
    name: "",
    mark: "",
    category: "",
    stock: false,
    promos: false,
    description: "",
    images: [],
    features: [],
  });

  function handleSubmit(e){
    e.preventDefault();

    if(product.category === ''){
      alert('veuillez choisir une categorie')
    }
    else{
      try{
        addProduct(product)
        console.log("Ajout de produit reussi");
        navigate('/admin/liste-produits')

      } 
      catch(error){
        alert("erreur d'ajout de produit: "+error)
      }
      
    }

  }


  return (
    loading ?
    <div>
      <p>...Loading</p>
    </div>
    :
    <div className='w-full h-full'>

      <div className='flex justify-between'>
          <div className='flex flex-col space-y-0'>
            <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>Ajouter <span className='text-black'>Produits</span></h2>
            <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
          </div>
          <h4 className='flex items-center justify-center text-sm font-base'><MdLaptopChromebook className='text-[20px] mr-4' />/ Produits</h4>
                    
      </div>
      
      <div className='sm:w-full rounded-md bg-slate-100  mt-[50px]  flex flex-col-reverse sm:flex-row'>
        <form onSubmit={handleSubmit} className='sm:w-full text-[1rem] p-4 h-auto' action="">
            <div className='w-full h-auto space-y-4 mb-4'>
                <input className='block w-full rounded-md px-4 py-2 mb-4 outline-none border-none focus:border focus:border-[#4F75FF] border-[1.5px] text-[1rem] focus:shadow-lg shadow-[#acbcf8]' type="text" name='name' placeholder='nom du produit' value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})}  required/>
                <input className='block w-full rounded-md px-4 py-2 mb-4 outline-none focus:border focus:border-[#4F75FF] border-none border-[1.5px] text-[1rem] focus:shadow-lg shadow-[#91a7f4]' type="text" name='mark'  placeholder='La marque du produit' value={product.mark} onChange={(e) => setProduct({...product, mark: e.target.value.trim()})} required />

                <select id="countries" className="bg-white border-none border-gray-300 focus:shadow-lg text-gray-500 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={product.category} onChange={(e) => setProduct({...product, category: e.target.value.trim()})} >
                  <option value={''} selected>Choisir la catégorie</option>
                  {
                    categories?.map(category => {
                      
                      return (
                          <option key={category.id} value={category.id}>{category.name}</option>
                      );
                    })
                  }
                </select>

                <div className='flex gap-4 w-full justify-between  py-2'>
                  <div className="flex items-center w-1/2">
                    <input id="stock" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={product.stock} value={product.stock} onChange={() => setProduct({...product, stock: !product.stock})} />
                    <label htmlFor="stock" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">En stock</label>
                  </div>

                  <div className="flex items-center w-1/2">
                      <input id="promos" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={product.promos} value={product.promos} onChange={() => setProduct({...product, promos: !product.promos})} />
                      <label htmlFor="promos" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">En promotion</label>
                  </div>

                </div>

                <textarea className='block w-full h-[200px] p-2 outline-none border-none focus:border focus-border-[1.5px] border-[#4F75FF] rounded-md focus:shadow-lg shadow-[#4F75FF]  mb-4' name="description" id="description" value={product.description} onChange={(e) => setProduct({...product, description: e.target.value.trim()})}></textarea>

                
              
                <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white" htmlFor="file_input">Choisir les images</label>
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" multiple   onChange={(e) => setProduct({...product, images: Array.from(e.target.files)})}
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

                
            </div>

            <button type='submit' className='bg-blue-500 duration-300 ease-in-out hover:bg-blue-800 text-[1rem] shadow-lg shadow-blue-200 block w-full text-white font-bold rounded-md p-2 '>Enregistrer</button>
        </form>

        <div className='sm:w-full h-[100%] p-4' >
          <TodoApp features={list} setFeatures={setList} />
        </div>
    </div>

    </div>
  )
}
