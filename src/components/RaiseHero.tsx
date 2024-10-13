import React from 'react';
import CustomButton from '@/components/Buttons/CustomButton';

const RaiseHero = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row w-full justify-center md:h-[75vh] h-auto bg-primary2 p-2 md:p-0 mb-2">
      <div className=" mt-5 sm:mt-2 md:mt-0 flex flex-row md:flex-col items-center justify-center w-full sm:w-full md:w-[50%] ">
        <h1 className="lg:text-[67px] md:text-[50px] sm:text-[36px] text-[23px] font-bold w-[70%] md:w-[80%] text-white mb-4">Why Raise with Yadeam?</h1>
       
        <CustomButton 
          text="Apply to Raise" 
          onClick={() => alert('Navigating to Raise Application')}
          theme="primary"
          className=" w-32 md:!w-36  md:text-lg !bg-white !text-primary1 rounded-md text-nowrap"
        />
      </div>
      <div className="w-full md:w-[40%] flex items-end relative">
        <img 
          src="/yadeamBanner.jpg" 
          alt="Yadeam image" 
          className="rounded-lg object-cover shadow-lg  md:absolute md:bottom-[-20px] "
        />
      </div>
    </div>
  );
};

export default RaiseHero;
