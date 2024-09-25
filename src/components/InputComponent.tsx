import React, { useState } from 'react';

interface InputComponentProps {
  type?: string; // نوع ورودی: 'text', 'password', 'email' و غیره
  placeholder?: string; // متن راهنما
  className?: string; // استایل‌های سفارشی
  label?: string; // برچسب برای ورودی
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // تابع برای مدیریت تغییرات
}

const InputComponent: React.FC<InputComponentProps> = ({
  type = 'text', // مقدار پیش‌فرض 'text'
  placeholder = '',
  className = '',
  label,
  onChange,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e); // اگر تابع onChange وجود دارد، آن را فراخوانی کنید
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
        className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default InputComponent;
