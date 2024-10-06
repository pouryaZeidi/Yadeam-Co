import React, { useState } from 'react';
import InvestmentNavbar from '@/components/Navbar/InvestmentNavbar';
import SearchInput from '@/components/SearchInput';
import { CiSearch } from 'react-icons/ci';
import InvestmentCard from '@/components/InvestmentCard/InvestmentCard';

const InvestmentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    console.log('Search clicked:', searchTerm);
  };

  const handleFilterClick = () => {
    console.log('Filter clicked');
  };

  const cardData = [
    { src: '/yadeam2.jpg', title: 'Project 1', subtitle: 'Category 1', description: 'Description for Project 1', tags: ['Tech', 'Startup'] },
    { src: '/yadeam1.jpg', title: 'Project 2', subtitle: 'Category 2', description: 'Description for Project 2', tags: ['Health', 'Innovation'] },
    { src: '/yadeam2.jpg', title: 'Project 3', subtitle: 'Category 3', description: 'Description for Project 3', tags: ['Energy', 'Sustainability'] },
    { src: '/yadeam1.jpg', title: 'Project 4', subtitle: 'Category 4', description: 'Description for Project 4', tags: ['Finance', 'Growth'] }
  ];

  return (
    <>
      <InvestmentNavbar />
      <div className='w-full h-[70vh] relative'>
        <img 
          src="/stem.jpg" 
          alt="photo1" 
          className='w-full h-full object-cover opacity-70 shadow-navshadow' 
        />
        <div className='absolute w-full h-full top-0 left-0 bg-white opacity-70' /> 

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center'>
          <h1 className='text-4xl font-bold text-black mb-4 text-nowrap sm:text-[90px] lg:text-[110px] lg:mb-9'>Be a Backer</h1>

          <div className='flex flex-col items-center w-full justify-center mt-6'>
            <button 
              className='p-3 mb-2 rounded-lg flex items-center text-black font-medium hover:text-primary1 transition ease-in-out duration-200 sm:hidden' 
              onClick={handleFilterClick}
            >
              <img src="/filter.png" alt="Filter" className='w-9 h-9 mr-1 fill-primary1' />
              Filter
            </button>
            <div className='flex items-center w-full justify-center'>
              <SearchInput 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={handleSearchChange} 
                onSearchClick={handleSearchClick} 
                inputClassName="w-full max-w-[500px] bg-transparent text-black placeholder:text-gray-800" 
                icon={<CiSearch className="w-6 h-6" />} 
              />
              <button 
                className='p-3 ml-2 rounded-lg items-center text-black font-medium hover:text-primary1 transition ease-in-out duration-200 hidden sm:flex' 
                onClick={handleFilterClick}
              >
                <img src="/filter.png" alt="Filter" className='w-9 h-9 mr-1 fill-primary1' />
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className='h-[100vh] bg-center bg-cover' style={{ backgroundImage: "url('/Logo11.jpg')" }}>
        <div className='flex items-center justify-center h-full backdrop-blur-md'>
          <div className='container mx-auto py-8 flex justify-center relative'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px]'>
              {cardData.map((card, index) => (
                <InvestmentCard
                  key={index}
                  src={card.src}
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  tags={card.tags}
                  raisedAmount={0}
                  targetAmount={0}
                  backers={0}
                  type={''}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentDashboard;
