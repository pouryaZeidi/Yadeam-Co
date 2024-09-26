import InputComponent from '@/components/InputComponent';
import React, { useState } from 'react';
import Link from 'next/link';
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-center min-h-screen bg-[url('/MainLogomobile.jpg')] sm:bg-[url('/MainLogo.jpg')] bg-[length:160%]"></div>
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative text-black w-full max-w-[350px] md:py-5 mx-3 my-5 bg-black sm:px-5 shadow-smallShadow bg-opacity-10 backdrop-filter backdrop-blur-[12px] rounded-md flex flex-col p-3 space-y-4">
        <div className="flex justify-between items-center w-[100%]">
          <h2 className="text-center text-[25px] font-bold text-white">Sign Up</h2>
          <img src="/YadeamLogo.svg" alt="Yadeam Logo" className="rounded-full w-[50px] sm:w-[60px] opacity-80"/>
        </div>
        <InputComponent
          type="text"
          placeholder="Type your Name"
          label="First Name"
          className="w-full max-w-[400px] h-[35px]"/>
        <InputComponent
          type="text"
          placeholder="Type Your Last Name"
          label="Last Name"
          className="w-full max-w-[400px] h-[35px]"/>
        <InputComponent
          type="email"
          placeholder="Enter your Email"
          label="Email"
          className="w-full max-w-[400px] h-[35px]"/>
        
        <div className='relative w-full h-[60px]  flex items-center '>
          <InputComponent
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            label="Password"
            className="w-full max-w-[400px] h-[35px] "/>
          <button 
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2  bottom-[1px]  transform -translate-y-1/2 text-white "
          >
            {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
          </button>
        </div>
       
        <div className='flex justify-center'>
          <button className="bg-primary2 duration-500 text-white px-2 py-1 hover:scale-[102%] text-[16px] rounded-[40px] mt-3 hover:bg-primary1 hover:transition-all w-full max-w-[400px]">
            Sign Up
          </button>
        </div>
        <div className="mt-auto flex justify-center">
          <button className="flex items-center justify-center w-full max-w-[400px] duration-500 bg-white text-black px-2 py-1 rounded-[40px] hover:scale-[102%] hover:transition-all mt-2 sm:mt-4 md:mt-1 text-[12px] font-semibold sm:text-[16px] sm:font-normal">
            <img src="/gmail.png" alt="Google Icon" className="mr-2 w-5 h-5" />
            Login with Gmail
          </button>
        </div>
        <Link href="/" className="text-primary3 duration-500 border border-transparent text-center hover:border hover:border-primary3 rounded-[40px] p-1">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Signup;
