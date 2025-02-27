import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown, FaRegHeart } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import DarkMode from "./DarkMode";
import { Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext"
const Menu = [{ id: 1, name: "A propos", link: "/Apropos" }];
const DropdownLinksOrdi = [
  { id: 1, name: "HP", link: "/ordinateurs" },
  { id: 2, name: "Lenovo", link: "/ordinateurs" },
  { id: 3, name: "Dell", link: "/ordinateurs" },
];
const DropdownLinksPhone = [
  { id: 1, name: "Iphone", link: "/telephones" },
  { id: 2, name: "Samsung", link: "/telephones" },
  { id: 3, name: "Infinix", link: "/telephones" },
];



const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOrdiOpen, setIsOrdiOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const { user, logout } = useAuth();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  async function handleLogout() {
    try {
      await logout();

    }
    catch (error) {
      alert('erreur lors de la deconnexion: ' + error)
    }

    window.location.reload();
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className>
      <div className="fixed w-full top-0 z-50">
        {/* Top Bar */}
        <div className="flex h-[50px] bg-blue-100 items-center justify-between px-[4%] gap-8">
          <p> Tel: +212 777383268</p>
          <ul className="flex items-center gap-2">
            <li className="flex items-center justify-center space-x-2">
              <span  >Mes Favories</span>
              <span className="text-xl"><FaRegHeart /></span>
            </li>
            <li className="ml-12">
              {user ? (
                <>
                  {/* Avatar rond avec initiale du nom */}
                  <button
                    type="button"
                    className="bg-slate-100 rounded-full hover:bg-slate-200 focus:ring-4 focus:outline-none font-medium text-2xl text-gray-600 px-3.5 py-1.5 text-center"
                    onMouseEnter={() => setIsPopoverOpen(true)} // Affichage au survol

                  >
                    {user.username[0].toUpperCase()}
                  </button>

                  {/* Popover affiché lors du hover */}
                  {isPopoverOpen && (
                    <div
                      className="absolute z-[1000] w-64 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-lg dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 top-12 right-10"
                      onMouseLeave={() => setIsPopoverOpen(false)}
                    >
                      <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Profil utilisateur
                        </h3>
                      </div>
                      <div className="px-3 py-2 space-y-2">
                        <p className="text-gray-800 font-bold">
                          Name: <span className="text-gray-500 font-medium">{user.username}</span>
                        </p>
                        <p className="text-gray-800 font-bold">
                          Email: <span className="text-gray-500 font-medium">{user.email}</span>
                        </p>
                        <p className="text-gray-800 font-bold">
                          Rôle:{" "}
                          <span className="text-gray-500 font-medium">
                            {user.roles.includes("ROLE_ADMIN") ? "Administrateur" : "Utilisateur"}
                          </span>
                        </p>
                        <p className="text-blue-500 text-lg cursor-pointer" onClick={logout}>
                          Déconnexion
                        </p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login">Se Connecter</Link>
              )}
            </li>
          </ul>
        </div>

        {/* Main Navbar */}
        <nav className={`bg-white dark:bg-slate-800 ${isScrolled ? 'shadow-lg' : ''} transition-shadow`}>
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <FiShoppingBag className="text-2xl text-blue-600" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">PCCHEAP</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors">Home</Link>

              {/* Dropdown Ordinateurs */}
              <div className="group relative">
                <button className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors">
                  Ordinateurs
                  <FaCaretDown className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute hidden group-hover:block bg-white dark:bg-slate-700 shadow-lg rounded-lg mt-2 w-48">
                  {DropdownLinksOrdi.map((item) => (
                    <Link key={item.id} to={item.link} className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Dropdown Téléphones */}
              <div className="group relative">
                <button className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors">
                  Téléphones
                  <FaCaretDown className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute hidden group-hover:block bg-white dark:bg-slate-700 shadow-lg rounded-lg mt-2 w-48">
                  {DropdownLinksPhone.map((item) => (
                    <Link key={item.id} to={item.link} className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {Menu.map((item) => (
                <Link key={item.id} to={item.link} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              {/* Search Bar */}
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-[150px] px-4 py-2 rounded-lg duration-600 ease-in-out transition-all border-none focus:border border-[1px] border-gray-300 dark:border-gray-600 focus:w-[250px] dark:bg-slate-700 outline-none"
                />
                <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Cart Button */}
              {/*
            <button
              onClick={handleOrderPopup}
              className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white hover:opacity-80 transition-opacity"
            >
              <FaCartShopping className="text-xl" />
            </button>*/}

              <DarkMode />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-700 dark:text-gray-200"
              >
                {isMenuOpen ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}

          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-800 border-t">
              <div className="px-4 py-3 space-y-2">
                <Link to="/" className="block py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg">
                  Home
                </Link>

                {/* Dropdown Mobile - Ordinateurs */}
                <div className="relative">
                  <div
                    onClick={() => setIsOrdiOpen(!isOrdiOpen)}
                    className="flex items-center justify-between py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg cursor-pointer"
                  >
                    <span>Ordinateurs</span>
                    <FaCaretDown className={`transform transition-transform ${isOrdiOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isOrdiOpen && (
                    <div className="pl-4">
                      {DropdownLinksOrdi.map((item) => (
                        <Link
                          key={item.id}
                          to={item.link}
                          className="block py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Dropdown Mobile - Téléphones */}
                <div className="relative">
                  <div
                    onClick={() => setIsPhoneOpen(!isPhoneOpen)}
                    className="flex items-center justify-between py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg cursor-pointer"
                  >
                    <span>Téléphones</span>
                    <FaCaretDown className={`transform transition-transform ${isPhoneOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isPhoneOpen && (
                    <div className="pl-4">
                      {DropdownLinksPhone.map((item) => (
                        <Link
                          key={item.id}
                          to={item.link}
                          className="block py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {Menu.map((item) => (
                  <Link
                    key={item.id}
                    to={item.link}
                    className="block py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
      {/* Espace pour le contenu */}
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;