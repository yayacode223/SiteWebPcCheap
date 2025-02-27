import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Styles de base de react-slick
import "slick-carousel/slick/slick-theme.css"; // Thème par défaut de react-slick
import Img from '../../assets/ImagesPC/hp10.png'; 
import Img1 from '../../assets/ImagesPhone/6.jpg';


const InfoProduitsPc = [
  {
    id: 1,
    img : Img,
    reduction: "-50%",
    nom: "13-eme Generation",
    auteur: "16 GB",
    prixPromotion: "HP",
    prix: "Promotion"
  },
  {
    id: 2,
    img : Img,
    reduction: "-50%",
    nom: "13-eme Generation",
    auteur: "16 GB",
    prixPromotion: "HP",
    prix: "Promotion"
  },
  {
    id: 3,
    img : Img,
    reduction: "-50%",
    nom: "13-eme Generation",
    auteur: "16 GB",
   prixPromotion: "HP",
    prix: "Promotion"
  },
  {
    id: 4,
    img : Img,
    reduction: "-50%",
    nom: "13-eme Generation",
    auteur: "16 GB",
    prixPromotion: "HP",
    prix: "Promotion"
  }, {
    id: 5,
    img : Img,
    reduction: "-50%",
    nom: "13-eme Generation",
    auteur: "16 GB",
    prixPromotion: "HP",
    prix: "Promotion"
  }, {
    id: 6,
    img : Img,
    reduction: "-50%",
    nom: "13-eme Generation",
    auteur: "16 GB",
    prixPromotion: "HP",
    prix: "Promotion"
  }, {
    id: 7,
    img : Img,
    reduction: "-50%",
    nom: "13-eme Generation",
    auteur: "16 GB",
   prixPromotion: "HP",
    prix: "Promotion"
  }, {
    id: 8,
    img : Img,
    reduction: "-50%",
    nom: "13-eme Generation",
    auteur: "16 GB",
    prixPromotion: "HP",
    prix: "Promotion"
  }
];


const InfoProduitsPhone = [
  {
    id: 1,
    img : Img1,
    reduction: "-50%",
    nom: "16 prox max",
    auteur: "16pixel",
    prixPromotion: "Iphone",
    prix: "Promotion"
  },
  {
    id: 2,
    img : Img1,
    reduction: "-50%",
    nom: "16 prox max",
    auteur: "16pixel",
    prixPromotion: "Iphone",
    prix: "Promotion"
  },
  {
    id: 3,
    img : Img1,
    reduction: "-50%",
    nom: "16 prox max",
    auteur: "16pixel",
    prixPromotion: "Iphone",
    prix: "Promotion"
  },
  {
    id: 4,
    img : Img1,
    reduction: "-50%",
    nom: "16 prox max",
    auteur: "16pixel",
    prix: "Promotion"
  }, {
    id: 5,
    img : Img1,
    reduction: "-50%",
    nom: "16 prox max",
    auteur: "16pixel",
    prixPromotion: "Iphone",
    prix: "Promotion"
  }, {
    id: 6,
    img : Img1,
    reduction: "-50%",
    nom: "16 prox max",
    auteur: "16pixel",
    prixPromotion: "Iphone",
    prix: "Promotion"
  }, {
    id: 7,
    img : Img1,
    reduction: "-50%",
    nom: "16 prox max",
    auteur: "16pixel",
    prixPromotion: "Iphone",
    prix: "Promotion"
  }, {
    id: 8,
    img : Img1,
    reduction: "-50%",
    nnom: "16 prox max",
    auteur: "16pixel",
    prixPromotion: "Iphone",
    prix: "Promotion"
  }
];

const settings = {
  dots: true, // Affiche les points de navigation
  infinite: true, // Permet de faire défiler en boucle
  speed: 500, // Vitesse de l'animation
  slidesToShow: 4, // Affiche 4 produits à la fois
  slidesToScroll: 1, // Fait défiler 4 produits à chaque clic
  arrows: true, // Affiche les flèches de navigation (Next/Prev)
  responsive: [
    {
      breakpoint: 1024, // Pour les écrans de taille moyenne
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768, // Pour les écrans de petite taille
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480, // Pour les très petits écrans
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

export default function Produits() {
  return (
    <div className="p-4 ">
      <div className="mt-14 mb-12">
        {/* Affichage Ordinateur */}
        <div className="bg-white py-6 sm:py-8 lg:py-12 dark:bg-slate-800 dark:text-white">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl dark:bg-slate-800 dark:text-white font-bold text-gray-800 md:mb-6 lg:text-3xl">Ordinateurs Portables</h2>
            </div>

            {/* Slider */}
            <Slider {...settings}>
              {InfoProduitsPc.map((item) => (
                <div key={item.id} className="px-2 dark:bg-slate-800 dark:text-white"> {/* Ajoute un espace entre les produits */}
                  <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                    <img src={item.img} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-125" />
                    <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">{item.reduction}</span>
                  </a>

                  <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                    <div className="flex flex-col">
                      <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">{item.nom}</a>
                      <span className="text-sm text-gray-500 lg:text-base">{item.auteur}</span>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="font-bold text-gray-600 lg:text-lg">{item.prixPromotion}</span>
                      <span className="text-sm text-red-500 font-bold">{item.prix}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>


      <div className="mt-14 mb-12">
        {/* Affichage Telephone */}
        <div className="bg-white py-6 sm:py-8 lg:py-12 dark:bg-slate-800 dark:text-white">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16 ">
              <h2 className="mb-4 text-center dark:bg-slate-800 dark:text-white text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Telephones Portables</h2>
            </div>

            {/* Slider */}
            <Slider {...settings}>
              {InfoProduitsPhone.map((item) => (
                <div key={item.id} className="px-8"> {/* Ajoute un espace entre les produits */}
                  <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                    <img src={item.img} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-125" />
                    <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">{item.reduction}</span>
                  </a>

                  <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                    <div className="flex flex-col">
                      <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">{item.nom}</a>
                      <span className="text-sm text-gray-500 lg:text-base">{item.auteur}</span>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="font-bold text-gray-600 lg:text-lg">{item.prixPromotion}</span>
                      <span className="text-sm text-red-500 font-bold">{item.prix}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}