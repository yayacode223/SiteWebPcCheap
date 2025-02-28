import React, { useState } from "react";
import Img from "../../assets/ImagesPC/lenovo1.avif";

export default function FavorisPage() {
  const [produits, setProduits] = useState([
    {
      id: 3,
      name: "hp",
      description: "jskcsfdo",
      stock: true,
      features: ["jnef", "frefe"],
      mark: "hkjffr",
      category: { name: "ordinateur" },
      images: [{ id: 3, imageName: Img }],
      promo: false,
    },
    {
      id: 4,
      name: "dell",
      description: "description dell",
      stock: false,
      features: ["feature1", "feature2"],
      mark: "dellmark",
      category: { name: "ordinateur" },
      images: [{ id: 4, imageName: Img }],
      promo: true,
    },
  ]);

  const removeProduit = (id) => {
    setProduits(produits.filter((produit) => produit.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Mes Favoris</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        {produits.length === 0 ? (
          <p className="text-center text-gray-500 py-6">Aucun favori pour le moment.</p>
        ) : (
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Images</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Caractéristiques</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Marque</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Catégorie</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Remove</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {produits.map((produit) => (
                <tr key={produit.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <img
                      src={produit.images[0]?.imageName || "https://via.placeholder.com/150"}
                      alt={produit.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{produit.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{produit.features.join(", ")}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{produit.mark}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{produit.category.name}</td>
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
