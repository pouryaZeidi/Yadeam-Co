import React from 'react';
import NavbarItems from './NavbarItems';
import HamburgerMenu from './HamburgerMenu'; // Importing HamburgerMenu

const Navbar = () => {
  return (
    <div className='w-full h-[40px] inset-0 z-30 p-4'>
      <div className='hidden  sm:w-[50%]  m-auto sm:flex justify-between items-center'>
          <NavbarItems href={'/'} children={'Home'} />
          <NavbarItems href={'/signup'} children={'Sign Up'} />
          <NavbarItems href={'/login'} children={'Login'} />
      </div>
          <div className='flex justify-end'>
        <HamburgerMenu /> 
          </div>
    </div>
  );
};

export default Navbar;
