import React from "react";
import Slider from "react-slick";
import { BASE_URL } from "../../utils/AxiosInstance";
import ProductCard from "../../Components/Produits/ProductCard"; // ou ton affichage personnalisé
import { Link } from "react-router-dom";

// Configuration du slider
const settings = {
  dots: true,
  infinite: true,
  autoPlay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Produits({ ordinateurs, telephones }) {
  // On utilise une valeur par défaut pour éviter que le tableau soit undefined
  const limitedOrdinateurs = (ordinateurs || []).slice(0, 10);
  const limitedTelephones = (telephones || []).slice(0, 10);

  return (
    <div className="w-full px-[5%] bg-gray-100 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-800 min-h-screen mb-12">
      {/* Section Ordinateurs */}
      <div className="py-4 md:mb-8">
        <h2 className="text-center mt-4 dark:text-gray-100 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Ordinateurs Portables
        </h2>
      </div>

      <div className="w-full">
        <Slider {...settings}>
          {limitedOrdinateurs && limitedOrdinateurs.length > 0 ? (
            limitedOrdinateurs.map((product) => (
              <div key={product.id} className="flex flex-col items-center justify-center gap-4 p-4 my-4">
                <div className="bg-white group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-4">
                  <div className="flex items-center justify-center w-full h-[250px]">
                    <Link to={'/ordinateurs'}>
                      <img
                        src={
                          product.images && product.images.length > 0
                            ? BASE_URL.replace("/api", "") + product.images[0].imageName
                            : "/images/default-product.jpg"
                        }
                        alt={product.name}
                        className="object-contain transition duration-200 group-hover:scale-105 p-4 w-full"
                      />
                    </Link>
                  </div>
                  <hr className="w-full" />
                  <div className="flex flex-col items-start p-2 bg-blue-100 dark:bg-slate-900 dark:text-gray-100">
                    <a href="#" className="font-bold text-gray-800 dark:text-gray-300 transition duration-100 hover:text-gray-500 lg:text-lg">
                      {product.name}
                    </a>
                    <span className="text-sm dark:text-gray-300 text-gray-500 lg:text-base">
                      {product.mark || "Non défini"}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Aucun ordinateur disponible.</p>
          )}
        </Slider>
      </div>

      {/* Section Téléphones */}
      <div className="py-4 md:mb-8 mt-12">
        <h2 className="text-center mt-4 dark:text-gray-100 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Téléphones Portables
        </h2>
      </div>

      <div className="w-full">
        <Slider {...settings}>
          {limitedTelephones && limitedTelephones.length > 0 ? (
            limitedTelephones.map((product) => (
              <div key={product.id} className="flex flex-col items-center justify-center gap-4 p-4 my-4">
                <div className="bg-white group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center justify-center w-full h-[250px]">
                    <Link to={'/telephones'}>
                      <img
                        src={
                          product.images && product.images.length > 0
                            ? BASE_URL.replace("/api", "") + product.images[0].imageName
                            : "/images/default-product.jpg"
                        }
                        alt={product.name}
                        className="object-contain transition duration-200 group-hover:scale-105 p-4 w-full"
                      />
                    </Link>
                  </div>
                  <hr className="w-full" />
                  <div className="flex flex-col items-start p-2 dark:bg-slate-900 bg-blue-100">
                    <a href="#" className="font-bold text-gray-800 dark:text-gray-300 transition duration-100 hover:text-gray-500 lg:text-lg">
                      {product.name}
                    </a>
                    <span className="text-sm text-gray-500 dark:text-gray-300 lg:text-base">
                      {product.mark || "Non défini"}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Aucun téléphone disponible.</p>
          )}
        </Slider>
      </div>
    </div>
  );
}
