import React, {useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";

import { Link } from 'react-router-dom';
import { BiCategory } from "react-icons/bi";
import { BsNoiseReduction } from "react-icons/bs";

import { FaUser } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { useAuth } from '../../context/AuthContext';






export default function SideBar({isClick, setIsClick}) {
    const [openCategory, setOpenCategory] = useState(false);
    const [openProduct, setOpenProduct] = useState(false);
    const [openPromos, setOpenPromos] = useState(false);
    
    const { logout } = useAuth();
    const navigate = useNavigate()

    function handleLogOut(){
      try {
        logout();
        console.log('deconnexion reussi')
        navigate('/')
      }
      catch(error) {
        alert('erreur de deconnexion')
      }
    } 
    
    
  
    return (
      <div className={`relative min-h-[100vh] w-full bg-white transition-all duration-700 ease-in-out ${!isClick?'px-[4%]':'sm:pl-[240px] pr-[4%]'} py-[100px] z-[10]`}>
  
        {/* the vertical menu of admin dashboard */}
  
        <div className={`fixed top-0 w-[200px] h-[100%] bg-bl shadow z-[100] bg-white pt-[75px]  overflow-auto transition-all duration-700 delay-0 ease-linear ${!isClick? 'left-[-50%]': 'left-0'} `}>
          <div className='flex flex-col justify-between w-full h-full items-center'>
  
              <div className='flex flex-col justify-center space-y-2 relative'>
                <div className='flex flex-col space-y-2'>
                  <Link to={'dashboard'} className='flex gap-4 items-center text-[#333333] duration-300 ease-in-out hover:bg-[#4F75FF] hover:text-white font-bold w-full text-lg  py-1 px-2 '><IoHomeSharp className='text-[25px]' /> <span>DashBoard</span>
                  </Link>
                  <ul>
                  </ul>
                </div>

                <div className='flex flex-col space-y-2'>
                  <Link to={'/admin/categories'} className='flex gap-4 items-center text-[#333333] duration-300 ease-in-out hover:bg-[#4F75FF] hover:text-white font-bold w-full text-lg  py-1 px-2 ' onClick={() => setOpenCategory(!openCategory)}><BiCategory className='text-[25px]' /> <span>Categories</span>
                  </Link>
                </div>
  
                <div className='flex flex-col space-y-2'>
                  <div className='flex gap-4 items-center text-[#333333] duration-300 ease-in-out hover:bg-[#4F75FF] hover:text-white font-bold w-full text-lg  py-1 px-2 ' onClick={() => setOpenProduct(!openProduct)}><MdLaptopChromebook className='text-[25px]' /> <span>Produits</span>
                  </div>
                  <ul className={`pl-8 text-base space-y-2 text-[#333333] ${!openProduct ? "hidden" : ''}`}>
                    <li className='ease-in-out duration-200 hover:text-[#4F75FF]'><Link to={'/admin/liste-produits'}>Voirs Les Produits</Link></li>
                    <li className='ease-in-out duration-200 hover:text-[#4F75FF]'><Link to={'ajouter-produit'}>Ajouter un Produit</Link></li>
                    
                  </ul>
                </div>



                <div className='flex flex-col space-y-2'>
                  <div className='flex gap-4 items-center text-[#333333] duration-300 ease-in-out hover:bg-[#4F75FF] hover:text-white font-bold w-full text-lg  py-1 px-2 ' onClick={() => setOpenPromos(!openPromos)}><BsNoiseReduction className='text-[25px]' /> <span>Promotions</span>
                  </div>
                  <ul className={`pl-8 text-base space-y-2 text-[#333333] ${!openPromos ? "hidden" : ''}`}>
                    <li className='ease-in-out duration-200 hover:text-[#4F75FF]'><Link to={'/admin/liste-promos'}>Liste Des Annonces</Link></li>
                    <li className='ease-in-out duration-200 hover:text-[#4F75FF]'><Link to={'/admin/ajouter-promos'}>Ajouter Une Annonces</Link></li>
                    
                  </ul>
                </div>
                
  
                <div className='flex flex-col space-y-2'>
                  <Link to={'/admin/liste-utilisateurs'} className='flex gap-4 items-center text-[#333333] duration-300 ease-in-out hover:bg-[#4F75FF] hover:text-white font-bold w-full text-lg  py-1 px-2 ' ><FaUser className='text-[25px]' /> <span>utilisateurs</span>
                  </Link>
                  
                </div>
                           
              </div>
            </div>
  
            <button className='block mx-auto outline-none absolute bottom-2 left-[50%] translate-x-[-50%] rounded-xl text-center text-white w-3/4  py-2 bg-[#4F75FF] hover:bg-[#4F75FF]' onClick={() => handleLogOut()}>
              <div>Log Out</div>
            </button>
          </div>
  
          <Outlet />
        
      </div>
    )
}
