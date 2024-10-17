import React from 'react';

const TextSection = () => {
  return (
    <div className="w-[80%] m-auto mt-12">
       <p className="text-[17px] sm:text-[19px] md:text-[25px] text-gray-700 mb-6">
       At Yadeam, we provide more than just a platform for raising funds-we offer tailored solutions designed to fuel your startup's growth. Here's why founders trust us to bring their vision to life:        </p>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-bold text-CTA mb-2">Expert Support</h3>
          <p className="text-gray-700">From the initial setup to the final stages of your raise, our team is here to guide you through the process.</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-bold text-CTA mb-2">Global Exposure</h3>
          <p className="text-gray-700">Gain access to a vast network of local and international investors to support your business.</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-bold text-CTA mb-2">Ethical and Transparent</h3>
          <p className="text-gray-700">We prioritize transparency and ethical practices to align with your company’s mission.</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-bold text-CTA mb-2">Data-Driven Success</h3>
          <p className="text-gray-700">We use advanced analytics to help optimize your campaign and reach your goals faster.</p>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
