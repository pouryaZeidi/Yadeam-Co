import React from 'react';
import { useTheme } from '@/components/Theme/ThemeContext';
import Navbar from '../Navbar/Navbar';
import HeroBg from './Herobg';

const Herosection = () => {
  const { theme } = useTheme();
  
  const backgroundImage = theme === 'dark' ? '/Basebg1.jpg' : '/Basebg2.jpg';

  return (
    <div 
      className="relative flex flex-col items-center h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <HeroBg />
      
      {theme !== 'dark' && (
        <div className="absolute inset-0 bg-black opacity-30 z-0" />
      )}

     
      <div className="absolute top-[16%] sm:top-[24%] md:top-[30%] lg:top-[28%] left-1/2 transform -translate-x-1/2 text-center z-20">
        <h1 className={`font-bold drop-shadow-lg ${theme === 'dark' ? 'text-black' : 'text-white'} text-[clamp(1.5rem,2vw+1rem,2.5rem)]`}>
          Welcome to our platform, Yadeam Co.
        </h1>
        <p className={`mt-4 opacity-80 ${theme === 'dark' ? 'text-black' : 'text-white'} text-[clamp(15px,8px,18px)] sm:text-[clamp(19px,12px,22px)]`}>
          Join us for more exciting news and opportunities.
        </p>
      </div>

      
      <div className="w-[100px] h-[100px] border border-primary1 border-x-2 rounded-full flex items-center justify-center absolute top-[67%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-10">
        <video 
          className="w-full h-auto object-cover" 
          loop 
          autoPlay 
          muted 
          playsInline
        >
          <source src="/centeralvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Herosection;
