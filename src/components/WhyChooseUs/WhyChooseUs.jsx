import React from 'react';
import { FaUserCheck, FaClock, FaAward } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        
        <div className="py-16 md:py-24 bg-base-200">
            <div className="w-11/12 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Career Hub?</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    
                    {/* Reason 1 */}
                    <div className="card bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-4xl text-primary mb-5 flex justify-center md:justify-start">
                            <FaUserCheck></FaUserCheck>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-center md:text-left">Expert Counselors</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left">
                            Our team consists of industry veterans with years of experience in global career trends and resume optimization.
                        </p>
                    </div>

                    {/* Reason 2 */}
                    <div className="card bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-4xl text-secondary mb-5 flex justify-center md:justify-start">
                            <FaClock></FaClock>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-center md:text-left">Flexible Timing</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left">
                            Book sessions that fit your busy schedule, including weekends and 24/7 support for premium members.
                        </p>
                    </div>

                    {/* Reason 3 */}
                    <div className="card bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-4xl text-accent mb-5 flex justify-center md:justify-start">
                            <FaAward></FaAward>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-center md:text-left">Proven Results</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left">
                            Over 90% of our clients report landing their dream job or receiving a promotion within 6 months.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;