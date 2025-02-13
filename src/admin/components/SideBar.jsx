import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { BiCategory } from "react-icons/bi";
import { BsNoiseReduction } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import { BsPhone } from "react-icons/bs";






export default function SideBar({isClick, setIsClick}) {
    const [openService, setOpenService] = useState(false);
    const [openExperience, setOpenExperience] = useState(false);
    const [openEducation, setOpenEducation] = useState(false);
    const [openProjects, setOpenProjects] = useState(false);
    const [openProfil, setOpenProfil] = useState(false);
    
    
  
    return (
      <div className={`relative min-h-[100vh] w-full bg-white transition-all duration-700 ease-in-out ${!isClick?'px-[4%]':'sm:pl-[240px] pr-[4%]'} py-[100px] z-[20]`}>
  
        {/* the vertical menu of admin dashboard */}
  
        <div className={`fixed top-0 w-[200px] h-[100%] bg-bl shadow z-[100] bg-white pt-[75px]  overflow-auto transition-all duration-700 delay-0 ease-linear ${!isClick? 'left-[-50%]': 'left-0'} `}>
          <div className='flex flex-col justify-between w-full h-full items-center'>
  
              <div className='flex flex-col justify-center space-y-2 relative'>
                <div className='flex flex-col space-y-2'>
                  <Link to={'dashboard'} className='flex gap-4 items-center text-[#333333] duration-300 ease-in-out hover:bg-[#4F75FF] hover:text-white font-bold w-full text-lg  py-1 px-4 '><IoHomeSharp className='text-[25px]' /> <span>DashBoard</span>
                  </Link>
                  <ul>
                  </ul>
                </div>
                <div className='flex flex-col space-y-2'>
                  <div className='flex gap-4 items-center text-[#333333] duration-300 ease-in-out hover:bg-[#4F75FF] hover:text-white font-bold w-full text-lg  py-1 px-4 ' onClick={() => setOpenService(!openService)}><BiCategory className='text-[25px]' /> <span>Categories</span>
                  </div>
                  <ul className={`pl-12 text-base space-y-2 text-[#333333] ${!openService ? "hidden" : ''}`}>
                    <li className='ease-in-out duration-200 hover:text-[#4F75FF]'><Link to={'service-list'}>All Categorie</Link></li>
                    <li className='ease-in-out duration-200 hover:text-[#4F75FF]'><Link to={'create-service'}>Add Categorie</Link></li>
                    
                  </ul>
                </div>
  
                <div className='flex flex-col space-y-2'>
                  <div className='flex gap-4 items-center text-[#333333] duration-300 ease-in-out hover:bg-[#4F75FF] hover:text-white font-bold w-full text-lg  py-1 px-4 ' onClick={() => setOpenExperience(!openExperience)}><MdLaptopChromebook className='text-[25px]' /> <span>Odinateurs</span>
                  </div>
                  <ul className={`pl-12 text-base space-y-2 text-[#333333] ${!openExperience ? "hidden" : ''}`}>
                    <li className='ease-in-out duration-200 hover:text-[#4F75FF]'><Link to={'all-experiences'}>Voirs Les Ordinateurs</Link></li>
                    <li className='ease-in-out duration-200 hover:text-[#4F75FF]'><Link to={'add-experience'}>Ajouter un PC</Link></li>
                    
                  </ul>
                </div>

                <div className='flex flex-col space-y-2'>
                  <div className='flex gap-4 items-center text-[#333333] duration-300 ease-in-out hover:bg-[#4F75FF] hover:text-white font-bold w-full text-lg  py-1 px-4 ' onClick={() => setOpenExperience(!openExperience)}><BsPhone className='text-[25px]' /> <span>Téléphoness</span>
                  </div>
                  <ul className={`pl-12 text-base space-y-2 text-[#333333] ${!openExperience ? "hidden" : ''}`}>
                    <li className='ease-in-out duration-200 hover:text-[#4F75FF]'><Link to={'all-experiences'}>Voirs les téléphones</Link></li>
                    <li className='ease-in-out duration-200 hover:text-[#4F75FF]'><Link to={'add-experience'}>Ajouter un téléphone</Link></li>
                    
                  </ul>
                </div>



                <div className='flex flex-col space-y-2'>
                  <div className='flex gap-4 items-center text-[#333333] duration-300 ease-in-out hover:bg-[#4F75FF] hover:text-white font-bold w-full text-lg  py-1 px-4 ' onClick={() => setOpenEducation(!openEducation)}><MdCastForEducation className='text-[25px]' /> <span>Promotions</span>
                  </div>
                  <ul className={`pl-12 text-base space-y-2 text-[#333333] ${!openEducation ? "hidden" : ''}`}>
                    <li className='ease-in-out duration-200 hover:text-[#4F75FF]'><Link to={'all-educations'}>All Promotion</Link></li>
                    <li className='ease-in-out duration-200 hover:text-[#4F75FF]'><Link to={'add-education'}>Add Promotion</Link></li>
                    
                  </ul>
                </div>
                
  
                <div className='flex flex-col space-y-2'>
                  <Link to={'/admin/all-contacts'} className='flex gap-4 items-center text-[#333333] duration-300 ease-in-out hover:bg-[#4F75FF] hover:text-white font-bold w-full text-lg  py-1 px-4 ' ><FaUser className='text-[25px]' /> <span>Users</span>
                  </Link>
                  
                </div>
                
                
                
              </div>
            </div>
  
            <button className='block mx-auto outline-none absolute bottom-2 left-[50%] translate-x-[-50%] rounded-xl text-center text-white w-3/4  py-2 bg-[#4F75FF] hover:bg-[#4F75FF]'>
              <Link >Log Out</Link>
            </button>
          </div>
  
          <Outlet />
        
      </div>
    )
}
