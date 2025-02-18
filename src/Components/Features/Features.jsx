import React from 'react'


const Competences = [
  {
    id : 1, 
    icon: <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>, 
    nom : 'Evolutivites', 
    commentaire : 'La Satisfaction des Clients est notre priorite.', 
  },{
    id : 2, 
    icon: <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>, 
    nom : 'La Securite', 
    commentaire : 'La Satisfaction des Clients est notre priorite.', 
  },{
    id : 3, 
    icon: <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>, 
    nom : 'La Garantie', 
    commentaire : 'La Satisfaction des Clients est notre priorite.', 
  },
]
export default function Features() {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12 mb-24">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/*!-- text - start --*/}
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Nos Competences</h2>
    </div>
    {/*!-- text - end --*/}

    <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
      {/*!-- feature - start --*/}
      {Competences.map(item => {
      return (
            <div class="flex gap-4 md:gap-6" key={item.id}>
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                {item.icon}
            </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">{item.nom}</h3>
                <p class="mb-2 text-gray-500">{item.commentaire}</p>
              </div>
            </div>)
      })}

      {/*!-- feature - end --*/}
      
    </div>
  </div>
</div>
  )
}
