import React from "react";
import Img1 from "../../assets/ImagesPC/2.jpg";
import Img2 from "../../assets/ImagesPC/3.jpg";
import Img3 from "../../assets/ImagesPC/1.jpg";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description: "Nos PC vous offrent une expérience utilisateur fluide, fiable et sécurisée."
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
              "Nos PC vous offrent une expérience utilisateur fluide, fiable et sécurisée."  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
        "Nos PC vous offrent une expérience utilisateur fluide, fiable et sécurisée."  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-40">
          <h1 data-aos="fade-up" className="text-3xl font-bold text-center">
            Les meilleurs Produits
          </h1>
          <p data-aos="fade-up" className="text-xs text-center text-gray-400">
          Puissance et élégance réunies : les PC HP sont conçus pour offrir des performances exceptionnelles, une fiabilité à toute épreuve et un design moderne.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
