import Link from 'next/link';
import React from 'react';
import { useTheme } from '@/components/Theme/ThemeContext';

const Herosection = () => {
  const { theme } = useTheme();
  
  const backgroundImage = theme === 'dark' ? '/Basebg1.png' : '/Basebg2.jpg';

  return (
    <div 
      className={`text-white flex bg-cover bg-center bg-no-repeat h-[100vh] w-[100vw]`} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav className='w-full relative flex flex-col justify-between items-center p-2 bg-opacity-70 backdrop-blur-md'>
        <div className='flex flex-col absolute bottom-40 sm:flex-row w-full h-[20%]'>
          <img src="/herologo.png" alt="Logo Yadeam" className='' />
          <div className='flex w-auto items-center justify-center'>
            <Link href='/login'>
              <span className='hover:text-blue-800 hover:transition-colors  sm:bg-primary1 px-2 py-1 text-[18px] sm:text-[14px] rounded-[40px] mx-2'>Login</span>
            </Link>
            <Link href='/signup'>
              <span className='hover:text-blue-800 hover:transition-colors sm: sm:bg-primary1 px-2 py-1 rounded-[40px] text-[18px] sm:text-[14px] text-nowrap mx-2'>Sign Up</span>
            </Link>
          </div>
        </div>
      </nav>
      
      <div className='hidden sm:flex flex-col justify-center items-center w-full flex-grow text-center'>
        <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>Welcome to Our Platform</h1>
        <p className='mt-2 text-lg md:text-xl lg:text-2xl'>Join us and explore amazing features!</p>
      </div>

      <div className="absolute inset-0 flex flex-col top-14 items-center h-40 justify-center text-center sm:hidden">
        <h1 className='text-4xl font-bold'>Welcome to Our Platform</h1>
        <p className='mt-2 text-lg'>Join us and explore amazing features!</p>
      </div>
    </div>
  );
}

export default Herosection;
