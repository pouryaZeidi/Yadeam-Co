import React from 'react';
import ThemeButton from '@/components/ThemeButon';
import { ThemeProvider } from '@/components/ThemeContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
        <ThemeButton />
      <div className='min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white'>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
