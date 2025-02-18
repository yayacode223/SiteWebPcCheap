import React from 'react'
import { IoNotifications } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import profile from '../../assets/admin/profile.png'



export default function NavBar({isClick, setIsClick}) {
  return (
    <nav className='flex flex-row justify-between items-center shadow bg-white py-2 px-[4%] w-full h-auto fixed top-0 z-[1000]'>

        <div className='text-xl font-bold'>ADMIN</div>
        <div className='flex items-center space-x-[2rem]'>
        <div className='absolute top-1/2 left-[150px] bg-slate-100 cursor-pointer p-2 rounded-lg translate-y-[-50%]' onClick={()=> setIsClick(!isClick)}><CiMenuFries /></div>
            <div className='notification text-[20px] text-orange-400 '>
                <IoNotifications />
            </div>
            <div className='profile w-[50px] cursor-pointer'>
                <img className='object-center object-cover' src={profile} alt="profile" />
            </div>
        </div>
        
    </nav>
  )
}
