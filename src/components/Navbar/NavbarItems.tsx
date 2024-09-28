import Link from 'next/link';
import React, { ReactNode } from 'react';

interface NavbarItemsProps {
  href: string;
  className?: string;
  children: ReactNode;
}

const NavbarItems: React.FC<NavbarItemsProps> = ({ href, className, children }) => {
  return (
    <Link href={href} className=''>
      <span 
        className={`p-2 rounded-[40px] z-40 text-primary1 transition duration-300 ease-in-out transform 
        hover:bg-primary1 hover:text-white hover:shadow-lg hover:scale-105 
        focus:outline-none focus:ring-2 focus:ring-primary3 ${className}`}
      >
        {children}
      </span>
    </Link>
  );
}

export default NavbarItems;
