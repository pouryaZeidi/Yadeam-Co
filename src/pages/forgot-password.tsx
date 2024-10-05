import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/layout/Layout';
import InputComponent from '@/components/InputComponent';
import CustomButton from '@/components/Buttons/CustomButton';
import { useTheme } from '@/components/Theme/ThemeContext';

const ForgotPassword: React.FC = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending password reset email to:', email);
  };

  const textColor = theme === 'dark' ? 'text-black' : 'text-white';
  const signatures = theme === 'dark' ? 'text-primary1' : 'text-primary3';
  const backgroundImage = theme === 'dark' ? '/MainLogo1.jpg' : '/MainLogo.jpg';
  const backgroundImageMobile = theme === 'dark' ? '/MainLogoMob1.jpg' : '/MainLogoMob2.jpg';

  return (
    <Layout>
      <div className="relative min-h-screen flex items-center justify-center">
       
        <div 
          className="absolute inset-0 bg-center min-h-screen bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: '150%',
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center' 
          }}
        ></div>

        
        <div 
          className="absolute inset-0 bg-center min-h-screen bg-cover bg-no-repeat sm:hidden"
          style={{ 
            backgroundImage: `url(${backgroundImageMobile})`,
            backgroundSize: '150%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }} 
        ></div>

        <div className={`relative w-full max-w-[350px] bg-black sm:px-5 shadow-smallShadow bg-opacity-10 backdrop-filter backdrop-blur-[14px] rounded-md flex flex-col p-5 space-y-4`}>
          <h2 className={`text-center text-[25px] font-bold ${textColor}`}>Forgot Password</h2>
          <p className={`${textColor} text-center mb-4`}>
            Please enter your email address to receive a password reset link.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <InputComponent 
              type="email" 
              placeholder="Enter your email" 
              label="Email" 
              value={email} 
              onChange={handleEmailChange} 
              className="w-full max-w-[400px]" 
            />
            <div className="flex justify-center">
              <CustomButton 
                type="submit" 
                text="Reset Password" 
                theme={theme} 
                className="" 
              />
            </div>
          </form>

          <div className={`text-center ${textColor}`}>
            <Link href="/login" className={`${signatures} hover:underline`}>
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ForgotPassword;
