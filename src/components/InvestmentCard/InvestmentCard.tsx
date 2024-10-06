import React from 'react';
import RaiseBox from './RaiseBox';

interface InvestmentCardProps {
  src: string;
  title: string;
  subtitle: string;
  description: string;
  raisedAmount: number;
  targetAmount: number;
  backers: number;
  type: string;
  tags?: string[]; 
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({
  src,
  title,
  subtitle,
  description,
  raisedAmount,
  targetAmount,
  backers,
  type,
  tags, 
}) => {
  return (
    <div className="w-full max-w-[400px] border border-black rounded-lg p-4 shadow-navshadow bg-white backdrop-blur-[40px] bg-opacity-70"> {/* کاهش اپاسیتی به 80% */}
      <img src={src} alt="Card Image" className="w-full h-48 object-cover rounded-lg mb-4" />

      <div className="flex items-center mb-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="ml-2 text-gray-600">{subtitle}</span>
      </div>

      <div className="text-wrap mb-4">{description}</div>    
      
      
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* RaiseBox */}
      <RaiseBox raisedAmount={raisedAmount} targetAmount={targetAmount} backers={backers} type={type} />
    </div>
  );
};

export default InvestmentCard;
