import React from 'react';
import CustomButton from '@/components/Buttons/CustomButton';

const RaiseHero = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row w-full justify-center md:h-[75vh] h-auto bg-primary1 p-2 md:p-0 mb-2">
      <div className=" mt-5 sm:mt-2 md:mt-0 flex flex-col  md:flex-col items-start justify-center w-[80%] m-auto  md:m-0 sm:w-[80%] md:w-[38%] ">
        <h1 className="lg:text-[67px] md:text-[50px] sm:text-[36px] text-[23px] font-bold w-[70%] md:w-[80%]  text-white mb-4">Why Raise with Yadeam?</h1>
       
        <CustomButton 
          text="Apply to Raise" 
          onClick={() => alert('Navigating to Raise Application')}
          theme="primary"
          className=" !w-32 md:!w-36 text-[15px] p-2 mb-4 md:mb-0  sm:text-lg !bg-white !text-CTA rounded-md text-nowrap"
        />
      </div>
      <div className="w-full md:w-[40%] m-auto md:m-0 relative">
        <img 
          src="/YadeamHero.png" 
          alt="Yadeam image" 
          className="rounded-lg object-cover shadow-lg w-[80%] md:w-[102%] m-auto md:m-0 lg:h-[500px]  md:absolute md:bottom-[-30px] "
        />
      </div>
    </div>
  );
};

export default RaiseHero;
