// Layout.tsx
import React from 'react';
import ThemeButton from '@/components/Theme/ThemeButton';
import { ThemeProvider } from '@/components/Theme/ThemeContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
        <ThemeButton />
      <div className='min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white'>
        {children}
      </div>
    </>
    
  );
};

export default Layout;
