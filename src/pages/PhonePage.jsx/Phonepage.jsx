import React, { useState } from "react";
import Img1 from "../../assets/ImagesPhone/iphone1.png";
import Img2 from "../../assets/ImagesPhone/iphone2.png";
import Img3 from "../../assets/ImagesPhone/iphone3.png";
import Img4 from "../../assets/ImagesPhone/samsung1.avif";
import Img5 from "../../assets/ImagesPhone/samsung2.avif";
import Img6 from "../../assets/ImagesPhone/samsung3.avif";
import Img7 from "../../assets/ImagesPhone/samsung4.avif";
import Img8 from "../../assets/ImagesPhone/tecno1.webp";
import Img9 from "../../assets/ImagesPhone/tecno2.webp";
import Img10 from "../../assets/ImagesPhone/tecno3.webp";
import Img11 from "../../assets/ImagesPhone/tecno4.webp";
import ProductCard from "../../Components/Produits/ProductCard";

const PhonePage = () => {
  const categories = ["All", "Iphone", "Samsung", "Infinix"];
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  const phones = [
    { 
      index: 1, 
      name: "Iphone 12", 
      category: "Iphone", 
      stock: 10, 
      promo: true, 
      descriptions: "Un iPhone performant avec un design élégant.", 
      caracteristiques: [
        "Écran Super Retina XDR 6.1 pouces",
        "Processeur A14 Bionic",
        "128 Go de stockage",
        "Double caméra 12 MP",
        "iOS 14"
      ], 
      images: [Img1, Img2, Img3] 
    },
    { 
      index: 2, 
      name: "Iphone 13", 
      category: "Iphone", 
      stock: 15, 
      promo: false, 
      descriptions: "Le dernier iPhone avec des performances améliorées.", 
      caracteristiques: [
        "Écran Super Retina XDR 6.1 pouces",
        "Processeur A15 Bionic",
        "256 Go de stockage",
        "Double caméra 12 MP",
        "iOS 15"
      ], 
      images: [Img2, Img3, Img1] 
    },
    { 
      index: 3, 
      name: "Iphone 14", 
      category: "Iphone", 
      stock: 20, 
      promo: true, 
      descriptions: "Un iPhone avec une autonomie améliorée et une caméra avancée.", 
      caracteristiques: [
        "Écran Super Retina XDR 6.1 pouces",
        "Processeur A16 Bionic",
        "128 Go de stockage",
        "Double caméra 12 MP",
        "iOS 16"
      ], 
      images: [Img3, Img1, Img2] 
    },
    { 
      index: 4, 
      name: "Iphone 15 Pro Max", 
      category: "Iphone", 
      stock: 5, 
      promo: false, 
      descriptions: "Le flagship d'Apple avec des performances ultimes.", 
      caracteristiques: [
        "Écran Super Retina XDR 6.7 pouces",
        "Processeur A17 Bionic",
        "512 Go de stockage",
        "Triple caméra 48 MP",
        "iOS 17"
      ], 
      images: [Img1, Img2, Img3] 
    },
    { 
      index: 5, 
      name: "Samsung Galaxy S21", 
      category: "Samsung", 
      stock: 12, 
      promo: true, 
      descriptions: "Un smartphone haut de gamme avec un écran dynamique.", 
      caracteristiques: [
        "Écran Dynamic AMOLED 6.2 pouces",
        "Processeur Exynos 2100",
        "128 Go de stockage",
        "Triple caméra 64 MP",
        "Android 11"
      ], 
      images: [Img4, Img5, Img6] 
    },
    { 
      index: 6, 
      name: "Samsung Galaxy A32", 
      category: "Samsung", 
      stock: 18, 
      promo: false, 
      descriptions: "Un smartphone abordable avec de bonnes performances.", 
      caracteristiques: [
        "Écran Super AMOLED 6.4 pouces",
        "Processeur Helio G80",
        "64 Go de stockage",
        "Quad caméra 64 MP",
        "Android 11"
      ], 
      images: [Img5, Img6, Img7] 
    },
    { 
      index: 7, 
      name: "Infinix Zero 8", 
      category: "Infinix", 
      stock: 25, 
      promo: true, 
      descriptions: "Un smartphone avec un design moderne et des performances solides.", 
      caracteristiques: [
        "Écran IPS LCD 6.85 pouces",
        "Processeur Helio G90T",
        "128 Go de stockage",
        "Double caméra 64 MP",
        "Android 10"
      ], 
      images: [Img8, Img9, Img10] 
    },
    { 
      index: 8, 
      name: "Infinix Hot 10", 
      category: "Infinix", 
      stock: 30, 
      promo: false, 
      descriptions: "Un smartphone économique avec une grande batterie.", 
      caracteristiques: [
        "Écran IPS LCD 6.78 pouces",
        "Processeur Helio G70",
        "64 Go de stockage",
        "Quad caméra 16 MP",
        "Android 10"
      ], 
      images: [Img9, Img10, Img11] 
    },
    // Ajoutez d'autres produits ici...
  ];

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      const newSelectedCategories = selectedCategories.includes("All")
        ? [category]
        : selectedCategories.includes(category)
        ? selectedCategories.length > 1
          ? selectedCategories.filter((cat) => cat !== category)
          : selectedCategories
        : [...selectedCategories, category];

      setSelectedCategories(
        newSelectedCategories.length ? newSelectedCategories : ["All"]
      );
    }
  };

  const filteredProducts = phones.filter(
    (product) =>
      selectedCategories.includes("All") ||
      selectedCategories.includes(product.category)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-800 dark:text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Téléphones</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 space-y-6">
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
                <label htmlFor={category} className="text-gray-700 dark:bg-slate-800 dark:text-white">
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              img={product.images[0]}
              name={product.name}
              category={product.category}
              descriptions={product.descriptions}
              caracteristiques={product.caracteristiques}
              images={product.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhonePage;