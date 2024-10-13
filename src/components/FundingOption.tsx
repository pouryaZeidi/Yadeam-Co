import React from 'react';

interface FundingOptionProps {
  title: string;
  description: string;
}

const FundingOption: React.FC<FundingOptionProps> = ({ title, description }) => {
  return (
    <div className="bg-primary1 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl sm:text-2xl font-semibold  sm:font-bold text-white mb-3">{title}</h3>
      <p className='text-white'>{description}</p>
    </div>
  );
};

export default FundingOption;
