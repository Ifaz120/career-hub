import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const data = useLoaderData();
  const {id} = useParams();
  const service = data.find(items=>items.id === parseInt(id));
  return (
    <div className="w-11/12 mx-auto mt-10">
    <div className="card bg-base-100 shadow-xl">
      <figure><img className='h-[400px] rounded-xl mt-10' src={service.image} alt={service.serviceName} /></figure>
      <div className="card-body">
        <div className="badge badge-secondary">{service.category}</div>
        <h2 className="card-title text-3xl">{service.serviceName}</h2>
        <p className='font-bold text-xl'>Counselor: {service.counselorName}</p>
        <p className="text-gray-600">{service.description}</p>
        <p className="font-semibold text-lg">{service.detailedDescription}</p>
        <p className="font-bold text-xl mt-4">Price: ${service.price}</p>
        <Link to={`/`}>
          <button class="btn btn-outline w-1/6 btn-primary">Go back</button>
        
        </Link>
        {/* You can add a feedback/comment section here later! */}
      </div>
    </div>
  </div>
  );
};

export default ServiceDetails;