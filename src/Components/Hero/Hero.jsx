import React from 'react';
import { useRef } from 'react';
import Image1 from '../../assets/ImagesPC/1.jpg';
import Image3 from '../../assets/ImagesPC/2.jpg';
import Image4 from '../../assets/ImagesPC/3.jpg';
import Image2 from '../../assets/ImagesPC/4.jpg'; 
import Image5 from '../../assets/ImagesPC/5.jpg'; 
import Image6 from '../../assets/ImagesPC/6.jpg'; 
import Image7 from '../../assets/ImagesPhone/1.jpg'; 
import Image8 from '../../assets/ImagesPhone/2.jpg'; 
import Image9 from '../../assets/ImagesPhone/3.jpg'; 
import Image10 from '../../assets/ImagesPhone/4.jpg'; 
import Image11 from '../../assets/ImagesPhone/5.jpg'; 
import Image12 from '../../assets/ImagesPhone/6.jpg'; 
import Image13 from '../../assets/ImagesPhone/7.jpg'; 
import Image14 from '../../assets/ImagesPhone/8.jpg'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Les meuilleur prix",
    description:
    "Avec leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  },

  {
    id: 2,
    img: Image2,
    title: "-30% Sur les marques Dell",
    description:
    "Avec  leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  }, 
  {
    id: 3,
    img: Image3,
    title: "Les Nouvelles Generations",
    description:
        "Grâce à leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."  },
  {
    id: 4,
    img: Image4,
    title: "-30%  sur les pc gamers ",
    description:
    "Grâce à leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  },
  {
    id: 5,
    img: Image5,
    title: "Bientot la promotion commence",
    description:
    "Grâce à leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  },
  {
    id: 6,
    img: Image6,
    title: "Bientot la promotion commence",
    description:
    "Grâce à leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  },
  {
    id: 7,
    img: Image7,
    title: "Bientot la promotion commence",
    description:
    "Grâce à leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  },{
    id: 8,
    img: Image8,
    title: "Bientot la promotion commence",
    description:
    "Grâce à leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  },{
    id: 9,
    img: Image9,
    title: "Bientot la promotion commence",
    description:
    "Grâce à leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  },{
    id: 10,
    img: Image10,
    title: "Bientot la promotion commence",
    description:
    "Grâce à leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  },
  {
    id: 11,
    img: Image11,
    title: "Les Nouvelles tendances",
    description:
    "Grâce à leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  },
  {
    id: 12,
    img: Image12,
    title: "Les Nouvelles tendances",
    description:
    "Grâce à leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  },
  {
    id: 13,
    img: Image13,
    title: "Les Nouvelles tendances",
    description:
    "Grâce à leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  },
  {
    id: 14,
    img: Image14,
    title: "Les Nouvelles tendances",
    description:
    "Grâce à leurs technologies avancées et leur expérience utilisateur optimisée, ils garantissent une performance fiable et sécurisée au quotidien."
  },
];


// eslint-disable-next-line react/prop-types
export default function Hero({ handleOrderPopup }) {
  const sliderRef = useRef(null); // Référence pour le slider

  const settings = {
    dots: false,
    arrows: false, // On désactive les flèches natives
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (

    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-blue-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200">

      {/* Hero section */}
      <div className="container pb-8 sm:pb-0 relative">

        {/* Slider */}

        <Slider ref={sliderRef} {...settings}>

          {ImageList.map((data) => (

            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text content section */}
                <div className="flex flex-col ml-12 justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                    
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-blue-600 hover:scale-110 duration-200  py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-out"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

              {/* Boutons Previous et Next */}

        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-gradient-to-r from-primary to-secondary hover:scale-125 duration-200 text-black text-3xl font-extrabold p-0 rounded-full shadow-lg"
          >
            <GrPrevious />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-gradient-to-r from-primary to-secondary hover:scale-125 duration-200 text-black text-3xl p-0 rounded-full shadow-lg"
          >
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  );
}








