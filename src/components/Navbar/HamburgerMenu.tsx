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
        className={`sm:hidden text-4xl hover:text-primary3 cursor-pointer ${theme === 'dark' ? 'text-primary1' : 'text-primary2'}`} 
        onClick={toggleMenu} 
      />

     
      {isOpen && (
        <div className='fixed top-0 right-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-center justify-center z-50'>
          
          <button 
            onClick={toggleMenu} 
            className='absolute top-4 right-4 text-white text-1xl p-3 border bg-black bg-opacity-85 rounded-full '
          >
            X
          </button>
          <div className='w-full h-[50%] flex flex-col justify-between items-center'>
          <NavbarItems href={'/'} children={'Home'} className='w-64' />
          <NavbarItems href={'/about'} children={'About Us'} className='w-64' />
          <NavbarItems href={'/linkedin'} children={'LinkedIn'} className='w-64' />
          <NavbarItems href={'/signup'} children={'Sign Up'} className='w-64' />
          <NavbarItems href={'/login'} children={'Login'} className='w-64' />
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
