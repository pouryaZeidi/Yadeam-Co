import Link from 'next/link';
import React from 'react';

const Herosection = () => {
  return (
    <div
      className=' p-5 text-white flex '
      style={{
        backgroundImage: 'url("/MainLogo.jpg")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',  
        height: '100vh', 
        width: '100vw', 
      }}
    >
      <Link href='/login'>
        <span className='bg-blue-500 px-4 py-2 rounded-md'>Login</span>
      </Link>
    </div>
  );
}

export default Herosection;
