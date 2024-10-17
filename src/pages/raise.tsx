// pages/raise.tsx
import React from 'react';
import PagesNavbar from '@/components/Navbar/PagesNavbar';
import Footer from '@/components/Footer';
import CustomButton from '@/components/Buttons/CustomButton';
import RaiseHero from '@/components/RaiseHero';
import TextSection from '@/components/TextSection';
import FundingOption from '@/components/FundingOption';

const Raise = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PagesNavbar className='!w-[80%] md:pr-[10px]' />

      {/* Hero Section */}
      <RaiseHero />

      {/* Text Section */}
      <TextSection />

      {/* Funding Options Section */}
      <div className="grid grid-cols-1  gap-6 w-[80%] m-auto mt-10">
        
          <FundingOption 
            title="Equity Crowdfunding"
            description="Raise capital by offering shares in your company to investors. In return, they
            become partial owners and share in your business's success. Ideal for startups looking to grow
            while sharing equity."
          />
          <FundingOption 
            title="Reward Crowdfunding"
            description="Offer products, services, or unique experiences as incentives in exchange for funding.
            This approach works well for businesses looking to pre-sell new products or generate support from 
            backers with no equity involved."
          />
          <FundingOption 
            title="Debt Crowdfunding"
            description="Debt crowdfunding involves raising funds from multiple investors with an agreement
             to repay the amount borrowed over time. This type of crowdfunding is suitable for businesses
              seeking funding without giving up ownership or equity."
          />
        
      </div>
      <div className='w-[50%] m-auto flex flex-col justify-center  mt-7' >
        <h2 className='mb-5 text-[22px] sm:text-5xl text-center font-bold'>Ready to Elevate Your Business?</h2>
        <p className=' text-[14px] text-center  sm:text-[28px] '>Click below to create your company profile and start your funding journey today!</p>

      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center justify-center py-8">
      <CustomButton 
          text="Apply to Raise" 
          onClick={() => alert('Navigating to Raise Application')}
          theme="primary"
          className=" !w-32 md:!w-36  md:text-lg !bg-CTA !text-white rounded-md text-nowrap"
        />
    
      </div>

      <Footer />
    </div>
  );
};

export default Raise;
