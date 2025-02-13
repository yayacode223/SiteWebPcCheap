import React, { useState } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

export default function Header() {

    const [isClick, setIsClick] = useState(false);

  return (

    <>
        {/* NavBar */}
        <NavBar isClick={isClick} setIsClick={setIsClick} />
        {/* SideBar */}
        <SideBar isClick={isClick} setIsClick={setIsClick} />
    </>
  )
}
