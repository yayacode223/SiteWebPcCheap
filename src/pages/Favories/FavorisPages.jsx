import React, { useState } from "react";
import { useFavory } from "../../context/FavoryContext";
import { BASE_URL } from "../../utils/AxiosInstance";
import { toast } from "react-toastify"; // Import de toast


export default function FavorisPage() {

  // recuperation des controles et information du Favoriscontext

  const {favories, loading, deleteFavory} = useFavory();
  


  const removeProduit  = async (id) => {
    try{
      await deleteFavory(id);
      console.log('favory supprimé')
      toast.success("Favoris supprimé avec succès")

    } catch(error) {
      console.error(`erreur lors de la suppression du produit ${id} aux favoris: ${error}`)
      toast.error("erreur de suppression de favoris")
    }
  };

  return (
    loading?
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
      </div>
    </div>
    :
    <div className="w-[90%] mx-auto p-6 bg-transparent min-h-screen">
      <h1 className="text-2xl font-bold my-12 dark:text-gray-100 text-gray-800">Mes Favoris</h1>
      <div className="overflow-x-auto bg-slate-100 dark:bg-slate-800  rounded-lg shadow">
        {favories.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-100 py-6">Aucun favori pour le moment.</p>
        ) : (
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-slate-950 dark:text-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-md font-medium dark:text-gray-100 text-gray-500 uppercase">Images</th>
                <th className="px-6 py-3 text-left text-md font-medium dark:text-gray-100 text-gray-500 uppercase">Nom</th>
                <th className="px-6 py-3 text-left text-md font-medium dark:text-gray-100 text-gray-500 uppercase">Marque</th>
                <th className="px-6 py-3 text-left text-md font-medium dark:text-gray-100 text-gray-500 uppercase">Catégorie</th>
                <th className="px-6 py-3 text-left text-md font-medium dark:text-gray-100 text-gray-500 uppercase">Remove</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {favories.map((produit) => (
                <tr key={produit.id} className="hover:bg-gray-50 dark:hover:bg-slate-900 dark:text-gray-100 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <img
                      src={BASE_URL.replace('/api','')+produit.images[0]?.imageName || "https://via.placeholder.com/150"}
                      alt={produit.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400">{produit.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400">{produit.mark}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400">{produit.category.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-transform transform hover:scale-105"
                      onClick={() => removeProduit(produit.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
