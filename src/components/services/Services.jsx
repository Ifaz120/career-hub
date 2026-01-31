import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const [cards,setCards] = useState([]);
  useEffect(()=>{
    fetch('/service.json')
    .then(res=>res.json())
    .then(data=>setCards(data))
  },[]) //fetching the json file in the useeffect and setting them in the state

  return (
    <div className='w-11/12 flex flex-col mt-10 mx-auto justify-center items-center '>
      <div className='text-center mb-10 flex flex-col gap-y-5'>
      <h2 className='text-4xl font-bold'>
        Services
      </h2>
      <p>Here are the services that we provide from our firm </p>

      </div>

      <div className='grid grid-cols-2  gap-8'>
        {
          cards.map(service=> <ServiceCard service={service} key={service.id}></ServiceCard>)
        }
        
      </div>
    </div>
  );
};

export default Services;