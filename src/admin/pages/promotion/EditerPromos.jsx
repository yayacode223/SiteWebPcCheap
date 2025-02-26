import React, { useState, useEffect } from 'react';
import { BsNoiseReduction } from "react-icons/bs";
import { useNews } from '../../../context/NewsContext';
import { BASE_URL } from '../../../utils/AxiosInstance';
import { useNavigate } from 'react-router-dom';  // 🔹 Ajout de l'import correct

export default function EditerPromos() {
    // Récupération de `oldNews` et des fonctions du contexte
    const { oldNews, loading, updateNews } = useNews();
    const navigate = useNavigate(); // 🔹 Ajout de useNavigate()

    // Gestion de l'état avec `useEffect` pour éviter l'initialisation à vide
    const [newNews, setNewNews] = useState({
        title: '',
        body: '',
        image: null
    });

    useEffect(() => {
        if (oldNews) {
            setNewNews({
                title: oldNews.title,
                body: oldNews.body,
                image: null // L'image ne peut pas être préchargée dans un input file
            });
        }
    }, [oldNews]); // 🔹 Se met à jour dès que `oldNews` change

    async function handleSubmit(e) {
        e.preventDefault();

        if (!newNews.title || !newNews.body) {
            console.error("Tous les champs doivent être remplis.");
            return;
        }

        try {
            await updateNews(oldNews.id, newNews);
            console.log('Modification de News réussie');
            navigate('/admin/liste-promos');
        } catch (error) {
            console.error("Erreur lors de la modification d'une annonce : " + error);
        }
    }

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
            <div className='w-full h-full'>
                <div className='flex justify-between'>
                    <div className='flex flex-col space-y-0'>
                        <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>
                            Éditer <span className='text-black'>L'annonce : {oldNews?.title} </span>
                        </h2>
                        <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
                    </div>
                    <h4 className='flex items-center justify-center text-sm font-base'>
                        <BsNoiseReduction className='text-[20px] mr-4' /> / Promotions
                    </h4>
                </div>

                {/* Affichage de l'ancienne image */}
                {oldNews?.image && (
                    <img 
                        className='block mt-[60px]' 
                        src={`${BASE_URL.replace('/api', '')}${oldNews.image}`} 
                        width={150} 
                        alt={oldNews.title} 
                    />
                )}

                <div className='mt-[60px] bg-slate-100 w-full h-full'>
                    <form onSubmit={handleSubmit}>
                        <div className="relative text-[1rem] p-4 h-auto">
                            <input 
                                className='block w-full rounded-md px-4 py-2 mb-4 outline-none border-none focus:border focus:border-[#4F75FF] border-[1.5px] text-[1rem] focus:shadow-lg shadow-[#acbcf8]' 
                                type="text" 
                                placeholder='Titre' 
                                value={newNews.title} 
                                onChange={(e) => setNewNews({ ...newNews, title: e.target.value })} 
                                required 
                            />

                            <textarea 
                                className='block w-full h-[200px] p-2 outline-none border-none focus:border focus-border-[1.5px] border-[#4F75FF] rounded-md focus:shadow-lg shadow-[#4F75FF] mb-4' 
                                placeholder='Écrivez un paragraphe' 
                                value={newNews.body} 
                                onChange={(e) => setNewNews({ ...newNews, body: e.target.value })} 
                                required
                            ></textarea>

                            <label 
                                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white" 
                                htmlFor="file_input"
                            >
                                Choisir une nouvelle image
                            </label>
                            <input 
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                                id="file_input" 
                                type="file" 
                                accept="image/*"
                                onChange={(e) => setNewNews({ ...newNews, image: e.target.files[0] })}
                            />
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                Formats acceptés : SVG, PNG, JPG, GIF (MAX. 800x400px).
                            </p>
                        </div>

                        <button 
                            type='submit' 
                            className='bg-blue-500 duration-300 ease-in-out hover:bg-blue-800 text-[1rem] shadow-lg shadow-blue-200 block w-full text-white font-bold rounded-md p-2 '
                        >
                            Enregistrer
                        </button>
                    </form>
                </div>
            </div>
        )
    );
}
