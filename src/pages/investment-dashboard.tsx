import React, { useState } from 'react';
import PagesNavbar from '@/components/Navbar/PagesNavbar';
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
    {
      src: '/yadeam2.jpg',
      title: 'Project 1',
      subtitle: 'Country 1',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At repudiandae non sunt, fuga inventore odit!',
      tags: ['Tech', 'Startup'],
      raisedAmount: 500,  
      targetAmount: 1000, 
      backers: 10,        
    },
    
    {
      src: '/yadeam1.jpg',
      title: 'Project 2',
      subtitle: 'Country 2',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At repudiandae non sunt, fuga inventore odit!',
      tags: ['Health', 'Innovation'],
      raisedAmount: 300,  
      targetAmount: 800,  
      backers: 5,        
    },
    
    {
      src: '/yadeam2.jpg',
      title: 'Project 3',
      subtitle: 'Country 3',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At repudiandae non sunt, fuga inventore odit!',
      tags: ['Energy', 'Sustainability'],
      raisedAmount: 700,  
      targetAmount: 1500, 
      backers: 15,       
    },
    {
      src: '/yadeam1.jpg',
      title: 'Project 4',
      subtitle: 'Country 4',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At repudiandae non sunt, fuga inventore odit!',
      tags: ['Finance', 'Growth'],
      raisedAmount: 200,  
      targetAmount: 600,  
      backers: 8,        
    },
  ];

  return (
    <>
      <PagesNavbar />
      <div className='w-full h-[70vh] relative'>
        <img 
          src="/stem.jpg" 
          alt="photo1" 
          className='w-full h-full object-cover object-right opacity-70 shadow-navshadow' 
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
      
      <div className='min-h-[100vh] bg-center bg-cover backdrop:blur-md ' style={{ backgroundImage: "url('/Logo11.png')" }}>
        <div className='flex items-center lg:w-[70%] md:w-[85%] sm:w-[95%]  m-auto justify-center h-full backdrop-blur-md'>
          <div className='container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4 sm:px-0'>
            {cardData.map((card, index) => (
              <div 
                key={index} 
                className='w-full max-w-[450px] m-auto p-4 rounded-lg'
              >
                <InvestmentCard
                  src={card.src}
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  tags={card.tags}
                  raisedAmount={card.raisedAmount} 
                  targetAmount={card.targetAmount}  
                  backers={card.backers}           
                  type={''}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentDashboard;
