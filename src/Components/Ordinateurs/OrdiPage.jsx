import React, { useState } from 'react';
import Img1 from "../../assets/Ordi_img/lenovo1.avif";
import Img2 from "../../assets/Ordi_img/dell1.jpg";
import Img3 from "../../assets/Ordi_img/dell2.jpg";
import Img4 from "../../assets/Ordi_img/dell3.webp";
import Img5 from "../../assets/Ordi_img/dell4.jpg";
import Img6 from "../../assets/Ordi_img/hp1.webp";
import Img7 from "../../assets/Ordi_img/hp2.jpg";
import Img8 from "../../assets/Ordi_img/hp3.webp";
import Img9 from "../../assets/Ordi_img/hp4.jpg";
import Img10 from "../../assets/Ordi_img/lenovo2.jpg";
import Img11 from "../../assets/Ordi_img/lenovo3.jpg";

const OrdiPage = () => {
  const categories = ['All', 'HP', 'Lenovo', 'Dell'];
  const [selectedCategories, setSelectedCategories] = useState(['All']);

  const Ordinateurs = [
    { name: 'HP Pavillon x360', category: 'HP', img: Img9 },
    { name: 'HP Spectre x360', category: 'HP', img: Img6},
    { name: 'Dell XPS 13', category: 'Dell', img: Img2 },
    { name: 'Lenovo ThinkPad X1 Carbon', category: 'Lenovo', img: Img10 },
    { name: 'HP Envy 15', category: 'HP', img: Img8 },
    { name: 'Dell Inspiron 15', category: 'Dell', img: Img3},
    { name: 'Lenovo Yoga 9i', category: 'Lenovo', img: Img11 },
    { name: 'HP Omen 15', category: 'HP', img: Img7 },
    { name: 'Dell G5 15', category: 'Dell', img: Img5 },
    { name: 'Lenovo Legion 5', category: 'Lenovo', img: Img1 },
    { name: 'Lenovo Legion 5', category: 'Lenovo', img: Img4 },
  ];
  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setSelectedCategories(['All']);
      return;
    }
    if (selectedCategories.includes('All')) {
      setSelectedCategories([category]);
    } else {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.includes(category)
          ? prevSelectedCategories.filter((cat) => cat !== category)
          : [...prevSelectedCategories, category]
      );
    }
  };

  const filteredProducts = Ordinateurs.filter((product) =>
    selectedCategories.includes('All') || selectedCategories.includes(product.category)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Ordinateurs</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Section */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Catégorie</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category} className="flex items-center">
                  <input 
                    type="checkbox" 
                    id={category} 
                    className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedCategories.includes(category)} 
                    onChange={() => handleCategoryChange(category)}
                  />
                  <label htmlFor={category} className="text-gray-700">{category}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-white p-2 rounded-lg shadow-md">
              <img src={product.img} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdiPage;
