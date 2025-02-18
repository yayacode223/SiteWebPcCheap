import React from 'react'
import { BsNoiseReduction } from "react-icons/bs";


export default function AddPromos() {
  return (
    <div className='w-full h-full'>
      
        <div className='flex justify-between'>
            <div className='flex flex-col space-y-0'>
                <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>Ajouter <span className='text-black'>Une Annonce de promos</span></h2>
                <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
            </div>
            <h4 className='flex items-center justify-center text-sm font-base'><BsNoiseReduction className='text-[20px] mr-4' />/ Promotions</h4>
                          
        </div>

        <div className='mt-[60px]  bg-slate-100 w-full h-full'>
            <form action="">
                <div className="relative text-[1rem] p-4 h-auto">
                    <input className='block w-full rounded-md px-4 py-2 mb-4 outline-none border-none focus:border focus:border-[#4F75FF] border-[1.5px] text-[1rem] focus:shadow-lg shadow-[#acbcf8]' type="text" name='titre' placeholder='Titre' />
                    <textarea className='block w-full h-[200px] p-2 outline-none border-none focus:border focus-border-[1.5px] border-[#4F75FF] rounded-md focus:shadow-lg shadow-[#4F75FF]  mb-4' name="description" id="description"  placeholder='Ecreivez un paragraphe'></textarea>
                    <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white" htmlFor="file_input">Choisir une image</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" multiple/>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>

                <button className='bg-blue-500 duration-300 ease-in-out hover:bg-blue-800 text-[1rem] shadow-lg shadow-blue-200 block w-full text-white font-bold rounded-md p-2 '>Enregistrer</button>
            </form>
        </div>

    </div>
  )
}
