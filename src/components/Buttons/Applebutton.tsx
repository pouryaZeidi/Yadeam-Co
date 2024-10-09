import { BiLogoApple } from "react-icons/bi";

const AppleButton: React.FC<{ onClick: () => void; theme: string }> = ({ onClick, theme }) => {
  const buttonClass = theme === 'dark' 
    ? "bg-black border border-white text-white w-full flex items-center justify-center space-x-2 transform hover:scale-105 transition-transform duration-200 py-2 rounded-[40px]"
    : "bg-white border border-black text-black w-full flex items-center justify-center space-x-2 transform hover:scale-105 transition-transform duration-200 py-2 rounded-[40px]";

  return (
    <button onClick={onClick} className={buttonClass}>
      <BiLogoApple className="text-2xl" />
      <span>{'Sign in with Apple'}</span>
    </button>
  );
};

export default AppleButton