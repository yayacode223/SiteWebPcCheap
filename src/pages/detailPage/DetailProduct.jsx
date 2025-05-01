import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { BASE_URL } from '../../utils/AxiosInstance';
import { useProduct } from '../../context/ProductContext';
import ProductCard from '../../Components/Produits/ProductCard';
import WhatsAppButton from '../../Components/WhatsAppButton/WhatsAppButton';


export default function DetailProduct() {

    const {loading, products, oldProduct} = useProduct();

    const [similarProducts, setSimilarProducts] = useState([]);

    // 🔹 Filtrer les produits similaires
    useEffect(() => {
        if (oldProduct && oldProduct.category) {
        const filtered = products.filter(
            (product) =>
            product.category.id === oldProduct.category.id && product.id !== oldProduct.id && product.mark === oldProduct.mark
        );
        setSimilarProducts(filtered);
        }
    }, [oldProduct, products]);



    // la fonction de gestion du carousel
    
    const settings = {
        dots: true,
        infinite: true,
        autoPlay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
    };

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };


  return (
    loading && oldProduct?
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
      </div>
    </div>
    :
    <div className="w-[90%] pt-[100px] mx-auto h-full">
            {/* Header */}
            <div className="mb-[60px]">
                <h2 className="text-gray-800 font-bold text-3xl">
                    <span className="text-blue-500">{oldProduct.name}</span>
                </h2>
            </div>

            {/* Carousel + Description */}
            <div className="w-full py-2 flex items-start justify-between gap-[2.5rem] flex-wrap md:flex-nowrap">
                {/* Carousel */}
                
                <div className="relative md:w-[30%] w-full no-scrollbar">
                    <Slider
                        ref={slider => {
                            sliderRef = slider
                        }}
                        {...settings}
                    >
                        {
                            Array.isArray(oldProduct.images) &&
                            oldProduct.images.map((image, index) => (
                                
                                <div key={index} className="w-full  mx-auto flex items-center justify-center">
                                    <img src={BASE_URL.replace('/api','')+image.imageName}  alt="" className="w-full h-full block object-cover object-center" />
                                </div>
                            ))
                        }
                    </Slider>
        
                        <button className="absolute left-0 top-1/2 -translate-y-1/2 block  cursor-pointer bg-slate-200 text-white font-bold text-sm p-1 rounded-full duration-300 ease-in-out hover:bg-slate-500" onClick={previous}>
                        <MdNavigateBefore />
                        </button>
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 block cursor-pointer bg-slate-200 text-white font-bold text-sm p-1 rounded-full duration-300 ease-in-out hover:bg-slate-500" onClick={next}>
                        <MdNavigateNext />
                        </button>

                    
                </div>

                {/* Description produit */}
                <div className="w-full text-gray-700 dark:text-gray-300 flex flex-col space-y-8 ">
                    <div className='space-y-4'>
                        <p className="text-md text-lg text-gray-500">
                            catégorie: <span className="text-blue-500"> {oldProduct.category.name} </span>
                        </p>
                        <p className="text-lg text-gray-500">
                            marque: <span className="text-blue-500"> {oldProduct.mark} </span>
                        </p>
                    </div>
                    <hr />
                    <div className='space-y-8 text-gray-700 dark:text-gray-300'>
                        <h3 className="font-bold text-xl ">
                            Description:
                        </h3>
                        <p className="text-[1rem]  ">
                            {oldProduct.description}
                        </p>
                    </div>
                    
                </div>
                <div className="w-full space-y-8">
                    <h3 className="text-gray-700 dark:text-gray-300  font-bold text-lg">Caracteristique:</h3>
                    <div>
                        <ul className="mt-3 space-y-2">
                            {oldProduct.features.map((feature, index) => (
                                <div key={index}>
                                    <li className="text-gray-600 dark:text-white">
                                        {feature}
                                    </li>
                                    <hr />
                                </ div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* 🔹 moyen de contact */}
                            
            <WhatsAppButton product={oldProduct} />

            

            {/* 🔹 Produits similaires */}
            <div className="py-[100px]">
                <h3 className="mb-12 text-2xl font-bold text-blue-600 text-center">Quelques produits similaires</h3>
                <div className="w-full flex flex-wrap justify-center gap-8">
                    {similarProducts.length > 0 ? (
                        
                    similarProducts.map((product, index) => <div className='' key={index}><ProductCard key={product.id} product={product} /></div> )
                    ) : (
                        <p className="text-gray-500 mt-4 text-center">Aucun produit similaire trouvé.</p>
                    )}
                </div>
            </div>
    </div>
  )
}
