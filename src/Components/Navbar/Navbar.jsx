import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import DarkMode from "./DarkMode";
import { Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { toast } from 'react-toastify';

import Logo from "../../assets/logo_white.png"; // ✅ Correction de l'import du logo

const Menu = [
  { id: 1, name: "Accueil", link: "/" },
  { id: 2, name: "Ordinateurs", link: "/ordinateurs" },
  { id: 3, name: "Téléphones", link: "/telephones" },
  { id: 4, name: "À propos", link: "/apropos" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Deconnection reussie")
    } catch (error) {
      toast.error("Erreur lors de la déconnexion: " + error);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navbar principale */}
      <nav
        className={`fixed w-full top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-lg ${
          isScrolled ? "shadow-xl" : ""
        } transition-all duration-300`}
      >
        <div className="container mx-auto w-[90%] flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className=" text-white">
            <img src={Logo} alt="Logo" className="w-24 h-24" />
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center gap-8">
            {Menu.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="text-white hover:text-blue-200 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions droite */}
          <div className="flex items-center gap-6">
            {/* Icônes actions */}
            <div className="flex space-x-4 justify-center items-center gap-4 text-white">
              <DarkMode />
              <Link to="/favories" className="hover:text-blue-200">
                <FaRegHeart className="text-xl" />
              </Link>

              {/* Profil utilisateur */}
              {user ? (
                <div
                  className="relative"
                  onMouseEnter={() => setIsPopoverOpen(true)}
                  onMouseLeave={() => setIsPopoverOpen(false)}
                >
                  <button className="hover:text-blue-200">
                    <FaUserCircle className="text-[40px]" />
                  </button>

                  {isPopoverOpen && (
                    <div className={`absolute space-y-2 right-0 top-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-[200px]'}`}>
                      <div className="text-start dark:text-gray-300">
                        <FaUserCircle className="text-[30px] mx-auto text-gray-600 dark:text-gray-300" />
                        <h3 className="mt-2  text-gray-500 ">
                          <span className="text-gray-800 font-semibold dark:text-gray-100">Nom: </span>{user.username}
                        </h3>
                        <p className="text-gray-500">
                          <span className="text-gray-800 font-semibold dark:text-gray-100">Email: </span>{user.email}
                        </p>
                      </div>
                      <div className=" w-full flex gap-2 flex-col space-y-1 ">
                        {
                          user.roles.includes('ROLE_ADMIN')?
                          (<button
                            className={`block  ${user.roles.includes('ADMIN_ROLE')? 'w-1/2' :'w-full'} py-2 px-4 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-blue-600`}
                          >
                            <Link to={'/admin/dashboard'}>AdminDashBord</Link>
                          </button>)
                          :''
                        }
                        <button
                          onClick={handleLogout}
                          className="block w-full py-2 px-4 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-red-500"
                        >
                          Déconnexion
                        </button>

                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="hover:text-blue-200">
                  Connexion
                </Link>
              )}
            </div>

            {/* Menu mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {Menu.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="block py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Espace pour le contenu */}
      <div className="mt-[90px] dark:bg-gray-900 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
