import React from 'react';
import { FcGoogle } from 'react-icons/fc'; 

interface GoogleSignInButtonProps {
  onClick: () => void;
  txt:string;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onClick , txt }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center justify-center w-full p-2 bg-white text-black border border-gray-300 rounded-[40px] hover:scale-105 transition-transform duration-200"
    >
      <FcGoogle className="text-xl mr-2" />
      {txt}
    </button>
  );
};

export default GoogleSignInButton;
