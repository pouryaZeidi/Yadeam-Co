import React from 'react';
import { useTheme } from './Theme/ThemeContext';

interface InputComponentProps {
  type?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  value: string; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  type = 'text',
  placeholder = '',
  className = '',
  label,
  value, 
  onChange,
}) => {
  const { theme: currentTheme } = useTheme();

  const borderColor = currentTheme === 'dark' ? 'border-black' : 'border-white';
  const textColor = currentTheme === 'dark' ? 'text-black' : 'text-white';
  const placeholderColor = currentTheme === 'dark' ? 'placeholder-gray-600' : 'placeholder-gray-300';

  return (
    <div className="flex flex-col space-y-1 w-full">
      {label && <label className={`text-sm ${textColor}`}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value} 
        onChange={onChange} 
        className={`p-2 border-2 rounded h-[35px] 
          bg-transparent ${textColor} ${placeholderColor} 
          ${borderColor} focus:outline-none focus:ring-2 
          focus:ring-primary3 transition-all duration-300 
          ${className}`}
      />
    </div>
  );
};

export default InputComponent;
