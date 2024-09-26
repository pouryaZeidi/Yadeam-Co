import Link from 'next/link';
import React from 'react';

const Herosection = () => {
  return (
    <div  className='p-2 text-white flex bg-[url("/MainLogomobile.jpg")] sm:bg-[url("/MainLogo.jpg")] bg-cover bg-center bg-no-repeat h-[100vh] w-[100vw]'
    >
      <div className='w-full min-h-[30px] max-h-[50px]  p-3 flex justify-end items-center'>
      <Link href='/login'>
        <span className='bg-primary2 mr-3 hover:bg-primary1 hover:transition-colors  px-3 py-2 rounded-[40px]'>Login</span>
      </Link>
      <Link href='/signup'>
        <span className='bg-primary2 hover:bg-primary1 hover:transition-colors  px-3 py-2 rounded-[40px] '>Sign Up</span>
      </Link>
      </div>
    </div>
  );
}

export default Herosection;
