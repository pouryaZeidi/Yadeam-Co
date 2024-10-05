import React, { useState } from 'react';
import InputComponent from '@/components/InputComponent';
import Link from 'next/link';
import Layout from '@/layout/Layout';
import CustomButton from '@/components/Buttons/CustomButton';
import { useTheme } from '@/components/Theme/ThemeContext'; 
import GoogleSignInButton from '@/components/Buttons/GoogleSignInButton';
import { TfiApple } from "react-icons/tfi"; 
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

const Signup = () => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = () => {
    console.log('Signing up with:', {
      fullName,
      email,
      password,
      confirmPassword,
    });
  };

  const backgroundImageRight = theme === 'dark' ? '/Yadeam1.jpg' : '/Yadeam2.jpg';
  const backgroundImageLeft = theme === 'dark' ? '/MainLogo1-2.jpg' : '/MainLogo2-1.jpg';

  const textColor = theme === 'dark' ? 'text-black' : 'text-white';
  const signatures = theme === 'dark' ? 'text-primary1' : 'text-primary3';

  return (
    <Layout>
      <div className="relative min-h-screen flex flex-col sm:flex-row">
        
        <div
          className="w-full sm:w-1/2 min-h-screen bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImageLeft})` }}
        ></div>
        
        <div
          className="hidden sm:block w-1/2 min-h-screen bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImageRight})` }}
        ></div>

        <div className="absolute w-full sm:w-1/2 sm:left-0 min-h-screen flex items-center justify-center p-5">
          <div className={`relative w-full max-w-[450px] bg-black bg-opacity-10 shadow-smallShadow backdrop-filter backdrop-blur-[14px] rounded-md flex flex-col p-6 space-y-4`}>
            <div className="flex justify-between items-center w-[100%]">
              <h2 className={`text-center text-[25px] font-bold ${textColor}`}>Sign Up</h2>
              <img src="/YadeamLogo.png" alt="Yadeam Logo" className="w-[50px] bg-transparent sm:w-[60px] opacity-80"/>
            </div>

            <InputComponent
              type="text"
              placeholder="Full Name"
              label="Full Name"
              className="w-full max-w-[400px]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            
            <InputComponent
              type="email"
              placeholder="Enter your email"
              label="Email"
              className="w-full max-w-[400px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <div className='relative w-full h-[60px] flex items-center'>
              <InputComponent
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                label="Password"
                className="w-full max-w-[400px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={`absolute right-2 bottom-[0.8px] transform -translate-y-1/2 ${textColor}`}
              >
                {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
              </button>
            </div>

            <div className='relative w-full h-[60px] flex items-center'>
              <InputComponent
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                label="Confirm Password"
                className="w-full max-w-[400px]"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={`absolute right-2 bottom-[0.8px] transform -translate-y-1/2 ${textColor}`}
              >
                {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
              </button>
            </div>
            
            <div className='flex justify-center'>
              <CustomButton
                onClick={handleSignup}
                text="Sign Up"
                theme={theme}
                className="text-black w-full bg-primary1 hover:bg-primary3 transform hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div className="mt-auto flex justify-center">
              <GoogleSignInButton 
                onClick={() => console.log('Signing in with Google...')} 
                txt={'Sign up with Google'} 
                theme={theme} // Pass the theme prop
              />
            </div>

            <div className='flex justify-center mt-4'>
              <button
                onClick={() => console.log('Signing up with Apple...')}
                className={`flex items-center justify-center w-full space-x-2 transform hover:scale-105 transition-transform duration-200 py-2 rounded-[40px] ${
                  theme === 'dark' ? 'bg-black border border-white text-white' : 'bg-white border border-gray-300 text-black'
                }`}
              >
                <TfiApple className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                <span>Sign up with Apple</span>
              </button>
            </div>

            <Link href="/login" className={`${signatures} duration-500 border border-transparent text-center hover:border hover:border-primary3 rounded-[40px] p-1`}>
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
