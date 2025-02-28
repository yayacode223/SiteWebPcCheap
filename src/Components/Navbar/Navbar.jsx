import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import DarkMode from "./DarkMode";
import { Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext";

const Menu = [
  { id: 1, name: "Accueil", link: "/" },
  { id: 2, name: "Ordinateurs", link: "/ordinateurs" },
  { id: 3, name: "Téléphones", link: "/telephones" },
  { id: 4, name: "À propos", link: "/apropos" }
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
    } catch (error) {
      alert('Erreur lors de la déconnexion: ' + error);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navbar principale */}
      <nav className={`fixed w-full top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-lg ${
        isScrolled ? 'shadow-xl' : ''
      } transition-all duration-300`}>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-white">
              <FiShoppingBag className="text-2xl" />
              <span className="text-xl font-bold">PCCHEAP</span>
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
              <div className="flex items-center gap-4 text-white">
                <DarkMode />
                <Link to="/favoris" className="hover:text-blue-200">
                  <FaRegHeart className="text-xl" />
                </Link>
                
                {/* Profil utilisateur */}
                {user ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setIsPopoverOpen(true)}
                      onMouseLeave={() => setIsPopoverOpen(false)}
                      className="hover:text-blue-200"
                    >
                      <FaUserCircle className="text-2xl" />
                    </button>

                    {isPopoverOpen && (
                      <div className="absolute right-0 top-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64">
                        <div className="text-center mb-4">
                          <FaUserCircle className="text-4xl mx-auto text-gray-600 dark:text-gray-300" />
                          <h3 className="mt-2 font-semibold text-gray-800 dark:text-white">
                            {user.username}
                          </h3>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full py-2 px-4 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-red-500"
                        >
                          Déconnexion
                        </button>
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
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Espace pour le contenu */}
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;