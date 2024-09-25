import InputComponent from '@/components/InputComponent';
import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* پس‌زمینه تصویر */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/MainLogo.jpg")',
        }}
      ></div>
      
      {/* لایه مشکی نیمه شفاف */}
      <div className="absolute inset-0 bg-black opacity-95"></div>
      
      {/* محتوای لاگین */}
      <div className="relative text-black w-[75%] sm:w-[65%]  md:w-[60%] lg:w-[30%] h-[80%] bg-white bg-opacity-10 backdrop-filter backdrop-blur-xs rounded-lg flex flex-col p-5 space-y-4">
        <h2 className="text-center text-lg font-semibold text-white">Login</h2>
        
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

        <button className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Login
        </button>

        {/* لینک‌های زیر فرم لاگین */}
        <div className="mt-4 text-center text-white">
          <p>
            Don't have an account?{' '}
            <Link href="/register" className="text-blue-400 hover:underline">
              Create a new account
            </Link>
          </p>
        </div>

        {/* دکمه ورود با Gmail در انتهای فرم */}
        <div className="mt-auto">
          <button className="flex items-center justify-center bg-white text-black p-2 rounded-md hover:scale-105 hover:transition-all w-full">
            <img src="/gmail.png" alt="Google Icon" className="mr-2 w-5 h-5" />
            Login with Gmail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
