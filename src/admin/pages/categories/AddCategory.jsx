import React, { useState } from 'react';
import { BiCategory } from "react-icons/bi";
import { useCategory } from '../../../context/CategoryContext';
import ModalPopUp from '../delete/ModalPopUp';

export default function AddCategory() {
    // Récupération des données du contexte
    const { loading, categories = [], addCategory, deleteCategory } = useCategory();
    const [newCategory, setNewCategory] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Vérification des données reçues
    console.log("Liste des catégories :", categories);

    // Ajout d'une nouvelle catégorie
    function handleSubmit(e) {
        e.preventDefault();

        if (!newCategory.trim()) {
            alert("Veuillez entrer un nom de catégorie valide !");
            return;
        }

        try {
            addCategory(newCategory);
            console.log("Catégorie ajoutée avec succès :", newCategory);
            setNewCategory(''); // Réinitialisation du champ après l'ajout
        } catch (error) {
            alert("Erreur lors de l'ajout de la catégorie : " + error);
        }
    }

    // Suppression d'une catégorie
    const handleDeleteClick = (categoryId) => {
        setSelectedCategory(categoryId);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        if (!selectedCategory) {
            console.error("Aucune catégorie sélectionnée !");
            return;
        }

        try {
            deleteCategory(selectedCategory);
            console.log(`Catégorie avec ID ${selectedCategory} supprimée`);
        } catch (error) {
            alert("Erreur de suppression : " + error);
        }

        setIsModalOpen(false);
    };

    return (
        loading ? (
            <div className='w-full h-[60vh] flex items-center justify-center'>
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
                        <h2 className='text-[#4F75FF] font-bold text-[1.5rem] '>Admin <span className='text-black'>Catégories</span></h2>
                        <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
                    </div>
                    <h4 className='flex items-center justify-center text-sm font-base'>
                        <BiCategory className='text-[20px] mr-4' />/ Catégories
                    </h4>
                </div>

                <div className='flex sm:flex-row flex-col w-full mt-[50px] rounded-xl bg-slate-100 h-full p-4 gap-8'>
                    <form onSubmit={handleSubmit} className='sm:w-full text-[1rem] p-4 h-auto space-y-4'>
                        <h3 className='text-lg font-bold text-gray-800'>Ajouter</h3>
                        <input
                            className='block w-full rounded-md px-4 py-[8px] mb-4 outline-none focus:border focus:border-[#4f75ff] border-[1.5px] border-none text-[1rem] focus:shadow-lg shadow-[#8a9fea]'
                            type="text"
                            name='type'
                            placeholder='Nom de la catégorie'
                            required
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                        <button type='submit' className='bg-[#4f75ff] duration-300 ease-in-out hover:bg-[#4f75ff] text-[1rem] shadow-lg shadow-[#8ea5f6] block w-full text-white font-bold rounded-md px-2 py-2'>
                            Enregistrer
                        </button>
                    </form>

                    <div className='flex flex-col space-y-4 justify-center p-4 sm:w-full'>
                        <h3 className='text-lg font-bold mb-4 text-gray-800'>Liste des Catégories</h3>
                        {Array.isArray(categories) && categories.length > 0 ? (
                            categories.map((category) => (
                                <div key={category.id} className='w-full bg-white rounded-md px-2 flex gap-4 items-center justify-between'>
                                    <p className='text-base text-center py-2'>{category.name}</p>
                                    <button
                                        className='block px-2 py-1 bg-red-500 duration-300 ease-in-out hover:bg-red-800 rounded-md cursor-pointer text-white'
                                        onClick={() => handleDeleteClick(category.id)}
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center mt-4">Aucune catégorie disponible.</p>
                        )}
                    </div>
                </div>

                {isModalOpen && (
                    <ModalPopUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} confirmDelete={confirmDelete} />
                )}
            </div>
        )
    );
}
