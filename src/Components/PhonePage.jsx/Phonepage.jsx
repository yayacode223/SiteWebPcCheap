import React, { useState } from 'react';
import Img1 from "../../assets/Phone_img/iphone1.png";
import Img2 from "../../assets/Phone_img/iphone2.png";
import Img3 from "../../assets/Phone_img/iphone3.png";
import Img4 from "../../assets/Phone_img/samsung1.avif";
import Img5 from "../../assets/Phone_img/samsung2.avif";
import Img6 from "../../assets/Phone_img/samsung3.avif";
import Img7 from "../../assets/Phone_img/samsung4.avif";
import Img8 from "../../assets/Phone_img/tecno1.webp";
import Img9 from "../../assets/Phone_img/tecno2.webp";
import Img10 from "../../assets/Phone_img/tecno3.webp";
import Img11 from "../../assets/Phone_img/tecno4.webp";

const   PhonePage = () => {
  const categories = ['All', 'Iphone', 'Samsung', 'Infinix'];
  const [selectedCategories, setSelectedCategories] = useState(['All']);

  const Ordinateurs = [
    { name: 'Iphone 12', category: 'Iphone', img: Img9 },
    { name: 'Iphone 13', category: 'Iphone', img: Img6},
    { name: 'Iphone 14', category: 'Iphone', img: Img2 },
    { name: 'Iphone 15 Pro Max', category: 'Iphone', img: Img10 },
    { name: 'Iphone 14 Pro', category: 'Iphone', img: Img8 },
    { name: 'Samsung A12', category: 'Samsung', img: Img3},
    { name: 'Lenovo Yoga 9i', category: 'Samsung', img: Img11 },
    { name: 'HP Omen 15', category: 'Samsung', img: Img7 },
    { name: 'Dell G5 15', category: 'Samsung', img: Img5 },
    { name: 'Lenovo Legion 5', category: 'Samsung', img: Img1 },
    { name: 'Lenovo Legion 5', category: 'Infinix', img: Img4 },
    { name: 'Dell G5 15', category: 'Infinx', img: Img5 },
    { name: 'Lenovo Legion 5', category: 'Infinix', img: Img1 },
    { name: 'Lenovo Legion 5', category: 'Infinix', img: Img4 },
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
      <h1 className="text-3xl font-bold mb-8">Téléphones</h1>

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

export default PhonePage;
