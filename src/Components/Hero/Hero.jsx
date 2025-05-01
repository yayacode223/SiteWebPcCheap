import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { BASE_URL } from "../../utils/AxiosInstance";


// eslint-disable-next-line react/prop-types
export default function Hero({ news, handleOrderPopup }) {
  // recuperation des news depuits le context

  const sliderRef = useRef(null); // Référence pour le slider

  const settings = {
    dots: false,
    arrows: false, // On désactive les flèches natives
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024, // Pour les écrans de taille moyenne
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Pour les écrans de petite taille
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Pour les très petits écrans
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto w-[90%] mt-4 text-center dark:bg-slate-800  relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-transparent flex justify-center items-center dark:text-white duration-200">
      {/* Hero section */}
      <div className="container pb-8 sm:pb-0 relative">
        {/* Slider */}

        <Slider className="" ref={sliderRef} {...settings}>
          {news.map((data) => (
            <div className="mx-auto gap-12 px-2 sm:px-0" key={data.id}>
              <div className="w-full flex flex-col-reverse justify-center md:flex-row gap-4">
                {/* Text content section */}
                <div className=" mx-8 md:w-1/2 w-full flex flex-col ml-12 justify-center space-y-6 pt-12 sm:pt-0 text-center sm:text-left">
                  <h1
                    data-aos="slide-down"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    data-aos-delay="200"
                    className="text-2xl sm:text-3xl font-bold mt-8"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="slide-right"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    className=" text-start text-sm"
                  >
                    {data.body.trim()}
                  </p>
                  <div>
                    <button
                      onClick={handleOrderPopup}
                      className="outline-none border-none block text-[5rem] animate-bounce text-[#5CB338]  rounded-full hover:scale-110 duration-200  py-2 px-4"
                    >
                      <a
                        href={`https://wa.me/212612469287?text=${"Bonjour, je suis intéressé par vos produits"}`}
                        target="_blank"
                      >
                        <IoLogoWhatsapp />
                      </a>
                    </button>
                  </div>
                </div>
                {/* Image section */}
                <div className="md:w-[40%] w-full">
                  <div
                    data-aos="slide-down"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    data-aos-delay="200"
                    className="w-full"
                  >
                    <img
                      src={`${BASE_URL.replace("/api", "")}${data.imageName}`}
                      alt=""
                      className="w-full   sm:scale-105 lg:scale-120 object-center object-cover mx-auto"
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
            onClick={() => sliderRef.current.slickNext()}
            className="bg-gradient-to-r from-primary to-secondary hover:scale-125 duration-200 text-gray-800 dark:text-gray-100 text-3xl font-extrabold p-0 rounded-full shadow-lg"
          >
            <GrPrevious />
          </button>
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-gradient-to-r from-primary to-secondary hover:scale-125 duration-200 text-gray-800 dark:text-gray-100 text-3xl p-0 rounded-full shadow-lg"
          >
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  );
}
