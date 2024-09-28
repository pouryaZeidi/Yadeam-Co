import React from 'react';
import { useTheme } from '@/components/Theme/ThemeContext';
import Navbar from '../Navbar/Navbar';
import HeroBg from './Herobg';

const Herosection = () => {
  const { theme } = useTheme();
  
  const backgroundImage = theme === 'dark' ? '/Basebg1.jpg' : '/Basebg2.jpg';

  return (
    <div 
      className="text-white flex bg-cover bg-center bg-no-repeat h-[100vh] w-[100vw] relative flex-col items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <HeroBg />
      
      {/* دیو جدید با مشخصات دلخواه */}
      <div className="w-[100px] h-[100px] border border-primary1 border-x-2 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-10">
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
