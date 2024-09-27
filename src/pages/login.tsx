import InputComponent from '@/components/InputComponent';
import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/layout/Layout';
import CustomButton from '@/components/Buttons/CustomButton';
import { useTheme } from '@/components/Theme/ThemeContext'; 
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import GoogleSignInButton from '@/components/Buttons/GoogleSignInButton';

const Login = () => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // State for remember me

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe); // Toggle remember me state
  };

  const backgroundImage = theme === 'dark' ? '/MainLogo1.jpg' : '/MainLogo.jpg';

  return (
    <Layout>
      <div className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-center min-h-screen bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '150%', backgroundPosition: 'center' }} 
        ></div>
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="relative text-black w-full max-w-[350px] md:py-5 mx-3 my-5 bg-black sm:px-5 shadow-smallShadow bg-opacity-10 backdrop-filter backdrop-blur-[14px] rounded-md flex flex-col p-3 space-y-4">
          <div className="flex justify-between items-center w-[100%]">
            <h2 className="text-center text-[25px] font-bold text-white">Login</h2>
            <img src="/YadeamLogo.png" alt="Yadeam Logo" className=" w-[50px] bg-transparent sm:w-[60px] opacity-80"/>
          </div>
          <InputComponent type="email" placeholder="Enter your email" label="Email" className="w-full max-w-[400px]"/>
          
          <div className='relative w-full h-[60px] flex items-center'>
            <InputComponent 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter your password" 
              label="Password" 
              className="w-full max-w-[400px]" 
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility}
              className="absolute right-2 bottom-[1px] transform -translate-y-1/2 text-white"
            >
              {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
            </button>
          </div>

          <div className="w-full text-right mt-2">
            <Link href="/forgot-password" className="text-primary3 hover:underline inline-block mb-10 text-[15px] ">
              Forgot Password?
            </Link>
          </div>

          {/* چک باکس برای به خاطر سپردن جزئیات */}
          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="rememberMe" 
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="mr-2" 
            />
            <label htmlFor="rememberMe" className="text-white text-sm">Remember Me</label>
          </div>

          <div className='flex justify-center'>
            <CustomButton 
              onClick={() => console.log('Logging in...')} 
              text="Login" 
              theme={theme} 
              className="text-black w-full bg-blue-500 hover:bg-blue-600 transform hover:scale-105 transition-transform duration-200" 
            />
          </div>

          {/* استفاده از کامپوننت دکمه گوگل */}
          <div className="mt-auto flex justify-center">
            <GoogleSignInButton onClick={() => console.log('Signing up with Google...')} txt={'Sign in with Google'} />
          </div>

          <div className="mt-3 text-center text-white">
            <span className='text-[13px]'>
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary3 hover:underline font-bold">
                Create a new account
              </Link>
            </span>
          </div>

          <Link href="/" className="text-primary3 duration-500 border border-transparent text-center hover:border hover:border-primary3 rounded-[40px] p-1">
            Back
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
