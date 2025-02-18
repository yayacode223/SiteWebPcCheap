import React from 'react';

export default function Faqs() {
  // État pour gérer l'ouverture/fermeture des FAQ
  const [buttonState, setButton] = React.useState([false, false, false, false]);

  // Fonction pour basculer l'état d'un bouton spécifique
  const handleClick = (index) => {
    setButton((prev) => {
      const newTab = [...prev];
      newTab[index] = !newTab[index]; // Inverse l'état du bouton cliqué
      return newTab;
    });
  };

  // Données pour les FAQ
  const faqs = [
    {
      question: 'What are the dates and locations for the product launch events?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada.',
    },
    {
      question: 'Are there any special discounts available during the event?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada.',
    },
    {
      question: 'What are the dates and locations for the product launch events?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada.',
    },
    {
      question: 'Are there any special discounts available during the event?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto sm:px-8 px-4 font-sans mb-24">
      <div className="mb-12 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Frequently asked questions</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg">
            <button
              type="button"
              className="toggle-button p-6 w-full text-base font-semibold text-left text-gray-800 flex items-center"
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
                <p className="text-sm text-gray-500">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}