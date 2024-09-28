import React, { useState } from 'react';
import NavbarItems from './NavbarItems';
import { CgMenuRound } from "react-icons/cg";
import { useTheme } from '@/components/Theme/ThemeContext'; 

const HamburgerMenu = () => {
  const { theme } = useTheme(); 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
      <CgMenuRound 
        className={`sm:hidden text-4xl cursor-pointer ${theme === 'dark' ? 'text-black' : 'text-white'}`} 
        onClick={toggleMenu} 
      />

     
      {isOpen && (
        <div className='fixed top-0 right-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center z-50'>
          
          <button 
            onClick={toggleMenu} 
            className='absolute top-4 right-4 text-white text-4xl p-4'
          >
            X
          </button>
          <NavbarItems href={'/'} children={'Home'} />
          <NavbarItems href={'/signup'} children={'Sign Up'} />
          <NavbarItems href={'/login'} children={'Login'} />
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
