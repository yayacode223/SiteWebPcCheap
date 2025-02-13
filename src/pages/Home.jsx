import React from 'react'
import Hero from '../Components/Hero/Hero'
import TopProducts from '../Components/TopProducts/TopProducts'

export default function Home({handleOrderPopup}) {
  return (
    <div className='w-full h-full'>
        <Hero handleOrderPopup={handleOrderPopup} />
        <TopProducts handleOrderPopup={handleOrderPopup} />
    </div>
  )
}
