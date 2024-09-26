import React, { useContext } from 'react';
import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='flex absolute w-[40px] h-9 items-center justify-center rounded-3xl inset-0 m-3 bg-white  p-1'>
      <span className={`border rounded-full text-2xl border-black p-1 cursor-pointer ${theme === 'dark' && 'text-yellow-400'}`} onClick={toggleTheme}>
        {theme === 'dark' ? <FaLightbulb /> : <FaRegLightbulb />}
      </span>
    </div>
  );
};

export default ThemeButton;
