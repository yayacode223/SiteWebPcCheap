import React, { useState } from 'react'
import { IoNotifications } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import profile from '../../assets/admin/profile.png'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { toast } from 'react-toastify';

import DarkMode from '../../Components/Navbar/DarkMode';
import { Link } from 'react-router-dom';




export default function NavBar({isClick, setIsClick}) {

  const {user, logout} = useAuth();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const navigate = useNavigate();

  async function handleLogout(){

    try {
      await logout();
      toast.success('deconnexion reussi')
    }
    catch(error) {
      toast.error('erreur de deconnexion: ',error)
    }
    navigate('/')

  }

  return (
    <nav className='flex flex-row justify-between items-center shadow bg-white dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 py-2 px-[4%] w-full h-auto fixed top-0 z-[1000]'>

        <div className='text-xl dark:text-gray-100 font-bold'>ADMIN</div>
        <div className='flex items-center space-x-[2rem]'>
        <div className='absolute top-1/2 left-[150px] bg-slate-100 cursor-pointer p-2 rounded-lg translate-y-[-50%]' onClick={()=> setIsClick(!isClick)}><CiMenuFries /></div>
            <div className='notification text-[20px] text-orange-400 '>
                <IoNotifications />
            </div>
            <DarkMode />
            <div className='profile w-[50px] cursor-pointer'
              onMouseEnter={() => setIsPopoverOpen(true)}
            >
              <img className='object-center object-cover' src={profile} alt="profile" />
            </div>
              
            {isPopoverOpen && (
              <div className="absolute space-y-2 right-10 top-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64" onMouseLeave={() => setIsPopoverOpen(false)}>
                <div className="text-start dark:text-gray-300">
                  <FaUserCircle className="text-[30px] mx-auto text-gray-600 dark:text-gray-300" />
                  <h3 className="mt-2  text-gray-500 ">
                    <span className="text-gray-800 font-semibold dark:text-gray-100">Nom: </span>{user.username}
                  </h3>
                  <p className="text-gray-500">
                    <span className="text-gray-800 font-semibold dark:text-gray-100">Email: </span>{user.email}
                  </p>
                </div>
                <div className=" w-full flex flex-col space-y-1 ">
                  <button
                    className="block py-2 px-4 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-blue-600"
                  >
                    <Link to={'/'}>Accueil</Link>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block py-2 px-4 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-red-500"
                  >
                    Déconnexion
                  </button>
                  
                </div>
              </div>
            )}
              
        </div>
        
    </nav>
  )
}
