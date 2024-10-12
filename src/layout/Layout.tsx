import React from 'react';
import ThemeButton from '@/components/Theme/ThemeButton';
import { useRouter } from 'next/router';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const hiddenRoutes = ['/investment-dashboard', '/raise', '/campaignpage'];
  const isHiddenRoute = hiddenRoutes.includes(router.pathname);

  return (
    <>
      {!isHiddenRoute && <ThemeButton />}
      <div className='min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white'>
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
