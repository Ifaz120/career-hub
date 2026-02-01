import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaStar, FaRegClock, FaUserTie, FaDollarSign } from 'react-icons/fa';

const ServiceDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const service = data.find(items => items.id === parseInt(id));

  const [comments, setComments] = useState([]);
  const [inputFieldValue, setInputFieldValue] = useState("");

  if (!service) return <div className="text-center py-20 text-3xl font-bold">Service Not Found</div>;

  const handleCommentSubmit = () => {
    if (inputFieldValue.trim() === "") return; // check kortese khali kina

    setComments([...comments, inputFieldValue]); // copy rakhtese ager comment er 

    setInputFieldValue(""); // box reset kore dibe
  }

  return (
    <div className="w-11/12 mx-auto mt-6 md:mt-10 mb-20">
      <div className="card lg:card-side bg-base-100 shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Image Section */}
        <figure className="lg:w-1/2">
          <img 
            className='h-full w-full object-cover min-h-[250px] md:min-h-[400px]' 
            src={service.image} 
            alt={service.serviceName} 
          />
        </figure>

        {/* Info Section */}
        <div className="card-body lg:w-1/2 p-5 md:p-8">
          <div className="flex justify-between items-center">
            <span className="badge badge-secondary badge-outline px-3 md:px-4 py-3 font-semibold text-xs md:text-sm">
              {service.category}
            </span>
            <div className="flex items-center gap-1 text-orange-500 font-bold text-base md:text-lg">
              <FaStar></FaStar> <span>{service.rating}</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-4">{service.serviceName}</h2>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-2 text-gray-700 text-base md:text-lg">
               <FaUserTie className="text-primary" /> 
               <span className="font-semibold">Counselor:</span> {service.counselor}
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm md:text-base">
               <FaRegClock className="text-secondary" /> 
               <span className="font-medium">Scheduled:</span> {service.duration}
            </div>
          </div>

          <div className="divider"></div> 

          <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
            {service.detailedDescription}
          </p>

          
          <div className="card-actions flex-col md:flex-row justify-between items-center gap-4 mt-8">
            <div className="flex items-center text-2xl md:text-3xl font-extrabold text-primary">
              <FaDollarSign className="text-lg md:text-xl" />
              <span>{service.pricing}</span>
            </div>
            
            <Link to="/" className="w-full md:w-auto">
              <button className="btn btn-primary w-full md:px-10">Go Back Home</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-10 bg-white p-5 md:p-8 rounded-2xl shadow-lg border">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Leave a Comment</h3>
        
        <div className="flex flex-col md:flex-row gap-3">
          <input 
            type="text" 
            placeholder="Write your feedback here..." 
            className="input input-bordered w-full focus:outline-primary"
            value={inputFieldValue} // input control
            onChange={(e) => setInputFieldValue(e.target.value)} // Updates state on every keystroke
          />
          <button onClick={handleCommentSubmit} className="btn btn-primary px-8">
              Submit
          </button>
        </div>

        {/* ///comments display evabe korbo */}
        <div className="mt-6 space-y-3">
          {
            comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-gray-700 animate-fade-in">
                    {comment}
                </div>
              ))
            ) : (
              <p className="text-gray-400 italic text-sm">No comments yet. Be the first to share your thoughts!</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;