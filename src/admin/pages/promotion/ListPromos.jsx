import React, {useState} from 'react'
import Image from '../../../assets/ImagesPC/4.jpg'
import { BsNoiseReduction } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import ModalPopUp from '../delete/ModalPopUp';



export default function ListPromos() {

    const promos = [
        {
            id: 1,
            title: 'Bientôt La promotion commence ',
            description: 'We\'re on a mission to revolutionize online shopping by providing high-quality products at competitive prices while ensuring an exceptional customer experience.',
            imageUrl: Image,
        
        },
        {
            id: 2,
            title: 'Bientôt La promotion commence ',
            description: 'We\'re on a mission to revolutionize online shopping by providing high-quality products at competitive prices while ensuring an exceptional customer experience.',
            imageUrl: Image,
        
        },
        {
            id: 3,
            title: 'Bientôt La promotion commence ',
            description: 'We\'re on a mission to revolutionize online shopping by providing high-quality products at competitive prices while ensuring an exceptional customer experience.',
            imageUrl: Image,
        
        },
        {
            id: 4,
            title: 'Bientôt La promotion commence ',
            description: 'We\'re on a mission to revolutionize online shopping by providing high-quality products at competitive prices while ensuring an exceptional customer experience.',
            imageUrl: Image,
        
        },
        {
            id: 5,
            title: 'Bientôt La promotion commence ',
            description: 'We\'re on a mission to revolutionize online shopping by providing high-quality products at competitive prices while ensuring an exceptional customer experience.',
            imageUrl: Image,
        
        },
        {
            id: 6,
            title: 'Bientôt La promotion commence ',
            description: 'We\'re on a mission to revolutionize online shopping by providing high-quality products at competitive prices while ensuring an exceptional customer experience.',
            imageUrl: Image,
        
        },

    ]

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPromos, setSelectedPromos] = useState(null);
    
    const handleDeleteClick = (productId) => {
        setSelectedPromos(productId);
        setIsModalOpen(true);
      };
    
    const confirmDelete = () => {
        console.log(`L'annonce avec ID ${selectedPromos} supprimé`);
        // Ici, ajoute la logique pour supprimer le produit dans ton état ou base de données
        setIsModalOpen(false);
      };

  return (
    <div className='w-full h-full '>
        <div className='flex justify-between'>
            <div className='flex flex-col space-y-0'>
                <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>Liste <span className='text-black'>Des annonces de Promotion </span></h2>
                <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
            </div>
            <h4 className='flex items-center justify-center text-sm font-base'><BsNoiseReduction className='text-[20px] mr-4' />/ Promotions</h4>
                                  
        </div>

        <div className='mt-[60px] w-full h-full'>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-16 py-3">
                            <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Titre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    promos.map((item) => (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4">
                                <img src={item.imageUrl} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {item.title}
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {item.description}
                            </td>
                            
                            <td className="px-6 py-4 flex gap-8 items-center h-[150px]">
                                <Link to={'/admin/editer-promos/'+item.id} className='flex items-center justify-center gap-2 py-2 w-[100px] text-sm rounded-xl bg-blue-500 text-white duration-300 ease-in-out hover:bg-blue-900 '>
                                <MdEdit/> <span>Editer</span>
                                </Link>
                                <button  className="font-medium text-white flex items-center justify-center gap-2 py-2 w-[100px] text-sm rounded-xl bg-red-500 duration-300 ease-in-out hover:bg-red-900 " type='button' 
                                 onClick={() => handleDeleteClick(item.id)}>Supprimer</button>
                                
                            </td>
                        </tr>



                    ))
                }
                    
                </tbody>
            </table>
        </div>

        {isModalOpen && (
            <ModalPopUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} confirmDelete={confirmDelete} />
        )}

    </div>
  )
}
