import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
  
  const { image, serviceName, category, pricing, counselor, rating, id, description } = service || {};

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all border flex flex-col h-full">
      
      <figure className="relative h-40 md:h-48">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 badge badge-secondary text-xs">
          {category}
        </div>
      </figure>

      
      <div className="card-body p-4 md:p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-1 text-orange-500 font-bold text-sm">
            <FaStar></FaStar> {rating}
          </div>
        </div>

        <h2 className="card-title text-base md:text-lg font-bold leading-tight">
          {serviceName}
        </h2>

        {/* line-clamp-2 is great for keeping card heights consistent */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {description}
        </p>

        
        <div className="mt-4 pt-4 border-t flex justify-between items-end mt-auto">
           <div>
             <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Counselor</p>
             <p className="text-sm font-bold text-gray-700">{counselor}</p>
           </div>
           
           <Link to={`/service/${id}`}>
             <button className="btn btn-primary btn-sm px-4">Details</button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;