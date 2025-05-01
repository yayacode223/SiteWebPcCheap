import React from "react";
import CountUp from "react-countup";
import Footer from "../Components/Footer/Footer";
import Faqs from "../Components/Faqs/Faqs";
import Contact from "../Components/Contact/Contact";

export default function Apropos() {
  return (
    <>
        <div className="bg-transparent text-gray-700 dark:text-white px-6 sm:py-20 py-10 font-[sans-serif]">
          <div className="max-w-screen-xl mx-auto text-center ">
            <h1 className="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-6">
              Bienvenue chez PC CHEAP
            </h1>
            <p className="text-lg mb-12">
              Votre vendeur de reference pour tous vos besoins de materiels
              informatique.
            </p>
            <button
              type="button"
              className="bg-gradient-to-r from-blue-600 animate-pulse to-purple-600 text-white text-lg tracking-wide px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-2xl"
            >
              <a
                href="https://wa.me/212612469287?text=Bonjour, je suis intéressé par vos produits"
                target="_blank"
              >
                Contact Whatsapp
              </a>
            </button>
          </div>
        </div>

      <div className="px-[5%]  dark:text-white">
        <div className="bg-white py-6 sm:py-8 dark:bg-slate-800 dark:text-white lg:py-12">
          <div className="mx-auto  max-w-screen-2xl px-4 md:px-8">
            <div className="rounded-lg bg-gray-100 dark:bg-slate-800 dark:text-white px-4 py-6 md:py-8 lg:py-12">
              <h2 className="mb-4 text-center text-2xl font-bold dark:bg-slate-800 dark:text-white text-gray-800 md:mb-6 lg:text-3xl">
                Qui sommes nous ?
              </h2>

              <p className="mx-auto max-w-screen-md dark:bg-slate-800 dark:text-white text-center text-gray-500 md:text-lg">
                Chez PCcheap, nous croyons que chaque étudiant mérite d’avoir
                accès à des ordinateurs portables neufs et performants sans se
                ruiner. Spécialisés dans la vente de matériel informatique de
                qualité, nous proposons des solutions technologiques adaptées aux
                besoins des étudiants et professionnels, alliant haute performance
                et prix abordables. Notre mission : rendre la technologie
                accessible pour accompagner la réussite académique et
                professionnelle de tous. Nous sommes présent au Maroc,en
                France,Mali,Côte d'Ivoire,Afrique du Sud,Tunisie et 7 autres pays.
              </p>
            </div>
          </div>
        </div>

      <div className="py-6 sm:py-8 lg:py-12 bg-transparent dark:text-white">
        <div className="mx-auto max-w-screen-xl px-4  md:px-8">
          {/*-- text - start */}
          <div className="mb-8 md:mb-12 ">
            <h2 className="mb-4 text-center text-2xl font-bold  dark:text-white text-gray-800 md:mb-6 lg:text-3xl">
              Satisfaction Clienteles
            </h2>
          </div>
          {/*-- text - end */}

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3  dark:text-white lg:gap-8">
            {/*-- text - start */}
            

            {/*-- text - start */}
            <div className="flex flex-col items-center dark:bg-slate-800 dark:text-white justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                <CountUp start={10} end={99} duration={5} />%
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Clients Satisfaits
              </div>
            </div>

            {/*-- text - start */}
            <div className="flex flex-col dark:bg-slate-800 dark:text-white items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                <CountUp start={1} end={103} duration={5} />+
              </div>
              <div className="text-sm font-semibold sm:text-base">Entreprises</div>
            </div>
            {/*-- text - end */}

            {/* {/-- text - start/} */}
            <div className="flex flex-col dark:bg-slate-800 dark:text-white items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                <CountUp start={1} end={13} duration={5} />+
              </div>
              <div className="text-sm font-semibold sm:text-base">Pays</div>
            </div>
            {/*-- text - end */}
          </div>
        </div>
        </div>

        <Contact />
        <Faqs />
      </div>
      <Footer />
    </>

  );
}