import React, { useState } from "react";
import PropTypes from 'prop-types';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ index, img, name, category, descriptions, caracteristiques, images }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    setShowPopup(true);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div
        className="relative w-64 bg-white border rounded-lg shadow-md overflow-hidden transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={img} alt={name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <p className="text-gray-500 text-sm">{category}</p>
          <div className="flex text-yellow-400 text-sm my-1">
            <span>⭐ ⭐ ⭐ ☆ ☆</span>
          </div>
          <h3 className="text-black-600 font-semibold">{name}</h3>
        </div>

        <div
          className={`absolute bottom-0 left-0 w-full flex items-center justify-between p-3 bg-white border-t transition-all duration-300 ${
            isHovered ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-0 translate-y-10"
          }`}
        >
          <button className="flex-1 bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-200">
            Order Now
          </button>
          <button className="p-2 bg-gray-200 rounded-full ml-2" onClick={handleViewDetails}>
            <BsEye className="text-gray-600 transition-all duration-200 ease-in-out hover:text-black-300 hover:scale-110" />
          </button>
          <button className="p-2 bg-gray-200 rounded-full ml-2" onClick={handleFavoriteClick}>
            {isFavorite ? (
              <FaHeart className="text-cyan-500 transition-all duration-200 ease-in-out hover:scale-110" />
            ) : (
              <FaRegHeart className="text-gray-600 transition-all duration-200 ease-in-out hover:text-black-300 hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-3xl relative">
            <button className="absolute top-3 right-3 text-gray-600 hover:text-black" onClick={() => setShowPopup(false)}>
              <AiOutlineClose size={24} />
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2 relative">
                <img src={images[currentImageIndex]} alt={name} className="w-full h-64 object-cover rounded-md" />
                <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
                  <button
                    className="bg-white p-2 rounded-full shadow-md"
                    onClick={handlePrevImage}
                  >
                    ‹
                  </button>
                  <button
                    className="bg-white p-2 rounded-full shadow-md"
                    onClick={handleNextImage}
                  >
                    ›
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-xl font-semibold mt-4">{name}</h2>
                <p className="text-gray-500 text-sm">{category}</p>
                <p className="mt-2 text-gray-700">{descriptions}</p>
                <ul className="mt-2 text-gray-700">
                  {caracteristiques.map((caracteristique, index) => (
                    <li key={index}>{caracteristique}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  index: PropTypes.number,
  descriptions: PropTypes.string.isRequired,
  caracteristiques: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductCard;