import React, { useState } from 'react';

interface InputComponentProps {
  type?: string; 
  placeholder?: string; 
  className?: string; 
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const InputComponent: React.FC<InputComponentProps> = ({
  type = 'text',
  placeholder = '',
  className = '',
  label,
  onChange,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e); 
    }
  };

  return (
    <div className="flex flex-col space-y-1 w-full">
      {label && <label className="text-sm text-white">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`p-2 border-2 rounded h-[35px]  
          bg-transparent text-white placeholder:opacity-50 
          border-white placeholder:text-gray-400 
          dark:border-white dark:placeholder:text-gray-300 
          dark:text-white focus:outline-none focus:ring-2 
          focus:ring-primary3 transition duration-200 
          ${className}`}
      />
    </div>
  );
};

export default InputComponent;
