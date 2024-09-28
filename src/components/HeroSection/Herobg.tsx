import React from 'react';

const HeroBg = () => {
  return (
    <div className='absolute w-[100%] max-w-[50vw]  h-[100%] bg-transparent overflow-hidden flex items-center justify-center'>
      <div className='flex items-center  justify-center relative animate-spin-slow'>
        <div className='absolute sm:w-[700px] h-[300px] flex justify-center'>
          <img src="/shape1.svg" alt="Shape 1" className='shape shape1 scale-animation delay-0' />
        </div>
        <div className='absolute sm:w-[120px] h-[400px] flex items-center justify-center rotate-[15deg]'>
          <img src="/shape2.svg" alt="Shape 2" className='shape shape2 scale-animation delay-1' />
        </div>
        <div className='absolute sm:w-[500px] h-[240px] flex items-center justify-center rotate-[110deg]'>
          <img src="/shape3.svg" alt="Shape 3" className='shape shape3 scale-animation delay-2' />
        </div>
        <div className='absolute  sm:w-[220px] h-[220px] flex items-center justify-center rotate-[250deg]'>
          <img src="/shape4.svg" alt="Shape 4" className='shape shape4 scale-animation delay-3' />
        </div>
        <div className='absolute sm:w-[400px] h-[310px] flex justify- rotate-[418deg]'>
          <img src="/shape5.svg" alt="Shape 5" className='shape shape5 scale-animation delay-4' />
        </div>
      </div>
    </div>
  );
};

export default HeroBg;
