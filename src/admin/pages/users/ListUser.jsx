import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import ModalPopUp from '../delete/ModalPopUp';
import { useUsers } from '../../../context/UserContext';

export default function ListUser() {
    // Récupération des utilisateurs du contexte
    const { users = [], loading, deleteUser } = useUsers();
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    console.log("Liste des utilisateurs :", users);

    // Suppression d'un utilisateur
    const handleDeleteClick = (userId) => {
        setSelectedUser(userId);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        if (!selectedUser) {
            console.error("Aucun utilisateur sélectionné !");
            return;
        }

        try {
            deleteUser(selectedUser);
            console.log(`Utilisateur avec ID ${selectedUser} supprimé`);
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
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
            <div className='w-full h-full'>
                <div className='flex justify-between'>
                    <div className='flex flex-col space-y-0'>
                        <h2 className='text-[#4F75FF] font-bold text-[1.5rem]'>Liste des <span className='text-black'>Utilisateurs</span></h2>
                        <p className='text-sm font-base text-[#4F75FF]'>PANNEAU D'ADMINISTRATION</p>
                    </div>
                    <h4 className='flex items-center justify-center text-sm font-base'>
                        <FaUser className='text-[20px] mr-4' /> / Utilisateurs
                    </h4>
                </div>

                <div className="relative mt-[60px] no-scrollbar overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">#ID</th>
                                <th scope="col" className="px-6 py-3">@Username</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(users) && users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.id}
                                        </th>
                                        <td className="px-6 py-4">{user.username}</td>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">
                                            <button 
                                                className="font-medium block dark:text-blue-500 rounded-lg py-1.5 w-[100px] bg-red-500 hover:bg-red-800 text-white" 
                                                onClick={() => handleDeleteClick(user.id)}
                                            >
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-6 py-4 text-center text-gray-500">Aucun utilisateur trouvé.</td>
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
