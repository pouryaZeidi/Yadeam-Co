// components/SearchInput.tsx
import React from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchInputProps {
  placeholder?: string; // مقدار پیش‌فرض placeholder
  value: string; // مقدار اینپوت
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // هندلر برای تغییرات اینپوت
  onSearchClick?: () => void; // هندلر برای کلیک روی دکمه سرچ
  inputClassName?: string; // کلاس‌های اختصاصی برای اینپوت
  buttonClassName?: string; // کلاس‌های اختصاصی برای دکمه
  icon?: React.ReactNode; // آیکون قابل تغییر برای دکمه
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...', // مقدار پیش‌فرض placeholder
  value,
  onChange,
  onSearchClick,
  inputClassName = '', // مقدار پیش‌فرض خالی برای کلاس اینپوت
  buttonClassName = '', // مقدار پیش‌فرض خالی برای کلاس دکمه
  icon = <CiSearch className="w-5 h-5" />, // مقدار پیش‌فرض آیکون
}) => {
  return (
    <div className="flex w-full items-center border border-black rounded-lg">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`p-2 bg-black  placeholder-white outline-none  rounded-l-lg ${inputClassName}`} // کلاس‌ها به اینپوت اضافه می‌شوند
      />
      <button
        className={`p-2  hover:text-primary1 transition-all ease-in-out duration-150 rounded-r-lg ${buttonClassName}`} // کلاس‌ها به دکمه اضافه می‌شوند
        onClick={onSearchClick} // فراخوانی تابع کلیک
      >
        {icon} {/* آیکون قابل تغییر */}
      </button>
    </div>
  );
};

export default SearchInput;
