import React from 'react';
import { useTheme } from '@/components/Theme/ThemeContext';

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex absolute w-[68px] h-5 items-center justify-center rounded-full inset-0 m-4 p-1 z-50  ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}>
      <button
        onClick={toggleTheme}
        className={`relative inline-flex items-center h-5 w-[80px] rounded-full transition-colors duration-300  ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-500'}`}
      >
        <span
          className={`absolute w-7 h-5  rounded-full transition-transform duration-300 transform ${theme === 'dark' ? 'translate-x-8 bg-yellow-400' : 'translate-x-0 bg-white'}`}
        />
      </button>
    </div>
  );
};

export default ThemeButton;
