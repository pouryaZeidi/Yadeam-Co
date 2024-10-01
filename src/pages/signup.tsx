import React, { useState } from 'react';
import InputComponent from '@/components/InputComponent';
import Link from 'next/link';
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import Layout from '@/layout/Layout';
import CustomButton from '@/components/Buttons/CustomButton';
import { useTheme } from '@/components/Theme/ThemeContext'; 
import GoogleSignInButton from '@/components/Buttons/GoogleSignInButton';
import { TfiApple } from "react-icons/tfi"; 

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useTheme();
  
  const [selectedRole, setSelectedRole] = useState<string | null>(null); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  const backgroundImage = theme === 'dark' ? '/MainLogo1.jpg' : '/MainLogo.jpg';
  const backgroundImageMobile = theme === 'dark' ? '/MainLogoMob1.jpg' : '/MainLogoMob2.jpg';

  const textColor = theme === 'dark' ? 'text-black' : 'text-white'; 
  const signatures = theme === 'dark' ? 'text-primary1' : 'text-primary3'; 

  const handleAppleSignUp = () => {
    console.log('Signing up with Apple...');
  };

  return (
    <Layout>
      <div className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-center min-h-screen sm:bg-[length:110%]"
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '150%', backgroundPosition: 'center' }} 
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
        <div className={`relative text-black w-full max-w-[350px] md:py-2 mx-3 my-2 bg-black sm:px-5 shadow-smallShadow bg-opacity-10 backdrop-filter backdrop-blur-[14px] rounded-md flex flex-col p-3 space-y-4`}>
          <div className="flex justify-between items-center w-[100%]">
            <h2 className={`text-center text-[25px] font-bold ${textColor}`}>Sign Up</h2>
            <img src="/YadeamLogo.png" alt="Yadeam Logo" className="w-[50px] bg-transparent sm:w-[60px] opacity-80"/>
          </div>
          <InputComponent type="text" placeholder="Enter Full Name or Company Name" label="Full Name or Company Name" className="w-full max-w-[400px] h-[35px]" value={''} />
          <InputComponent type="email" placeholder="Enter your Email" label="Email" className="w-full max-w-[400px] h-[35px]" value={''} />
          
          <div className='relative w-full h-[55px] flex items-center'>
            <InputComponent type={showPassword ? "text" : "password"} placeholder="Enter your password" label="Password" className="w-full max-w-[400px] h-[35px]" value={''} />
            <button 
              type="button"
              onClick={togglePasswordVisibility}
              className={`absolute right-2 bottom-0 transform -translate-y-1/2 ${textColor}`}
            >
              {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
            </button>
          </div>

          <div className='relative w-full h-[55px] flex items-center'>
            <InputComponent type={showPassword ? "text" : "password"} placeholder="Confirm password" label="Confirm Password" className="w-full max-w-[400px] h-[35px]" value={''} />
            <button 
              type="button"
              onClick={togglePasswordVisibility}
              className={`absolute right-2 bottom-0 transform -translate-y-1/2 ${textColor}`}
            >
              {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
            </button>
          </div>

          
          <div className="flex justify-between space-x-2">
            <label className={`flex items-center ${textColor}`}>
              <input 
                type="radio" 
                name="role" 
                value="Investor" 
                checked={selectedRole === 'Investor'} 
                onChange={() => handleRoleChange('Investor')} 
                required 
                className="mr-2" 
              />
              Investor
            </label>
            <label className={`flex items-center ${textColor}`}>
              <input 
                type="radio" 
                name="role" 
                value="Company" 
                checked={selectedRole === 'Company'} 
                onChange={() => handleRoleChange('Company')} 
                required 
                className="mr-2" 
              />
              Company
            </label>
          </div>

          <div className='flex justify-center'>
            <CustomButton 
              onClick={() => console.log('Signing up...')} 
              text="Sign Up" 
              className="bg-primary1 hover:bg-primary3 text-black w-full transform hover:scale-105 transition-transform duration-200" 
              theme={theme} 
            />
          </div>

          <div className="mt-4 flex flex-col space-y-4"> 
            <GoogleSignInButton onClick={() => console.log('Signing up with Google...')} txt={'Sign Up with Google'} />

            
            <button
              onClick={handleAppleSignUp}
              className="bg-black border border-white text-white w-full flex items-center justify-center space-x-2 transform hover:scale-105 transition-transform duration-200 py-2 rounded-[40px]"
            >
              <TfiApple className="text-white" /> 
              <span>Sign Up with Apple</span> 
            </button>
          </div>

          <Link href="/" className={`${signatures} duration-500 border border-transparent text-center hover:border hover:border-primary3 rounded-[40px] p-1`}>
            Back
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
