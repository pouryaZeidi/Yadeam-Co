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
        className={`sm:hidden text-4xl cursor-pointer ${theme === 'dark' ? 'text-primary1' : 'text-white'}`} 
        onClick={toggleMenu} 
      />

     
      {isOpen && (
        <div className='fixed top-0 right-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-center justify-center z-50'>
          
          <button 
            onClick={toggleMenu} 
            className='absolute top-4 right-4 text-white text-4xl p-4'
          >
            X
          </button>
          <div className='w-full h-[60%] flex flex-col justify-between items-center'>
          <NavbarItems href={'/'} children={'Home'} />
          <NavbarItems href={'/login'} children={'Login'} />
          <NavbarItems href={'/signup'} children={'Sign Up'} />
          <NavbarItems href={'/about'} children={'About Us'} />
          <NavbarItems href={'/linkedin'} children={'LinkedIn'} />
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
