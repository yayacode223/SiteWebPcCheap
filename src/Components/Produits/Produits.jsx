import React from "react";
import Img1 from "../../assets/ImagesPC/5.jpg";
import Img2 from "../../assets/ImagesPC/6.jpg";
import Img3 from "../../assets/ImagesPC/7.jpg";
import Img4 from "../../assets/ImagesPC/8.jpg";
import Img5 from "../../assets/ImagesPC/2.jpg";
import Img6 from "../../assets/ImagesPhone/6.jpg";
import Img7 from "../../assets/ImagesPhone/4.jpg";
import Img8 from "../../assets/ImagesPhone/9.jpg";
import Img9 from "../../assets/ImagesPhone/5.jpg";
import Img10 from "../../assets/ImagesPhone/2.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const ProductsData1 = [
  {
    id: 6,
    img: Img6,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 8,
    img: Img8,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 9,
    img: Img9,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 10,
    img: Img10,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Affichage Ordinateur */}

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="flex-col"
              >
                    <img
                    src={data.img}
                    alt=""
                    className="flex-1 object-cover rounded-md"
                    />
                    <div className="flex-1">
                        <h3 className="font-semibold">{data.title}</h3>
                        <p className="text-sm text-gray-600">{data.color}</p>
                        <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" />
                            <span>{data.rating}</span>
                        </div>
                    </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-blue-300 text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>

         {/* Affichage Telephone */}

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData1.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="flex-col"
              >
                    <img
                    src={data.img}
                    alt=""
                    className="flex-1 object-cover rounded-md"
                    />
                    <div className="flex-1">
                        <h3 className="font-semibold">{data.title}</h3>
                        <p className="text-sm text-gray-600">{data.color}</p>
                        <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" />
                            <span>{data.rating}</span>
                        </div>
                    </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-blue-300 text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Products;
