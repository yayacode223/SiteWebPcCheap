
import React from 'react';



const InfoContact = [
    {
        id: 1, 
        icon :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>, 
        nom : 'Email', 
        email : "Envoyez nous des emails", 
        addressEmail: "yayac2298@gmail.com"
    },{
        id: 2,
        icon : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>, 
        nom : 'whatsapp', 
        email : "Envoyez nous des messages", 
        addressEmail: "+212 234567890"
    }
]

export default function Contact() {
  return (
    <>
        <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <div>
            <p class="font-bold text-center text-3xl">Contactez Nous</p>
        </div>
 
        <div class="md:flex justify-center">
        {InfoContact.map((item) => (

            (<div class="p-4 m-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800" key={item.id}>
                <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                    {item.icon}
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">{item.nom}</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">{item.email}</p>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">{item.addressEmail}</p>
            </div>)
        ))}

        </div>
    </div>
</section>
    </>
    
  )
}
