import "react";

import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";


const Menu = [
  {
    id: 3,
    name: "A propos",
    link: "/#",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#",
  },
];
const DropdownLinksOrdi = [
  {
    id: 1,
    name: "HP",
    link: "/#",
  },
  {
    id: 2,
    name: "Lenovo",
    link: "/#",
  },
  {
    id: 3,
    name: "Dell",
    link: "/#",
  },
];
const DropdownLinksPhone = [
  {
    id: 1,
    name: "Iphone",
    link: "/#",
  },
  {
    id: 2,
    name: "Samsung",
    link: "/#",
  },
  {
    id: 3,
    name: "Infinix",
    link: "/#",
  },
];


// eslint-disable-next-line react/prop-types
const Navbar = ({ handleOrderPopup }) => {
  return (
  <>
    <div className="flex h-8 bg-blue-100 items-center justify-between px-[4%] gap-8">
      <p> Tel: +212 777383268</p>
      <ul className="flex items-center gap-2">
        <li className="flex items-center justify-center space-x-2">
        <span  >Mes Favories</span>
          <span className="text-xl"><FaRegHeart /></span>
        </li>
        <li className="ml-12">
          <span>Login</span>
        </li>
      </ul>
    </div>
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40 px-[4%] pt-[2%]">
     
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl items-center flex gap-1">
              <FiShoppingBag size="30" />
              PCCHEAP
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
                text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800 "
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center pb-[.5%]">
        <ul className="sm:flex hidden items-center gap-4">
          <li>Home</li>
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Ordinateurs
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinksOrdi.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Telephones
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinksPhone.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          
          
        </ul>
      </div>
    </div>
  </>
  );
};

export default Navbar;
