import React, { useState } from 'react';
import Img1 from "../../assets/ImagesPC/lenovo1.avif";
import Img2 from "../../assets/ImagesPC/dell1.jpg";
import Img3 from "../../assets/ImagesPC/dell2.jpg";
import Img4 from "../../assets/ImagesPC/dell3.webp";
import Img5 from "../../assets/ImagesPC/dell4.jpg";
import Img6 from "../../assets/ImagesPC/hp1.webp";
import Img7 from "../../assets/ImagesPC/hp2.jpg";
import Img8 from "../../assets/ImagesPC/hp3.webp";
import Img9 from "../../assets/ImagesPC/hp4.jpg";
import Img10 from "../../assets/ImagesPC/lenovo2.jpg";
import Img11 from "../../assets/ImagesPC/lenovo3.jpg";
import ProductCard from "../../Components/Produits/ProductCard";

const OrdiPage = () => {
  const categories = ['All', 'HP', 'Lenovo', 'Dell'];
  const [selectedCategories, setSelectedCategories] = useState(['All']);

  const Ordinateurs = [
    { 
        index: 1, 
        name: 'HP Pavilion x360', 
        category: 'HP', 
        stock: 15, 
        promo: true, 
        descriptions: "Un ordinateur portable convertible avec écran tactile et performances solides.",
        caracteristiques: [
            "Processeur Intel Core i5-1135G7",
            "8 Go de RAM",
            "SSD 512 Go",
            "Écran tactile 14 pouces Full HD",
            "Windows 11"
        ],
        images: [Img6, Img7, Img8, Img9]
    },
    { 
        index: 2, 
        name: 'Lenovo IdeaPad 5', 
        category: 'Lenovo', 
        stock: 10, 
        promo: false, 
        descriptions: "Ordinateur portable performant pour un usage quotidien.",
        caracteristiques: [
            "Processeur AMD Ryzen 5 5500U",
            "16 Go de RAM",
            "SSD 512 Go",
            "Écran Full HD 15.6 pouces",
            "Windows 11"
        ],
        images: [Img1, Img10, Img11]
    },
    { 
        index: 3, 
        name: 'Dell Inspiron 14', 
        category: 'Dell', 
        stock: 8, 
        promo: true, 
        descriptions: "Un ultrabook léger et rapide avec des caractéristiques modernes.",
        caracteristiques: [
            "Processeur Intel Core i7-1165G7",
            "8 Go de RAM",
            "SSD 512 Go",
            "Écran Full HD 14 pouces",
            "Windows 10"
        ],
        images: [Img2, Img3, Img4]
    },
    { 
        index: 4, 
        name: 'Dell XPS 13', 
        category: 'Dell', 
        stock: 5, 
        promo: false, 
        descriptions: "Ordinateur haut de gamme, compact et très performant.",
        caracteristiques: [
            "Processeur Intel Core i7-1185G7",
            "16 Go de RAM",
            "SSD 1 To",
            "Écran 13.4 pouces 4K",
            "Windows 11"
        ],
        images: [Img5, Img3, Img4]
    },
    { 
        index: 5, 
        name: 'Lenovo Legion 5', 
        category: 'Lenovo', 
        stock: 20, 
        promo: true, 
        descriptions: "Ordinateur gaming puissant avec une excellente performance graphique.",
        caracteristiques: [
            "Processeur AMD Ryzen 7 5800H",
            "16 Go de RAM",
            "SSD 1 To",
            "Écran 15.6 pouces Full HD 144Hz",
            "Windows 10"
        ],
        images: [Img1, Img10, Img11]
    },
    { 
        index: 6, 
        name: 'HP Spectre x360', 
        category: 'HP', 
        stock: 12, 
        promo: false, 
        descriptions: "Un ultraportable élégant avec des performances exceptionnelles.",
        caracteristiques: [
            "Processeur Intel Core i7-1165G7",
            "16 Go de RAM",
            "SSD 512 Go",
            "Écran tactile 13.3 pouces 4K",
            "Windows 11"
        ],
        images: [Img6, Img7, Img8]
    },
    { 
        index: 7, 
        name: 'Acer Swift 3', 
        category: 'Acer', 
        stock: 18, 
        promo: true, 
        descriptions: "Ordinateur léger et polyvalent pour une utilisation quotidienne.",
        caracteristiques: [
            "Processeur Intel Core i5-1135G7",
            "8 Go de RAM",
            "SSD 512 Go",
            "Écran Full HD 14 pouces",
            "Windows 10"
        ],
        images: [Img1, Img2]
    },
    { 
        index: 8, 
        name: 'Asus ZenBook 14', 
        category: 'Asus', 
        stock: 25, 
        promo: false, 
        descriptions: "Ordinateur ultrafin et léger pour une productivité optimale.",
        caracteristiques: [
            "Processeur Intel Core i7-1165G7",
            "16 Go de RAM",
            "SSD 512 Go",
            "Écran Full HD 14 pouces",
            "Windows 10"
        ],
        images: [Img1, Img2]
    },
    { 
        index: 9, 
        name: 'MSI GF63 Thin', 
        category: 'MSI', 
        stock: 6, 
        promo: true, 
        descriptions: "Ordinateur gaming avec un design fin et des performances impressionnantes.",
        caracteristiques: [
            "Processeur Intel Core i7-10750H",
            "16 Go de RAM",
            "SSD 512 Go",
            "Écran 15.6 pouces Full HD 60Hz",
            "Windows 10"
        ],
        images: [Img1, Img2, Img3]
    },
    { 
        index: 10, 
        name: 'Razer Blade 15', 
        category: 'Razer', 
        stock: 5, 
        promo: false, 
        descriptions: "Ordinateur gaming ultra-performant avec un design élégant.",
        caracteristiques: [
            "Processeur Intel Core i7-11800H",
            "16 Go de RAM",
            "SSD 1 To",
            "Écran 15.6 pouces 144Hz",
            "Windows 10"
        ],
        images: [Img2, Img3]
    },
    { 
        index: 11, 
        name: 'Microsoft Surface Laptop 4', 
        category: 'Microsoft', 
        stock: 8, 
        promo: true, 
        descriptions: "Un ordinateur haut de gamme, parfait pour le travail et la créativité.",
        caracteristiques: [
            "Processeur Intel Core i5-1135G7",
            "8 Go de RAM",
            "SSD 512 Go",
            "Écran 13.5 pouces PixelSense",
            "Windows 11"
        ],
        images: [Img6, Img7]
    },
    { 
        index: 12, 
        name: 'Samsung Galaxy Book Pro', 
        category: 'Samsung', 
        stock: 10, 
        promo: false, 
        descriptions: "Ordinateur ultra-léger avec des caractéristiques haut de gamme.",
        caracteristiques: [
            "Processeur Intel Core i7-1165G7",
            "16 Go de RAM",
            "SSD 512 Go",
            "Écran 13.3 pouces AMOLED",
            "Windows 11"
        ],
        images: [Img1, Img2, Img3]
    },
    { 
        index: 13, 
        name: 'Alienware m15 R6', 
        category: 'Alienware', 
        stock: 4, 
        promo: false, 
        descriptions: "Ordinateur gaming ultra-puissant avec un design futuriste.",
        caracteristiques: [
            "Processeur Intel Core i7-11800H",
            "16 Go de RAM",
            "SSD 1 To",
            "Écran 15.6 pouces Full HD 360Hz",
            "Windows 10"
        ],
        images: [Img2, Img3]
    },
    { 
        index: 14, 
        name: 'Toshiba Tecra A50', 
        category: 'Toshiba', 
        stock: 15, 
        promo: true, 
        descriptions: "Ordinateur professionnel robuste et performant.",
        caracteristiques: [
            "Processeur Intel Core i5-1135G7",
            "8 Go de RAM",
            "SSD 512 Go",
            "Écran Full HD 15.6 pouces",
            "Windows 10 Pro"
        ],
        images: [Img6, Img7]
    },
    { 
        index: 15, 
        name: 'Huawei MateBook X Pro', 
        category: 'Huawei', 
        stock: 6, 
        promo: false, 
        descriptions: "Ordinateur ultra-mince avec un design premium.",
        caracteristiques: [
            "Processeur Intel Core i7-1165G7",
            "16 Go de RAM",
            "SSD 512 Go",
            "Écran 13.9 pouces 3K",
            "Windows 10"
        ],
        images: [Img1, Img10]
    }
];

    // Ajoutez d'autres produits ici...
  

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setSelectedCategories(['All']);
    } else {
      const newSelectedCategories = selectedCategories.includes('All')
        ? [category]
        : selectedCategories.includes(category)
        ? selectedCategories.length > 1
          ? selectedCategories.filter(cat => cat !== category)
          : selectedCategories
        : [...selectedCategories, category];

      setSelectedCategories(newSelectedCategories.length ? newSelectedCategories : ['All']);
    }
  };

  const filteredProducts = Ordinateurs.filter(product => selectedCategories.includes('All') || selectedCategories.includes(product.category));

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Ordinateurs</h1>
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
                <label htmlFor={category} className="text-gray-700">{category}</label>
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

export default OrdiPage;