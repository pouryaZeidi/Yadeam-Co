import InputComponent from '@/components/InputComponent';
import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center h-[100vh]"
        style={{
          backgroundImage: 'url("/MainLogo.jpg")',
        }}
      ></div>
      
      <div className="absolute inset-0 bg-black opacity-85"></div>
      
      
      <div className="relative text-black w-[75%] sm:w-[65%] md:w-[60%] lg:w-[30%] h-[80%] bg-white bg-opacity-10 backdrop-filter backdrop-blur-xs rounded-[40px] flex flex-col p-3 space-y-4">
        <div className=' flex justify-between items-center w-[90%]'>
        <h2 className="text-center text-lg font-bold text-white">Login</h2>
        <img src="/YadeamLinkedInPageLogo.png" alt="" className='rounded-full w-[100px] ' />
        </div>
        <InputComponent 
          type='email' 
          placeholder='Enter your email' 
          label='Email' 
          className='bg-white text-black w-[100%] md:w-[90%]'
        />
        
        <InputComponent 
          type='password' 
          placeholder='Enter your password' 
          label='Password' 
          className='bg-white text-black w-[100%] md:w-[90%]'
        />

        <button className="mt-4 bg-blue-500 text-white p-2 rounded-[40px] hover:bg-blue-600">
          Login
        </button>

        <div className="mt-4 text-center text-white">
          <p>
            Don't have an account?{' '}
            <Link href="/register" className="text-blue-400 hover:underline">
              Create a new account
            </Link>
          </p>
        </div>
        <div className="mt-auto">
          <button 
          className="flex items-center justify-center bg-white text-black p-2 rounded-[40px] hover:scale-105 hover:transition-all w-full mt-2 sm:mt-5  md:mt-2 text-[12px] font-semibold sm:text-[16px] sm:font-normal">
            <img src="/gmail.png" alt="GoogleIcon" className="mr-2 w-5 h-5" />
            Login with Gmail
          </button>
        </div>
        <div className="md:mt-14 text-center hidden sm:block">
          <Link href="/" className="text-blue-400 hover:underline">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
