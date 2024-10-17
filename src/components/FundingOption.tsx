import React from 'react';

interface FundingOptionProps {
  title: string;
  description: string;
}

const FundingOption: React.FC<FundingOptionProps> = ({ title, description }) => {
  return (
    <div className="bg-primary1 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-[21px] sm:text-[28px] font-semibold  sm:font-bold text-white mb-3">{title}</h3>
      <p className='text-white text-[14px] sm:text-[23px]'>{description}</p>
    </div>
  );
};

export default FundingOption;
