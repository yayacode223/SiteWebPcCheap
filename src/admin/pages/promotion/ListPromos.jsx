import React, { useState } from 'react';
import { BsNoiseReduction } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import ModalPopUp from '../delete/ModalPopUp';
import { useNews } from '../../../context/NewsContext';
import { BASE_URL } from '../../../utils/AxiosInstance';

export default function ListPromos() {
    const { news, loading, setNewsId, deleteNews } = useNews();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPromos, setSelectedPromos] = useState(null);

    // Vérification de `news`
    console.log("Valeur de news :", news);

    // Fonction pour ouvrir la pop-up de suppression
    const handleDeleteClick = (newsId) => {
        setSelectedPromos(newsId);
        setIsModalOpen(true);
    };

    // Suppression confirmée
    const confirmDelete = () => {
        console.log(`Suppression de l'annonce avec ID ${selectedPromos}`);
        try {
            deleteNews(selectedPromos);
            console.log('Suppression réussie');
        } catch (error) {
            console.error('Erreur de suppression : ' + error);
        }
        setIsModalOpen(false);
    };

    return (
        loading ? (
            <div className="w-full h-[60vh] flex items-center justify-center">
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
                </div>
            </div>
        ) : (
            <div className='w-full h-full '>
                <div className='flex justify-between'>
                    <div className='flex flex-col space-y-0'>
                        <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>
                            Liste <span className='text-black'>Des annonces de Promotion</span>
                        </h2>
                        <p className='text-sm font-base text-[#4F75FF]'>{"PANNEAU D'ADMINISTRATION"}</p>
                    </div>
                    <h4 className='flex items-center justify-center text-sm font-base'>
                        <BsNoiseReduction className='text-[20px] mr-4' /> / Promotions
                    </h4>
                </div>

                <div className='mt-[60px] w-full h-full'>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-16 py-3">
                                    <span className="tewt-gray-700 ">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">Titre</th>
                                <th scope="col" className="px-6 py-3">Description</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(news) && news.length > 0 ? (
                                news.map((item, index) => (
                                    <tr key={item.id ?? index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="p-4">
                                            <img src={`${BASE_URL.replace('/api', '')}${item.imageName}`} className="w-16 md:w-32 max-w-full max-h-full" alt="News" />
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{item.title}</td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{item.body}</td>
                                        <td className="px-6 py-4 flex gap-8 items-center h-[150px]">
                                            <Link to={`/admin/editer-promos/${item.id}`} onClick={() => setNewsId(item.id)} className='flex items-center justify-center gap-2 py-2 w-[100px] text-sm rounded-xl bg-blue-500 text-white duration-300 ease-in-out hover:bg-blue-900 '>
                                                <MdEdit /> <span>Editer</span>
                                            </Link>
                                            <button className="font-medium text-white flex items-center justify-center gap-2 py-2 w-[100px] text-sm rounded-xl bg-red-500 duration-300 ease-in-out hover:bg-red-900" 
                                                type='button' 
                                                onClick={() => handleDeleteClick(item.id)}>
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4 text-gray-500">Aucune annonce disponible</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {isModalOpen && (
                    <ModalPopUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} confirmDelete={confirmDelete} />
                )}
            </div>
        )
    );
}
