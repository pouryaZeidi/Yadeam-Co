import React, { useState } from 'react';
import InputComponent from '@/components/InputComponent';
import Link from 'next/link';
import Layout from '@/layout/Layout';
import CustomButton from '@/components/Buttons/CustomButton';
import { useTheme } from '@/components/Theme/ThemeContext'; 
import GoogleSignInButton from '@/components/Buttons/GoogleSignInButton';
import AppleButton from '@/components/Buttons/Applebutton'; // Import AppleButton
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

const Signup = () => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [investor, setInvestor] = useState(false);
  const [company, setCompany] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = () => {
    // Reset error message
    setError('');

    // Basic validation
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!investor && !company) {
      setError('Please select at least one option: Investor or Company.');
      return;
    }

    console.log('Signing up with:', {
      fullName,
      email,
      password,
      confirmPassword,
      investor,
      company
    });

    // Here you can add your signup logic, like an API call
  };

  const backgroundImageRight = theme === 'dark' ? '/Yadeam1.jpg' : '/Yadeam2.jpg';
  const backgroundImageLeft = theme === 'dark' ? '/MainLogo1-2.png' : '/MainLogo2-1.png';

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

        <div className="absolute w-full sm:w-1/2 sm:left-0  flex items-center justify-center p-1 sm:p-4">
          <div className={`relative w-full max-w-[450px] bg-black bg-opacity-10 shadow-smallShadow backdrop-filter backdrop-blur-[14px] rounded-md flex flex-col p-6 space-y-4`}>
            <h2 className={`text-left ml-9 sm:ml-0 text-[20px] sm:text-[25px] font-bold ${textColor}`}>Sign Up</h2>

            {error && <div className="text-red-500 mb-2">{error}</div>}

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

            <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="investor"
                  checked={investor}
                  onChange={() => {
                    setInvestor(!investor);
                    // If investor is selected, uncheck company
                    if (!investor) setCompany(false);
                  }}
                  className="form-checkbox h-4 w-4 text-primary3 rounded border-2"
                />
                <label htmlFor="investor" className={`ml-2 ${textColor}`}>Investor</label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="company"
                  checked={company}
                  onChange={() => {
                    setCompany(!company);
                    // If company is selected, uncheck investor
                    if (!company) setInvestor(false);
                  }}
                  className="form-checkbox h-4 w-4 text-primary3 rounded border-2"
                />
                <label htmlFor="company" className={`ml-2 ${textColor}`}>Company</label>
              </div>
            </div>
            
            <div className='flex justify-center mt-4'>
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
                theme={theme} 
              />
            </div>

            <div className='flex justify-center mt-4'>
              <AppleButton 
                onClick={() => console.log('Signing in with Apple...')} 
                theme={theme} 
              />
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
