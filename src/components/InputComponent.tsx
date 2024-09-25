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
    <div className="flex flex-col space-y-2 w-full ">
      {label && <label className="text-sm font-medium text-white">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`p-3 border border-gray-300 text-[14px]  sm:text-[18px]  text-white focus:outline-none focus:ring-2 bg-primary2 focus:ring-blue-500 rounded-[40px] h-[45px] ${className}`}
      />
    </div>
  );
};

export default InputComponent;
