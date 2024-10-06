// Layout.tsx
import React from 'react';
import ThemeButton from '@/components/Theme/ThemeButton';
import { ThemeProvider } from '@/components/Theme/ThemeContext';
import Navbar from '@/components/Navbar/Navbar';
import { useRouter } from 'next/router';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()
  return (
    <>
        {router.pathname.includes('investment-dashboard') ? null : <ThemeButton />}
      <div className='min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white'>
        <Navbar/>
        <main>
        {children}
        </main>
      </div>
    </>
    
  );
};

export default Layout;
