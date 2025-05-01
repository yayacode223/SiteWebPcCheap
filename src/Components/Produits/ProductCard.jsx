import React, { useState } from "react";
import PropTypes from 'prop-types';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import promo from "../../assets/promo.png"
import { BsEye } from "react-icons/bs";
import {Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useProduct } from "../../context/ProductContext";
import { useFavory } from "../../context/FavoryContext";
import { useAuth } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/AxiosInstance";

const ProductCard = ({product}) => {

  // import des controles du context useProduct
  const {setProductId} = useProduct();
  const {addFavory, loading, deleteFavory} = useFavory();
  const { user } = useAuth();


  // declaration des etats
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

 
  const handleFavories = async (id) => {
    if(user){
      if(!isFavorite){
        try{
          await addFavory(id);
          toast.success("Favoris ajouté avec succès")
        } catch(error) {
          toast.error("erreur lors de l'ajout !" +error)
        }

        setIsFavorite(!isFavorite)
      }else{
        try{
          await deleteFavory(id);
          toast.success('favoris supprimé avec succès')
        } catch(error) {
          toast.error(`erreur lors de la suppression du produit ${id} aux favoris: ${error}`)
        }

        setIsFavorite(!isFavorite)
      }

    } else {
      toast.error('Vous êtes déconnecté,Veuillez vous connecter !')
    }
  };

  // 🔹 Numéro WhatsApp du vendeur (SANS espace ni caractère spécial)
  const phoneNumber = "212612469287";

  // 🔹 Génération du message personnalisé
  const message = encodeURIComponent(
    `👋 Bonjour, je suis intéressé par ce produit :\n\n` +
    `🔹 *Nom* : ${product.name}\n` +
    `🔹 *Marque* : ${product.mark}\n` +
    `🔗 *Image* : ${BASE_URL.replace('/api','')+product.images[0].imageName} \n\n` +
    `Pouvez-vous me donner plus d'informations ? Merci !`
  );

  // 🔹 URL finale WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
      <div key={product.id}
        className="relative w-full sm:h-[60vh] h-[55vh] bg-white dark:bg-gray-800 border dark:border-black rounded-md shadow hover:shadow-2xl hover:scale-200 cursor-pointer overflow-hidden transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative w-full h-[60%] transition-all duration-300 ease-in-out ${isHovered? 'h-[60%]': ' h-[70%]' }`}>
          <img src={BASE_URL.replace('/api','')+product.images[0].imageName} alt={product.name} className="mx-auto h-full object-cover object-center" />
          {
            product.promo?
            <img className="w-[25px] h-[25px] absolute top-2 right-2 z-10  " src={promo} alt="" />
            :
            ''
          }
        </div>
        <div className={`space-y-1 p-2 ${isHovered? 'mt-2': 'mt-10'}`}>
          <p className="text-gray-500 dark:text-white text-sm">{product.mark}</p>
          <h3 className="text-black-600 font-semibold">{product.name}</h3>
        </div>

        <div
          className={`absolute bottom-0 left-0 w-full flex items-center  justify-between p-3 bg-white border-t dark:border-black transition-all duration-300 dark:bg-gray-800 ${
            isHovered ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-0 translate-y-10"
          }`}
        >
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Commander
            </a>
          </button>
          <button 
            className="p-2 bg-gray-200 rounded-full ml-2" 
            onClick={() => {
              setProductId(product.id);
              sessionStorage.setItem('productId',product.id);
              }} >
            <Link to={`/detail-products/${product.id}`}>
              <BsEye className="text-gray-600 hover:text-blue-600 hover:font-blod transition-all duration-200 ease-in-out hover:text-black-300 hover:scale-110" />
            </Link>
          </button>
          <button 
            className="p-2 bg-gray-200 rounded-full ml-2"
            onClick={() => handleFavories(product.id)}
          >
            {
              loading?
              <div className="w-full flex items-center justify-center">
                <div className="flex items-center justify-center space-x-1">
                    <div className="w-2 h-2 rounded-full animate-pulse bg-blue-600"></div>
                    <div className="w-2 h-2 rounded-full animate-pulse bg-blue-600"></div>
                    <div className="w-2 h-2 rounded-full animate-pulse bg-blue-600"></div>
                </div>
              </div>
              :
              isFavorite ? (
                <FaHeart className="text-cyan-500 transition-all duration-200 ease-in-out hover:scale-110" />
              ) : (
                <FaRegHeart className="text-gray-600 transition-all duration-200 ease-in-out hover:text-black-300 hover:scale-110" />
              )

            }
          </button>
        </div>
      </div>
  );
};

// ProductCard.propTypes = {
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   index: PropTypes.number,
//   descriptions: PropTypes.string.isRequired,
//   caracteristiques: PropTypes.arrayOf(PropTypes.string).isRequired,
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default ProductCard;