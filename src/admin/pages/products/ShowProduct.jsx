import React, {useState, useEffect, useRef } from "react";
import { MdLaptopChromebook } from "react-icons/md";
import { useParams } from "react-router";
import Slider from "react-slick";
import { Link } from "react-router";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import ModalPopUp from "../delete/ModalPopUp";



// Importation des images
import Image1 from "../../../assets/ImagesPC/4.jpg";
import Image2 from "../../../assets/ImagesPC/5.jpg";
import Image3 from "../../../assets/ImagesPC/6.jpg";
import Image4 from "../../../assets/ImagesPC/7.jpg";
import Image5 from "../../../assets/ImagesPC/8.jpg";

export default function ShowProduct() {
    const params = useParams();
    const { productId } = params;

    // Données du produit
    const product = {
        id: 3,
        name: "Apple MacBook Pro 17",
        category: "Ordinateurs",
        mark: "MacBook",
        stock: true,
        promos: true,
        description:
            "So, it is natural that this sphere is one of the most popular ones and it is really hard to offer computer hardware because of great number of competitors. We are providing a great choice of different commodities. We are producing reliable and durable goods. That is why we are always in touch with the latest new inventions and improvements. We can satisfy customers with different claims.",
        carateristique: [
            "Accessories (18)",
            "CPUs (9)",
            "RAM: 16GH",
            "Hard Drives (9)",
            "Keyboards / Mice (9)",
            "Monitors (9)",
            "Stockage: SSD 256GH",
            "Ecran: 14 Pouce",
        ],
        images: [Image1, Image2, Image3, Image4, Image5],
    };

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


    // la gestion du modal PopUP de suupression

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const handleDeleteClick = (productId) => {
        setSelectedProduct(productId);
        setIsModalOpen(true);
    };
    
    const confirmDelete = () => {
        console.log(`Produit avec ID ${selectedProduct} supprimé`);
        // Ici, ajoute la logique pour supprimer le produit dans ton état ou base de données
        setIsModalOpen(false);
    };

    // Re-run when product images change

    return (
        <div className="w-full h-full">
            {/* Header */}
            <div className="flex justify-between">
                <div className="flex flex-col space-y-0">
                    <h2 className="text-[#4F75FF] font-bold text-[1.5rem]">
                        Produits: <span className="text-black">{productId}</span>
                    </h2>
                    <p className="text-sm font-base text-[#4F75FF]">PANNEAU D'ADMINISTRATION</p>
                </div>
                <h4 className="flex items-center justify-center text-sm font-base">
                    <MdLaptopChromebook className="text-[20px] mr-4" />
                    / Produits
                </h4>
            </div>
            {/* Carousel + Description */}
            <div className="w-full py-2 flex items-start justify-between gap-8 flex-wrap md:flex-nowrap mt-[60px]">
                {/* Carousel */}
                
                <div className="relative md:w-[30%] w-full no-scrollbar">
                    <Slider
                        ref={slider => {
                            sliderRef = slider
                        }}
                        {...settings}
                    >
                        {
                            product.images.map((image, index) => (
                                
                                <div key={index} className="md:w-full w-[80%] mx-auto flex items-center justify-center">
                                    <img src={image}  alt="" className="block object-cover object-center" />
                                </div>
                            ))
                        }
                    </Slider>
        
                        <button className="absolute left-0 top-1/2 -translate-y-1/2 block  cursor-pointer bg-slate-200 text-white font-bold text-sm p-1 rounded-full duration-300 ease-in-out hover:bg-slate-500" onClick={previous}>
                        <MdNavigateBefore  />
                        </button>
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 block cursor-pointer bg-slate-200 text-white font-bold text-sm p-1 rounded-full duration-300 ease-in-out hover:bg-slate-500" onClick={next}>
                        <MdNavigateNext/>
                        </button>

                    
                </div>

                {/* Description produit */}
                <div className="w-full flex flex-col space-y-4 ">
                    <h2>{product.name}</h2>
                    <hr />
                    <div>
                        <p className="text-md text-gray-500">
                            catégorie: <span className="text-blue-500"> {product.category} </span>
                        </p>
                        <p className="text-md text-gray-500">
                            marque: <span className="text-blue-500"> {product.mark} </span>
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h3 className="font-bold text-lg text-gray-700">
                            Description:
                        </h3>
                        <p className="text-[1rem] text-gray-600">
                            {product.description}
                        </p>
                    </div>
                    
                </div>
                <div className="w-full bg-white space-y-4">
                    <h3 className="text-gray-700 font-bold text-lg">Caracteristique:</h3>
                    <div>
                        <ul className="mt-3 space-y-2">
                            {product.carateristique.map((feature, index) => (
                                <>
                                    <li key={index} className="text-gray-600">
                                        {feature}
                                    </li>
                                    <hr />
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full mt-10 mx-auto flex gap-4 justify-center">
                <Link to={`/admin/editer-produit/${product.id}`} className=" block w-[100px] cursor-pointer bg-blue-500 text-white font-bold text-sm text-center py-2 rounded-xl duration-300 ease-in-out hover:bg-blue-800" onClick={previous}>
                Editer
                </Link>
                <button className="block w-[100px] cursor-pointer bg-red-500 text-white font-bold text-sm py-2 rounded-xl duration-300 ease-in-out hover:bg-red-800" onClick={() => handleDeleteClick(product.id)}>
                Supprimer
                </button>
            </div>

            {isModalOpen && (
                    <ModalPopUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} confirmDelete={confirmDelete} />
            )}
        </div>
    );
}
