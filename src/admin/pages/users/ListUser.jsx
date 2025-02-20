import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import ModalPopUp from '../delete/ModalPopUp';




export default function ListUser() {

  const users = [
    {
      id: 1,
      username: 'Yaya',
      email: 'yayacoulibaly@GiMailShirt.com',
      password: 'jsdfklzk'
    },
    {
      id: 2,
      username: 'Yaya',
      email: 'yayacoulibaly@GiMailShirt.com',
      password: 'jsdfklzk'
    },
    {
      id: 3,
      username: 'Ridwane',
      email: 'yayacoulibaly@GiMailShirt.com',
      password: 'jsdfklzk'
    },
    {
      id: 4,
      username: 'Rudy',
      email: 'yayacoulibaly@GiMailShirt.com',
      password: 'jsdfklzk'
    },
    {
      id: 5,
      username: 'Aliou',
      email: 'aliocoulibaly@GiMailShirt.com',
      password: 'jsdfklzk'
    },
    {
      id: 6,
      username: 'Yhan',
      email: 'yhannabil@GiMailShirt.com',
      password: 'jsdfklzk'
    },

  ]

  const[isModalOpen, setIsModalOpen] = useState(false)

  const [selectedUser, setSelectedUser] = useState(null)

  const handleDeleleClick  = (userId) => {
    setSelectedUser(userId);
    setIsModalOpen(true)
  }
  const confirmDelete = () => {
    console.log(`User avec Id ${selectedUser} supprimer`);

    // logique de suppression dans la BD

    setIsModalOpen(false);
  }

  return (
    <div className='w-full h-full'>
      
      <div className='flex justify-between'>
        <div className='flex flex-col space-y-0'>
          <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>Liste Des  <span className='text-black'>Utilisateurs</span></h2>
          <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
        </div>
        <h4 className='flex items-center justify-center text-sm font-base'><FaUser className='text-[20px] mr-4' />/ Utilisateurs</h4>
                  
      </div>
    

      <div className="relative mt-[60px] no-scrollbar overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          #id
                      </th>
                      <th scope="col" className="px-6 py-3">
                          @username
                      </th>
                      <th scope="col" className="px-6 py-3">
                          email
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                {
                  users.map((user) => (

                    <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {user.id}
                        </th>
                        <td className="px-6 py-4">
                            {user.username}
                        </td>
                        <td className="px-6 py-4">
                            {user.email}
                        </td>
                        
                        <td className="px-6 py-4">
                            <button href="#" className="font-medium block dark:text-blue-500 rounded-lg py-1.5 w-[100px] bg-red-500 hover:bg-red-800 text-white" onClick={() => handleDeleleClick(user.id)} >Supprimer</button>
                        </td>
                    </tr>
                  ))
                }
                
              </tbody>
          </table>
      </div>

      {isModalOpen && <ModalPopUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} confirmDelete={confirmDelete} /> }
    </div>
  )
}
