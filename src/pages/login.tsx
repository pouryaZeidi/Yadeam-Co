import InputComponent from '@/components/InputComponent';
import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center min-h-screen bg-[url('/MainLogomobile.jpg')] sm:bg-[url('/MainLogo.jpg')]">
      </div>
      <div className="absolute inset-0 bg-black opacity-85"></div>
      <div className="relative text-black w-[75%] sm:w-[65%] md:w-[60%] lg:w-[30%]  bg-white bg-opacity-10 backdrop-filter mb- backdrop-blur-xs rounded-[40px] flex flex-col p-3 space-y-4">
        <div className="flex justify-between items-center w-[90%]">
          <h2 className="text-center text-lg font-bold text-white">Login</h2>
          <img src="/YadeamLinkedInPageLogo.png" alt="Yadeam Logo"
               className="rounded-full w-[70px] sm:w-[100px] opacity-80"/>
        </div>
        <InputComponent
          type="email"
          placeholder="Enter your email"
          label="Email"
          className="w-full max-w-[400px]"/>
        <InputComponent
          type="password"
          placeholder="Enter your password"
          label="Password"
          className="w-full max-w-[400px]"/>
        <div className="w-full text-right mt-2">
          <Link href="/forgot-password" className="text-primary3 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div className='flex justify-center'>
        <button className="mt-1 bg-primary2 text-white p-2 rounded-[40px] hover:bg-primary1 hover:transition-colors w-full max-w-[400px] ">
          Login
        </button>
        </div>
        <div className="mt-3 text-center text-white">
          <p>
            Don't have an account?{' '}
            <Link href="/register" className="text-primary2 hover:underline">
              Create a new account
            </Link>
          </p>
        </div>
        <div className="mt-auto flex justify-center">
          <button className="flex items-center justify-center w-full max-w-[400px] bg-white text-black p-2 rounded-[40px] hover:scale-[102%] hover:transition-all  mt-2 sm:mt-5 md:mt-2 text-[12px] font-semibold sm:text-[16px] sm:font-normal">
            <img src="/gmail.png" alt="Google Icon" className="mr-2 w-5 h-5" />
            Login with Gmail
          </button>
        </div>
        <div className="md:mt-10 text-center block">
          <Link href="/" className="text-primary3 hover:underline">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
