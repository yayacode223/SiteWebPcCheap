import React from "react";
import CountUp from "react-countup";
import Footer from "../Components/Footer/Footer";
import Faqs from "../Components/Faqs/Faqs";
import Contact from "../Components/Contact/Contact";

export default function Apropos() {
  return (
    <div className="bg-white  dark:bg-slate-800 dark:text-white">
      {/* <div class="bg-white py-6 sm:py-8 lg:py-12 dark:bg-slate-800 dark:text-white">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12 ">
            <div>
              <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class=" w-full object-cover object-center"
                />
              </div>
            </div>

            <div class="md:pt-8 ">
              <h1 class="text-center pb-6 font-bold text-indigo-500 md:text-left">
                Qui sommes nous ?
              </h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8 dark:bg-slate-800 dark:text-white">
                Chez PCcheap, nous croyons que chaque étudiant mérite d’avoir
                accès à des ordinateurs portables neufs et performants sans se
                ruiner. Spécialisés dans la vente de matériel informatique de
                qualité, nous proposons des solutions technologiques adaptées
                aux besoins des étudiants et professionnels, alliant haute
                performance et prix abordables. Notre mission : rendre la
                technologie accessible pour accompagner la réussite académique
                et professionnelle de tous. Nous sommes présent au Maroc,en
                France,Mali,Côte d'Ivoire,Afrique du Sud,Tunisie et 7 autres
                pays.{" "}
              </p>
            </div>
          </div>
        </div> 
      </div>  */}
      <div class="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 px-6 sm:py-20 py-10 font-[sans-serif]">
        <div class="max-w-screen-xl mx-auto text-center text-white">
          <h1 class="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-6">
            Bienvenue chez PC CHEAP 
          </h1>
          <p class="text-lg mb-12">
            Votre vendeur de reference pour tous vos besoins de materiels informatique.
          </p>
          <button
            type="button"
            class="bg-blue-600 text-white text-lg tracking-wide px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            <a href="https://wa.me/22368025516?text={{ 'Bonjour, je suis intéressé par vos produits }}" 
   target="_blank"  >Contact Whatsapp</a>
          </button>
        </div>
      </div>
      <div class="bg-white py-6 sm:py-8 dark:bg-slate-800 dark:text-white lg:py-12">
        <div class="mx-auto  max-w-screen-2xl px-4 md:px-8">
          <div class="rounded-lg bg-gray-100 dark:bg-slate-800 dark:text-white px-4 py-6 md:py-8 lg:py-12">

            <h2 class="mb-4 text-center text-2xl font-bold dark:bg-slate-800 dark:text-white text-gray-800 md:mb-6 lg:text-3xl">
              Qui sommes nous ?
            </h2>

            <p class="mx-auto max-w-screen-md dark:bg-slate-800 dark:text-white text-center text-gray-500 md:text-lg">
            Chez PCcheap, nous croyons que chaque étudiant mérite d’avoir
                accès à des ordinateurs portables neufs et performants sans se
                ruiner. Spécialisés dans la vente de matériel informatique de
                qualité, nous proposons des solutions technologiques adaptées
                aux besoins des étudiants et professionnels, alliant haute
                performance et prix abordables. Notre mission : rendre la
                technologie accessible pour accompagner la réussite académique
                et professionnelle de tous. Nous sommes présent au Maroc,en
                France,Mali,Côte d'Ivoire,Afrique du Sud,Tunisie et 7 autres
                pays.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white py-6 sm:py-8 lg:py-12 dark:bg-slate-800 dark:text-white">
        <div class="mx-auto max-w-screen-xl px-4  md:px-8">
          {/*-- text - start */}
          <div class="mb-8 md:mb-12 ">
            <h2 class="mb-4 text-center text-2xl font-bold dark:bg-slate-800 dark:text-white text-gray-800 md:mb-6 lg:text-3xl">
              Satisfaction Clienteles
            </h2>
          </div>
          {/*-- text - end */}

          <div class="grid grid-cols-2 gap-4 md:grid-cols-4 dark:bg-slate-800 dark:text-white lg:gap-8">
            {/*-- text - start */}
            <div class="flex flex-col items-center justify-center dark:bg-slate-800 dark:text-white rounded-lg bg-gray-100 p-4 lg:p-8">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                <CountUp start={1000} end={3000} duration={3} />+
              </div>
              <div class="text-sm font-semibold sm:text-base">Clients</div>
            </div>
            {/*-- text - end */}

            {/*-- text - start */}
            <div class="flex flex-col items-center dark:bg-slate-800 dark:text-white justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                <CountUp start={10} end={99} duration={3} />%
              </div>
              <div class="text-sm font-semibold sm:text-base">
                Clients Satisfaits
              </div>
            </div>

            {/*-- text - start */}
            <div class="flex flex-col dark:bg-slate-800 dark:text-white items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                <CountUp start={1} end={5} duration={3} />+
              </div>
              <div class="text-sm font-semibold sm:text-base">Entreprises</div>
            </div>
            {/*-- text - end */}

            {/*-- text - start*/}
            <div class="flex flex-col dark:bg-slate-800 dark:text-white items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                <CountUp start={1} end={5} duration={3} />+
              </div>
              <div class="text-sm font-semibold sm:text-base">Pays</div>
            </div>
            {/*-- text - end */}
          </div>
        </div>
      </div>

      {/* <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
   
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Notre Equipe</h2>
    </div>
    

    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
  
      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
          <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 md:text-lg">John McCulling</div>
          <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Founder / CEO</p>

        
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        
        </div>
      </div>
  

      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
          <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 md:text-lg">Kate Berg</div>
          <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">CFO</p>

         
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
     
        </div>
      </div>
    

      
      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
          <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 md:text-lg">Greg Jackson</div>
          <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">CTO</p>

         
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
       
        </div>
      </div>
     

      
      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Midas Hofstra" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 md:text-lg">Robert Greyson</div>
          <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Creative Director</p>

      
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
       
        </div>
      </div>
    
    </div>
  </div>
</div> */}
      <Contact />
      <Faqs />
      <Footer />
    </div>
  );
}
