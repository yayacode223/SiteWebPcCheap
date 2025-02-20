import React from 'react'
import { GoAlert } from "react-icons/go";
import { Modal } from 'flowbite-react';


export default function ModalPopUp({isModalOpen, setIsModalOpen, confirmDelete}) {
  return (
    <Modal className='z-[2000]' show={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative">
                  
              {/* Bouton de fermeture */}
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 border-[1.5px] rounded-full py-1 px-2 text-[10px] text-gray-400 hover:text-gray-600">
                X
              </button>
    
              {/* Icône d'alerte */}
              <div className="flex justify-center">
                <GoAlert size={40} className="text-gray-500" />
              </div>
    
              {/* Message de confirmation */}
              <h2 className="text-lg font-semibold text-gray-700 mt-4">Voulez-vous vraiment supprimer ce produit ?</h2>
    
              {/* Boutons */}
              <div className="mt-6 flex justify-center gap-4">
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="border px-5 py-2 rounded-lg hover:bg-gray-100 transition font-medium"
                >
                  Annuler
                </button>
                <button 
                  onClick={confirmDelete} 
                  className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition font-medium"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
  </Modal>
  )
}
