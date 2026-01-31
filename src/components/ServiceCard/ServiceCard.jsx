import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
  const {image,serviceName,description,id} = service;
  return (
    <div className="card bg-base-100 image-full w-96  shadow-xl">
  <figure>
    <img
      src= {service.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><u> {service.serviceName}</u></h2>
    <p>{service.description}</p>
    <p className='text-xl font-bold'>{service.counselorName}</p>
    <div className="card-actions justify-end">
      <Link to={`/service/${service.id}`}><button className="btn btn-primary">Learn More</button></Link>
      
    </div>
  </div>
</div>
  );
};

export default ServiceCard;