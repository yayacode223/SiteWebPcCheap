import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { BASE_URL } from "../../utils/AxiosInstance"; // Assurez-vous d'importer votre base URL

export default function WhatsAppButton({ product }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // 🔹 Numéro WhatsApp du vendeur (SANS espace ni caractère spécial)
  const phoneNumber = "212612469287";

  // 🔹 Génération du message personnalisé
  const message = encodeURIComponent(
    `👋 Bonjour, je suis intéressé par ce produit :\n\n` +
    `🔹 *Nom* : ${product.name}\n` +
    `🔹 *Marque* : ${product.mark}\n` +
    `🔗 *Image* : https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/147926/1.jpg?0843 \n\n` +
    `Pouvez-vous me donner plus d'informations ? Merci !`
  );

  // 🔹 URL finale WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="mt-8 w-full flex items-center justify-start relative">
      {/* Bouton WhatsApp avec redirection */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="outline-none border-none block text-[5rem] animate-bounce text-[#5CB338] shadow-2xl rounded-full"
        onMouseEnter={() => setIsPopoverOpen(true)}
        onMouseLeave={() => setIsPopoverOpen(false)}
      >
        <IoLogoWhatsapp />
      </a>

      {/* Tooltip avec message */}
      {isPopoverOpen && (
        <div
          role="tooltip"
          className="absolute left-0 top-full mt-2 z-[100] w-64 text-sm text-gray-100 bg-gradient-to-r from-blue-600 to-purple-600 border border-gray-200 rounded-lg shadow-xs opacity-100"
        >
          <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">Contact</h3>
          </div>
          <div className="px-3 py-2">
            <p>Pour plus d'infos, cliquez sur ce lien WhatsApp !</p>
          </div>
        </div>
      )}
    </div>
  );
}
