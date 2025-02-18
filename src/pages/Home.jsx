import React from 'react'
import Hero from '../Components/Hero/Hero'
import Produits from '../Components/Produits/Produits'
import Footer from '../Components/Footer/Footer'
import Features from '../Components/Features/Features';




export default function Home({handleOrderPopup}) {
  return (
    <div className='w-full h-full'>
        <Hero handleOrderPopup={handleOrderPopup} />
        <Produits />
        <Features />
        <Footer />
    </div>
  )
}
