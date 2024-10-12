import React from 'react';
import NavbarItems from './NavbarItems';
import HamburgerMenu from './HamburgerMenu'; // Importing HamburgerMenu
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      {router.pathname.includes('sign') || router.pathname.includes('login') || router.pathname.includes('investment-dashboard') ? null :
      <div className='w-full h-[40px] inset-0 z-30 p-4 fixed top-0 '>
        <div className='hidden sm:w-[75%] m-auto sm:flex justify-between items-center'>
          <NavbarItems href={'/'} children={'Home'} />
          <NavbarItems href={'/about'} children={'About Us'} />
          <NavbarItems href={'/investment-dashboard'} children={'Investment'} className='!text-[15px]'  />
          <NavbarItems href={'https://www.linkedin.com/company/yadeam/posts/?feedView=all'} children={'LinkedIn'} />
          <NavbarItems href={'/signup'} children={'Sign Up'} />
          <NavbarItems href={'/login'} children={'Login'} />
          <NavbarItems href={'/campaignpage'} children={'campaign'} />
          <img src="/YadeamLogo.png" alt="Logo" className='w-[30px]' />
        </div>
        <div className='flex justify-end items-center sm:hidden'>
          <img src="/YadeamLogo.png" alt="Logo" className='w-[30px] ml-6 mr-6 ' />
          <HamburgerMenu />
        </div>
      </div>
      }
    </>
  );
};

export default Navbar;
