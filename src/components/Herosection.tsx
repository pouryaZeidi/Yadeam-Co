import Link from 'next/link';
import React from 'react';

const Herosection = () => {
  return (
    <div
      className='p-5 text-white flex bg-[url("/MainLogomobile.jpg")] sm:bg-[url("/MainLogo.jpg")] bg-cover bg-center bg-no-repeat h-[100vh] w-[100vw]'
    >
      <Link href='/login'>
        <span className='bg-primary2 hover:bg-primary1 hover:transition-colors  px-4 py-2 rounded-md'>Login</span>
      </Link>
    </div>
  );
}

export default Herosection;
