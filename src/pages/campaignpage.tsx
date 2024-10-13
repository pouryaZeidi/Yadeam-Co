import PagesNavbar from '@/components/Navbar/PagesNavbar';
import React, { useState } from 'react';
import InputField from '@/components/InputField';
import TextArea from '@/components/TextArea';
import UploadField from '@/components/UploadField';
import CustomButton from '@/components/Buttons/CustomButton';  
import Footer from '@/components/Footer';

const CampaignPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    fundraisingType: '',
    fundraisingStage: '',
    companyName: '',
    description: '',
    raiseAmount: '',
    sharePrice: '',
    duration: '',
    businessCategory: '',
    houseRegistrationNumber: '',
    companyLocation: '',
    valuation: '', 
    taxRelief: '',
    raisetype: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    
    if (name === 'description' && value.length > 200) {
      return; 
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <PagesNavbar />
      <div className="container mx-auto p-6 max-w-screen-lg">
        <h1 className="text-2xl font-bold mb-6">Create Your Campaign</h1>
        <form>
          {/* About You Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <InputField 
              label="First Name" 
              placeholder="First Name" 
              value={formData.firstName} 
              name="firstName" 
              onChange={handleInputChange} 
            />
            <InputField 
              label="Middle Name" 
              placeholder="Middle Name" 
              value={formData.middleName} 
              name="middleName" 
              onChange={handleInputChange} 
            />
            <InputField 
              label="Last Name" 
              placeholder="Last Name" 
              value={formData.lastName} 
              name="lastName" 
              onChange={handleInputChange} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <InputField 
              label="Email" 
              placeholder="Your Email" 
              value={formData.email} 
              name="email" 
              onChange={handleInputChange} 
            />
            <InputField 
              label="Raise Type" 
              placeholder="" 
              value={formData.raisetype} 
              name="raisetype" 
              onChange={handleInputChange} 
            />
            <InputField 
              label="Fundraising Stage" 
              placeholder="" 
              value={formData.fundraisingStage} 
              name="fundraisingStage" 
              onChange={handleInputChange} 
            />
          </div>

          {/* Company Info */}
          <InputField 
            label="Company Name" 
            placeholder="Company Name" 
            value={formData.companyName} 
            name="companyName" 
            onChange={handleInputChange} 
          />
          <TextArea 
            label="Description" 
            placeholder="Write something about your company..." 
            value={formData.description} 
            name="description" 
            onChange={handleInputChange} 
          />

          {/* Financial Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <InputField 
              label="Pre-Money Valuation" 
              placeholder="£" 
              name="valuation" 
              onChange={handleInputChange} 
              value={formData.valuation} 
            />
            <InputField 
              label="Raise Amount" 
              placeholder="£" 
              value={formData.raiseAmount} 
              name="raiseAmount" 
              onChange={handleInputChange} 
            />
            <InputField 
              label="Share Price" 
              placeholder="£" 
              value={formData.sharePrice} 
              name="sharePrice" 
              onChange={handleInputChange} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <InputField 
              label="Duration" 
              placeholder="Duration" 
              value={formData.duration} 
              name="duration" 
              onChange={handleInputChange} 
            />
            <InputField 
              label="Business Category" 
              placeholder="Business Category" 
              value={formData.businessCategory} 
              name="businessCategory" 
              onChange={handleInputChange} 
            />
            <InputField 
              label="Tax Relief Scheme" 
              placeholder="Tax Relief" 
              value={formData.taxRelief} 
              name="taxRelief" 
              onChange={handleInputChange} 
            />
          </div>

          {/* Media Upload */}
          <UploadField 
            label="Media Upload (JPG/PNG)" 
            accept="image/png, image/jpeg" 
            preview={true}
          />

          <div className="flex flex-col md:flex-row justify-between gap-6 mb-6 lg:w-[70%]">
            <InputField 
              label="Companies House Registration Number" 
              placeholder="Registration Number" 
              value={formData.houseRegistrationNumber} 
              name="houseRegistrationNumber" 
              onChange={handleInputChange} 
              className='w-full md:min-w-[400px]'
            />
            <InputField 
              label="Company Location" 
              placeholder="Company Location" 
              value={formData.companyLocation} 
              name="companyLocation" 
              onChange={handleInputChange} 
            />
          </div>

          <UploadField 
            label="Pitch Deck (PDF/PPT)" 
            accept="application/pdf,application/vnd.ms-powerpoint"
            preview={false}
          />

          {/* Submit and Preview */}
          <div className="flex justify-center mt-6">
            <CustomButton text="Preview" theme="blue" className="w-[100px] mr-9" />
            <CustomButton type="submit" text="Submit" theme="black" className="w-[100px] !bg-black" />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CampaignPage;
