import React from 'react';
import CountUp from 'react-countup';
import { FaUsers } from "react-icons/fa6";
import { FcCollaboration } from "react-icons/fc";
import { TfiWorld } from "react-icons/tfi";
import { RiBook2Fill } from "react-icons/ri";






const Apropos = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section About ShopHub */}
        <h2 className="text-3xl font-extrabold text-gray-900">A Propos</h2>
        <p className="mt-4 text-lg text-gray-500">
          We're on a mission to revolutionize online shopping by providing high-quality products at competitive prices while ensuring an exceptional customer experience.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">
                <FaUsers />
                <CountUp
                start={0}
                end={2}
                duration={10} 
                /> M+
            </h3>
            <p className="mt-2 text-base text-gray-500">Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">
                <TfiWorld />
                <CountUp
                    start={0}
                    end={50}
                    duration={10} 
                />+
            </h3>
            <p className="mt-2 text-base text-gray-500">Pays</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">
                <RiBook2Fill />
                <CountUp
                    start={0}
                    end={25}
                    duration={10} 
                />+
            </h3>
            <p className="mt-2 text-base text-gray-500">Partenaires</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">
                <FcCollaboration /> 
                <CountUp
                    start={0}
                    end={99}
                    duration={10} 
                />%
            </h3>
            <p className="mt-2 text-base text-gray-500">Clients Satisfaits</p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
          <p className="mt-4 text-lg text-gray-500">
            ShopHub was founded in 2020 by Priyanshu Pandey with a vision to provide a seamless online shopping experience that focuses on transparency, affordability, and high-quality products. Initially starting as a small e-commerce platform, ShopHub has now grown into a global marketplace trusted by millions.
          </p>
        </div>

        {/* Section Meet Our Team */}
        <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
          <div className="mt-8 space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Priyanshu Pandey</h3>
              <p className="text-lg text-gray-500">Founder & CEO</p>
              <p className="text-base text-gray-500">
                Priyanshu founded ShopHub to revolutionize the e-commerce experience by prioritizing customer satisfaction and high-quality products.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Sanskar Sharma</h3>
              <p className="text-lg text-gray-500">Head of Product Development</p>
              <p className="text-base text-gray-500">
                Sanskar leads the product team with a focus on delivering innovative and customer-centric solutions, enhancing user experience.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Sourav Prasad</h3>
              <p className="text-lg text-gray-500">Customer Relations Manager</p>
              <p className="text-base text-gray-500">
                Sourav is committed to ensuring every customer receives exceptional support and guidance to make the shopping experience seamless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;