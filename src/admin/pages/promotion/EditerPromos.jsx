import React, { useState } from 'react'
import { BsNoiseReduction } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Image from '../../../assets/ImagesPC/4.jpg'

export default function EditerPromos() {
// la recuperation des paramettres
    const params = useParams();
    const {promosId} = params;

    // La requete de l'annoce par l'Id

    const promos = {
        id: 1,
        title: 'Bientôt La promotion commence ',
        description: 'We\'re on a mission to revolutionize online shopping by providing high-quality products at competitive prices while ensuring an exceptional customer experience.',
        imageUrl: Image,

    }



    // la declaration des useState
    const [title, setTitle] = useState(promos.title);
    const [body, setBody] = useState(promos.description);
    const [imageUrl, setImageUrl] = useState(promos.imageUrl)

  return (
    <div className='w-full h-full'>
          
        <div className='flex justify-between'>
            <div className='flex flex-col space-y-0'>
                <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>Editer <span className='text-black'>L'annonce: {promosId} </span></h2>
                <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
            </div>
            <h4 className='flex items-center justify-center text-sm font-base'><BsNoiseReduction className='text-[20px] mr-4' />/ Promotions</h4>
                            
        </div>

        <img className='block mt-[60px]' src={promos.imageUrl} width={150} alt="" />
        <div className='bg-slate-100 w-full h-full'>


            <form className='relative text-[1rem] p-4 h-auto' action="">
                <div className="">
                    <input className='block w-full rounded-md px-4 py-2 mb-4 outline-none border-none focus:border focus:border-[rgb(79,117,255)] border-[1.5px] text-[1.2rem] font-medium focus:shadow-lg shadow-[#acbcf8]' type="text" name='titre' placeholder='Titre' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea className='block w-full h-[200px] p-2 outline-none border-none focus:border focus-border-[1.5px] border-[#4F75FF] rounded-md focus:shadow-lg shadow-[#4F75FF]  mb-4' name="description" id="description"  placeholder='Ecreivez un paragraphe' value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
                    <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white" htmlFor="file_input">Choisir une image</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" multiple  onChange={(e) => setImageUrl(e.target.value)} />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>

                <button className='bg-blue-500 duration-300 ease-in-out hover:bg-blue-800 text-[1rem] shadow-lg shadow-blue-200 block w-full text-white font-bold rounded-md p-2 '>Enregistrer</button>
            </form>
        </div>
    
    </div>
  )
}
