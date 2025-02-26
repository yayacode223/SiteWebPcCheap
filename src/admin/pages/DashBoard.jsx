import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { useDashBoard } from '../../context/DashBoardContext';


export default function DashBoard() {

  const {loading, stat} = useDashBoard();

  return (
    loading?
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
        </div>
      </div>
      :
    <div className='dashboard w-full h-full'>
      <div className='flex justify-between'>
        <div className='flex flex-col space-y-0'>
          <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>Administration <span className='text-black'>DashBoard</span></h2>
          <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
        </div>
        <h4 className='flex items-center justify-center text-sm font-base'><IoHomeSharp className='text-[20px] mr-4' />/ DashBoard</h4>
        
      </div>
      <div className='mt-10 grid grid-cols-dashboard gap-4 w-full h-full p-4'>
        <div className='relative h-[12rem] flex  justify-center items-center bg-[#28a745] rounded-3xl shadow-xl'>
          <p className='text-xl font-semibold text-white'>Total Ordinateurs</p>
          <div className='absolute bottom-0 w-20 h-12 rounded-t-xl flex justify-center items-center text-xl text-white bg-[#208237] '>{stat.nbrOrdinateurs ?? 0}</div>
        </div>
        <div className='relative h-[12rem] flex  justify-center items-center bg-[#fd7e14] rounded-3xl shadow-xl'>
          <p className='text-xl font-semibold text-white'>Total Téléphones</p>
          <div className='absolute bottom-0 w-20 h-12 rounded-t-xl flex justify-center items-center text-xl text-white bg-[#834a1c] '>{stat.nbrTelephones ?? 0}</div>
        </div>
        <div className='relative h-[12rem] flex  justify-center items-center bg-[#dc3545] rounded-3xl shadow-xl'>
          <p className='text-xl font-semibold text-white'>Total Promotions</p>
          <div className='absolute bottom-0 w-20 h-12 rounded-t-xl flex justify-center items-center text-xl text-white bg-[#93242f] '>{stat.nbrProductsEnPromotion ?? 0}</div>
        </div>
        <div className='relative h-[12rem] flex  justify-center items-center bg-[#6f42c1] rounded-3xl '>
          <p className='text-xl font-semibold text-white'>Total Utilisateurs</p>
          <div className='absolute bottom-0 w-20 h-12 rounded-t-xl flex justify-center items-center text-xl text-white bg-[#553393] '>{stat.nbrUsers ?? 0}</div>
        </div>
        
      </div>

      <div className='' >
        
      </div>

    </div>
  )
}
