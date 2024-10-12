// components/SearchInput.tsx
import React from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchInputProps {
  placeholder?: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onSearchClick?: () => void; 
  inputClassName?: string; 
  buttonClassName?: string; 
  icon?: React.ReactNode; 
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...', 
  value,
  onChange,
  onSearchClick,
  inputClassName = '', 
  buttonClassName = '', 
  icon = <CiSearch className="w-5 h-5" />, 
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
        onClick={onSearchClick} 
      >
        {icon} 
      </button>
    </div>
  );
};

export default SearchInput;
