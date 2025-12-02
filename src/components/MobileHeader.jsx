import React, { useEffect } from 'react';
import myPhoto from "../assets/haha(5).jpg";
import { useMobileNavbar } from '../utils/MobileNavbarContext';

const MobileHeader = () => {
  const { isOpen, toggleNavbar } = useMobileNavbar();
  
  useEffect(() => {
    if (isOpen) toggleNavbar();

  }, [])

  return (
    <header className='mobileHeader 
      w-full h-[10%] 
      bg-[#D9D9D9]
      flex items-center justify-between p-5
    '>
      <div className="hamburger
        h-[40px] w-[40px]
        flex flex-col items-center justify-evenly"
        onClick={() => toggleNavbar()}
        >
        <span className={`
          hamburger-line-1 bg-black h-[5px] w-full
          transition-all duration-600
          ${isOpen ? "rotate-[45deg] translate-y-[16px]" : ""}
          `}></span>
        <span className={`
          hamburger-line-2 bg-black h-[5px] w-full
          transition-all duration-600
          ${isOpen ? "rotate-[45deg] translate-y-[50%]" : ""}
          `}></span>
        <span className={`
          hamburger-line-3 bg-black h-[5px] w-full
          transition-all duration-600
          ${isOpen ? "rotate-[-45deg] translate-y-[-7px]" : ""}
          `}></span>
      </div>
      <div className="img-div">
        <a href="https://www.linkedin.com/in/keshav-gulati/" target='__blank'>
          <img className='myPhoto' src={ myPhoto } alt="" />
        </a>
      </div>
    </header>

  )
}

export default MobileHeader;