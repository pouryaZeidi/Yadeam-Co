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
      {/* ترکیب کلاس‌های پیش‌فرض برای دارک و لایت مود */}
      <span className={`p-2 rounded-lg inset-0 z-40 text-primary1 hover: ${className}`}>
        {children}
      </span>
    </Link>
  );
}

export default NavbarItems;
