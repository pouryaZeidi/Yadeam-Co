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
      <label className="text-sm text-white">
        {label && <span>{label}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`p-3 border border-primary1 mt-1  text-white focus:outline-none focus:ring-[.5px] bg-transparent focus:ring-primary3 rounded h-[42px] ${className} placeholder:opacity-45`}
        />
        </label>
    </div>
  );
};

export default InputComponent;
