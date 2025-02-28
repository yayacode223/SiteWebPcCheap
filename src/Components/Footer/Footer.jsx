import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-600 to-purple-600 backdrop-blur-lg dark:bg-gradient-to-b dark:from-gray-600 dark:to-gray-700 text-white py-6 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <motion.h2
          className="text-3xl font-bold"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          PCCHEAP
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-8"
          animate={{ y: 0 }}
          initial={{ y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 hover:text-violet-300 cursor-pointer">
            <FaPhoneAlt className="text-xl" />
            <p>+212 777383268</p>
          </div>
          <div className="flex items-center gap-2 hover:text-violet-300 cursor-pointer">
            <FaEnvelope className="text-xl" />
            <p>contact@pccheap.com</p>
          </div>
          <div className="flex items-center gap-2 hover:text-violet-300 cursor-pointer">
            <FaMapMarkerAlt className="text-xl" />
            <p>Oujda, Maroc</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-1xl">
          <div>
            <h4 className="font-semibold mb-4">EXPLORER PCCHEAP</h4>
            <ul className="space-y-2">
              <li className="hover:text-violet-300 cursor-pointer"><Link to={"/"}>Home</Link></li>
              <li className="hover:text-violet-300 cursor-pointer"><Link to={"/contact"}>Contact</Link></li>
              <li className="hover:text-violet-300 cursor-pointer"><Link to={"/login"}>Login</Link></li>
              <li className="hover:text-violet-300 cursor-pointer"><Link to={"/Apropos"}>À propos</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produits</h4>
            <ul className="space-y-2">
              <li className="hover:text-violet-300 cursor-pointer"><Link to={"/ordinateurs"}>Ordinateurs</Link></li>
              <li className="hover:text-violet-300 cursor-pointer"><Link to={"/telephones"}>Téléphones</Link></li>
              <li className="hover:text-violet-300 cursor-pointer"><Link to={"/favories"}>Favories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SUPPORT</h4>
            <ul className="space-y-2">
              <li className="hover:text-violet-300 cursor-pointer"><Link to={"/faq"}>Faq</Link></li>
              <li className="hover:text-violet-300 cursor-pointer"><Link to={"/favories"}>Conditions générales</Link></li>
              <li className="hover:text-violet-300 cursor-pointer"><Link to={"/favories"}>Politique de confidentialité</Link></li>
              <li className="hover:text-violet-300 cursor-pointer"><Link to={"/favories"}>Informations sur les droits d’auteurs</Link></li>
              <li className="hover:text-violet-300 cursor-pointer"><Link to={"/favories"}>Politique de remboursement</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SUIVEZ-NOUS</h4>
            <div className="flex justify-center gap-2">
            <Link to={"/favories"}><FaFacebook className="text-2xl hover:text-violet-300 cursor-pointer" /></Link>
            <Link to={"/favories"}><FaLinkedin className="text-2xl hover:text-violet-300 cursor-pointer" /></Link> 
            <Link to={"/favories"}><FaWhatsapp className="text-2xl hover:text-violet-300 cursor-pointer" /></Link> 
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-6 mt-8">
          <p className="text-sm">&copy; 2025 PCCHEAP. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
