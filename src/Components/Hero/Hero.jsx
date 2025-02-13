import "react";
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
const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
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
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-blue-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
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
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
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
      </div>
    </div>
  );
};

export default Hero;
