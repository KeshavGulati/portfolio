import React from 'react';
import { useMobileNavbar } from '../utils/MobileNavbarContext';
import { Link } from 'react-router-dom';


const MobileNavbar = () => {
  const { isOpen, toggleNavbar } = useMobileNavbar();
  
  return (
    <nav className={`mobileNav 
      w-[80%] h-[90%] 
      fixed bottom-0
      border rounded-lg
      bg-white z-100
      transition-all duration-600
      right-100
      ${isOpen ? "translate-x-[100%]" : "" }
      `}>
      <ul className='flex flex-col h-full w-full
          items-left justify-center pl-10 gap-10
      '>
        <li
          onClick={() => {toggleNavbar();}}>
            <Link to={'//'}>
              Home
            </Link>
        </li>
        <li>Projects</li>
        <li className='pl-5'>
          <ul className='flex flex-col 
            items-left justify-evenly gap-5'>
            <li 
              onClick={() => {toggleNavbar();}}>
                <a href="https://nexusdevops.com" target='__blank'>
                  Nexus
                </a>
            </li>
            <li 
              onClick={() => {toggleNavbar();}}>
                <Link to={'/spokes'}>
                  Research Project
                </Link>
            </li>
            <li 
              onClick={() => {toggleNavbar();}}>
                <a href="https://github.com/KeshavGulati/Mini-Axelrod-Tournament" target='__blank'>
                  Game Theory
                </a>
             </li>
            <li 
              onClick={() => {toggleNavbar();}}>
                <Link to={'/bigthink'}>
                  BigTh!nk AI
                </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

  )

}

export default MobileNavbar;