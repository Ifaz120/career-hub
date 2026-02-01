import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/service.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  return (
    
    <div className='bg-gray-50 py-12 md:py-20'> 
      <div className='w-11/12 mx-auto'>
        
        {/* Modern Section Header */}
        <div className='text-center mb-10 md:mb-16'>
          
          <h2 className='text-3xl md:text-5xl font-extrabold text-gray-900 mb-4'>
            Explore Our <span className="text-primary">Professional Services</span>
          </h2>
          <div className="w-16 md:w-24 h-1 md:h-1.5 bg-primary mx-auto rounded-full mb-6"></div> 
          <p className='text-gray-600 text-sm md:text-lg max-w-xl mx-auto px-2'>
            Unlock your potential with our expert-led career counseling, 
            tailored to help you navigate the modern job market.
          </p>
        </div>

        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
          {
            cards.map(service => (
              <ServiceCard service={service} key={service.id}></ServiceCard>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Services;