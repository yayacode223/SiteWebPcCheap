import React from 'react'
import { BiCategory } from "react-icons/bi";


export default function AddCategory() {

    const Categories = [
        {
            id: 1,
            name: 'Ordinateurs'
        },
        {
            id: 2,
            name: 'Téléphones'
        }
    ]

  return (
    <div className='w-full h-full'>
        <div className='flex justify-between'>
              <div className='flex flex-col space-y-0'>
                <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>Admin <span className='text-black'>Catégories</span></h2>
                <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
              </div>
              <h4 className='flex items-center justify-center text-sm font-base'><BiCategory className='text-[20px] mr-4' />/ Catégories</h4>
              
        </div>
        <div className='flex sm:flex-row flex-col w-full mt-[50px] rounded-xl bg-slate-100 h-full p-4 gap-8'>
            <form className='sm:w-full text-[1rem] p-4 h-auto space-y-4' action="">
                <input className='block w-full rounded-md px-4 py-[8px] mb-4 outline-none focus:border focus:border-[#4f75ff] border-[1.5px] text-[1rem] focus:shadow-lg shadow-[#8a9fea]  ' type="text" name='type' placeholder='Frontend project' />

                <button className='bg-[#4f75ff] duration-300 ease-in-out hover:bg-[#4f75ff] text-[1rem] shadow-lg shadow-[#8ea5f6] block w-full text-white font-bold rounded-md px-2 py-2 '>Enregistrer</button>
            </form>
            <div className='flex flex-col space-y-4 justify-center p-4 items-center sm:w-full'>
                {
                    Categories.map((category) => {
                        return (
                            <p key={category.id} className='w-full text-xl text-center py-2 bg-white border-s-teal-50 shadow rounded'>{category.name}</p>
                        )
                    })
                }
                 
            </div>
        </div>
    </div>
  )
}
