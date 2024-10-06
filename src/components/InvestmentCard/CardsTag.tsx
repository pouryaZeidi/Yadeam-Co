import Link from 'next/link';
import React from 'react';

interface CardsTagProps {
  href: string;
  tagtext:string;
}

const CardsTag: React.FC<CardsTagProps> = ({ href ,tagtext }) => {
  return (
    <Link href={href} className='p-1 px-3 bg-slate-400 m-1 rounded-md'>
      {tagtext}
    </Link>
  );
};

export default CardsTag;
