import React from 'react'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Produits/Produits'
import Footer from '../Components/Footer/Footer'
import Apropos from '../Components/Apropos/Apropos'
import Testimonials from '../Components/Testimonials/Testimonials'

export default function Home({handleOrderPopup}) {
  return (
    <div className='w-full h-full'>
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products />
        <Testimonials />
        <Footer />
        <Apropos />
    </div>
  )
}
