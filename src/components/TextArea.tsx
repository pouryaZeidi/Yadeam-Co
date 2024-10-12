// TextArea.tsx
import React from 'react';

interface TextAreaProps {
  label: string;
  placeholder?: string;
  value: string;
  name: string; // اضافه کردن نوع name
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // تغییر به HTMLTextAreaElement
}

const TextArea: React.FC<TextAreaProps> = ({ label, placeholder, value, name, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mt-2 text-gray-700">{label}</label>
      <textarea
        name={name} // اضافه کردن name
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full p-2 mb-2  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default TextArea;
