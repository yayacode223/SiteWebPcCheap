import React, { useState } from 'react'
import { IoNotifications } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import profile from '../../assets/admin/profile.png'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';



export default function NavBar({isClick, setIsClick}) {

  const {user, logout} = useAuth();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const navigate = useNavigate();

  async function handleLogout(){

    try {
      await logout();
      console.log('deconnexion reussi')
    }
    catch(error) {
      console.error('erreur de deconnexion: ',error)
    }
    navigate('/')

  }

  return (
    <nav className='flex flex-row justify-between items-center shadow bg-white py-2 px-[4%] w-full h-auto fixed top-0 z-[1000]'>

        <div className='text-xl font-bold'>ADMIN</div>
        <div className='flex items-center space-x-[2rem]'>
        <div className='absolute top-1/2 left-[150px] bg-slate-100 cursor-pointer p-2 rounded-lg translate-y-[-50%]' onClick={()=> setIsClick(!isClick)}><CiMenuFries /></div>
            <div className='notification text-[20px] text-orange-400 '>
                <IoNotifications />
            </div>
            <div className='profile w-[50px] cursor-pointer'
              onMouseEnter={() => setIsPopoverOpen(true)}
            >
              <img className='object-center object-cover' src={profile} alt="profile" />
            </div>
              
          {isPopoverOpen && (
            <div
              className="absolute z-[1000] w-64 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-lg dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 top-12 right-10"
              onMouseLeave={() => setIsPopoverOpen(false)}
            >
              <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Profil utilisateur
                </h3>
              </div>
              <div className="px-3 py-2 space-y-2 ">
                <p className="text-gray-800  font-bold">
                  Name: <span className="text-gray-500 font-medium ">{user.username}</span>
                </p>
                <p className="text-gray-800 ">
                  Email: <span className="text-gray-500 font-medium">{user.email}</span>
                </p>
                <p className="text-gray-800 font-bold">
                  Rôle:
                  <span className="text-gray-500 font-medium">
                    {user.roles.includes("ROLE_ADMIN") ? "Administrateur" : "Utilisateur"}
                  </span>
                </p>
                <p className="text-blue-500 text-lg cursor-pointer" onClick={handleLogout}>
                  Déconnexion
                </p>
              </div>
            </div>
          )}
              
        </div>
        
    </nav>
  )
}
