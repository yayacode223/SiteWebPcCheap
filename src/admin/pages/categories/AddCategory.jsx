import React, { useState } from 'react'
import { BiCategory } from "react-icons/bi";
import { useCategory } from '../../../context/CategoryContext';


export default function AddCategory() {

    const {loading, categories, addCategory, updateCategory, deleteCategory} = useCategory();

    const [newCategory, setNewCategory] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        try{
            addCategory(addCategory);
        }
        catch(error){
            alert("erreur d'ajout de category: " + error);
        }

    }

  return (
    
        (loading) ?
        <div>
            <p>... Loading</p>
        </div>
        :
        <div className='w-full h-full'>
            <div className='flex justify-between'>
                  <div className='flex flex-col space-y-0'>
                    <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>Admin <span className='text-black'>Catégories</span></h2>
                    <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
                  </div>
                  <h4 className='flex items-center justify-center text-sm font-base'><BiCategory className='text-[20px] mr-4' />/ Catégories</h4>
                  
            </div>
            <div className='flex sm:flex-row flex-col w-full mt-[50px] rounded-xl  bg-slate-100 h-full p-4 gap-8'>
                <form onSubmit={handleSubmit} className='sm:w-full text-[1rem] p-4 h-auto space-y-4' action="">
                    <h3 className='text-lg font-bold text-gray-800'>Ajouter</h3>
                    <input className='block w-full rounded-md px-4 py-[8px] mb-4 outline-none focus:border focus:border-[#4f75ff] border-[1.5px] border-none text-[1rem] focus:shadow-lg shadow-[#8a9fea]  ' type="text" name='type' placeholder='Frontend project' required value={newCategory} onChange={(e) => setNewCategory(e.target.value.trim())}/>
    
                    <button type='submit' className='bg-[#4f75ff] duration-300 ease-in-out hover:bg-[#4f75ff] text-[1rem] shadow-lg shadow-[#8ea5f6] block w-full text-white font-bold rounded-md px-2 py-2 '>Enregistrer</button>
                </form>
                <div className='flex flex-col space-y-4 justify-center p-4 sm:w-full'>
                    <h3 className='text-lg font-bold mb-4 text-gray-800'>Liste des Categories</h3>
                    {
                        categories.map((category) => {
                            return (
                                <div key={category.id} className='w-full bg-white rounded-md px-2 flex gap-4 items-center justify-between'>
    
                                    <p key={category.id} className='text-base text-center py-2 '>{category.name}</p>
                                    <button className='block px-2 py-1 bg-red-500 duration-300 ease-in-out hover:bg-red-800 rounded-md cursor-pointer text-white' onClick={() => deleteCategory(categories.id)}>Supprimer</button>
    
                                </div>
                            )
                        })
                    }
                     
                </div>
            </div>
        </div>
        
  )
}
