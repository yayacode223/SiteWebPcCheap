import React from 'react';

export default function Faqs() {
  // État pour gérer l'ouverture/fermeture des FAQ
  const [buttonState, setButton] = React.useState([false, false, false, false]);

  // Fonction pour basculer l'état d'un bouton spécifique
  const handleClick = (index) => {
    setButton((prev) => {
      const newTab = [...prev];
      newTab[index] = !newTab[index]; // Inverse l'état du bouton cliqué
      return newTab;
    });
  };

  // Données pour les FAQ
  const faqs = [
    {
      question: 'Comment se passe la livraison?',
      answer:
        'La livraison est faite jusqu\'a votre domicile gratuitement',
    },
    {
      question: 'Quels sont les moyens de paiement?',
      answer:
        'Vous pouvez contacter directement le vendeur via whatsapp il vous proposera le moyen de paiement adequat soit en especes ou par virement bancaire , mais vous ne pouvez pas proceder au paiement sur ce site',
    },
    {
      question: 'Vous proposez uniquement des pc?',
      answer:
        'Nous proposons une large gamme de produits allant des ordinateurs aux smartphones, ainsi que divers équipements informatiques.',
    },
    {
      question: 'Comment puis je vous joindre?',
      answer:
        'Cela est tres facile , vous n\'avez qu\'a cliquer sur le bouton contact whatsapp dans la section a propos ou directement sur le bouton y referent dans la section produit',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto sm:px-8 px-4 font-sans mb-24  bg-transparent">
      <div className="mb-12 mx-auto max-w-4xl">
        <h2 className="my-4  text-2xl font-bold dark:text-gray-100 text-gray-800 text-center">Faqs</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion bg-blue-50 md:p-6 dark:bg-gray-800 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg">
            <button
              type="button"
              className="toggle-button p-6 w-full  text-xl font-semibold text-left text-gray-800 dark:text-gray-100 flex items-center"
              onClick={() => handleClick(index)}
            >
              <span className="mr-4">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                className={`w-3 fill-current ml-auto shrink-0 transition-transform ${
                  buttonState[index] ? 'rotate-45' : ''
                }`}
              >
                <path
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                />
              </svg>
            </button>
            {buttonState[index] && (
              <div className="content max-h-[1000px] px-6 pb-6 overflow-hidden transition-all duration-300">
                <p className="text-sm text-gray-500 dark:text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}