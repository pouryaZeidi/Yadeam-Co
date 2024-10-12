// InputField.tsx
import React from 'react';

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  name: string; // اضافه کردن نوع name
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // تغییر به HTMLInputElement
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, name, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        name={name} // اضافه کردن name
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default InputField;
