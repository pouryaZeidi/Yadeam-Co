import React from 'react';
import { useTheme } from '@/components/Theme/ThemeContext';

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex absolute w-[50px] h-4 items-center justify-center rounded-full inset-0 m-5 z-50 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}>
      <button
        onClick={toggleTheme}
        className={`relative inline-flex items-center h-5 w-[45px] p-1 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
      >
        <span
          className={`absolute w-4 h-4 rounded-full transition-transform duration-300 transform ${theme === 'dark' ? 'translate-x-[22px] bg-yellow-400' : 'translate-x-0 bg-gray-400'}`}
        />
      </button>
    </div>
  );
};

export default ThemeButton;
