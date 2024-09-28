// components/ThemeButton.tsx
import React, { useContext } from 'react';
import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa';
import { useTheme } from '@/components/Theme/ThemeContext';

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // اکنون toggleTheme به درستی در دسترس است

  return (
    <div className={`flex absolute w-[40px] h-9 items-center justify-center rounded-3xl inset-0 m-4 mt-10 p-1 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <span 
        className={` rounded-full text-2xl  p-2 cursor-pointer ${theme === 'dark' ? 'text-yellow-400' : 'text-black'}`} 
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <FaLightbulb /> : <FaRegLightbulb />}
      </span>
    </div>
  );
};

export default ThemeButton;
