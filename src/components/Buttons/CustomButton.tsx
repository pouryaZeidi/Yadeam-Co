// components/CustomButton.tsx
import React from 'react';

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  className?: string;  // کلاس‌های اضافی
  icon?: React.ReactNode;  // آیکون یا محتوای اضافی
  theme?: 'light' | 'dark';  // نوع تم
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, className = '', icon, theme = 'light' }) => {
  // کلاس‌های ثابت
  const baseClasses = 'py-2 px-4 rounded-[40px] flex items-center justify-center transition duration-300';
  
  // تعیین رنگ متن بر اساس تم
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  
  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${textColor} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>} 
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
