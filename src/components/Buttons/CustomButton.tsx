import React from 'react';

interface CustomButtonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  onClick?: () => void;
  theme: string;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ type = 'button', text, onClick, theme, className }) => {
  const buttonStyles = `w-full bg-blue-500 text-white py-2 rounded-[40px] hover:bg-blue-600 transition duration-200 transform hover:scale-105 ${className} `;

  return (
    <button type={type} onClick={onClick} className={buttonStyles}>
      {text}
    </button>
  );
};

export default CustomButton;
