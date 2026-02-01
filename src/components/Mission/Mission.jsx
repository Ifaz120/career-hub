import React from 'react';
import { FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const Mission = () => {
    return (
        
        <div className="py-12 md:py-20 bg-white">
            <div className="w-11/12 mx-auto text-center">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Missions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-16 px-2 text-sm md:text-base">
                    We are dedicated to bridging the gap between talent and opportunity with a focus on innovation and community.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    {/* Mission 1 */}
                    
                    <div className="card bg-base-100 shadow-xl p-6 md:p-8 border-t-4 border-primary hover:shadow-2xl transition-shadow duration-300">
                        <div className="text-3xl md:text-4xl text-primary mb-4 flex justify-center"><FaRocket /></div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">Accelerate Growth</h3>
                        <p className="text-gray-500 text-sm md:text-base">Helping individuals and companies reach their full potential faster than ever.</p>
                    </div>

                    {/* Mission 2 */}
                    <div className="card bg-base-100 shadow-xl p-6 md:p-8 border-t-4 border-secondary hover:shadow-2xl transition-shadow duration-300">
                        <div className="text-3xl md:text-4xl text-secondary mb-4 flex justify-center"><FaUsers /></div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">Build Community</h3>
                        <p className="text-gray-500 text-sm md:text-base">Creating a network where professionals can connect and share knowledge.</p>
                    </div>

                    {/* Mission 3 */}
                    <div className="card bg-base-100 shadow-xl p-6 md:p-8 border-t-4 border-accent hover:shadow-2xl transition-shadow duration-300">
                        <div className="text-3xl md:text-4xl text-accent mb-4 flex justify-center"><FaLightbulb /></div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">Inspire Innovation</h3>
                        <p className="text-gray-500 text-sm md:text-base">Encouraging creative solutions to the most challenging career hurdles.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;