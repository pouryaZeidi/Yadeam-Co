import React from 'react';

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; 
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, name, onChange, className }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-primary2 focus:border-indigo-500 ${className}`} 
      />
    </div>
  );
};

export default InputField;
