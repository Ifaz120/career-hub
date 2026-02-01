import React from 'react';
import { FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const Mission = () => {
    return (
        <div className="py-16 bg-white">
            <div className="w-11/12 mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Missions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    We are dedicated to bridging the gap between talent and opportunity with a focus on innovation and community.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Mission 1 */}
                    <div className="card bg-base-100 shadow-xl p-8 border-t-4 border-primary">
                        <div className="text-4xl text-primary mb-4 flex justify-center"><FaRocket /></div>
                        <h3 className="text-xl font-bold mb-2">Accelerate Growth</h3>
                        <p className="text-gray-500">Helping individuals and companies reach their full potential faster than ever.</p>
                    </div>

                    {/* Mission 2 */}
                    <div className="card bg-base-100 shadow-xl p-8 border-t-4 border-secondary">
                        <div className="text-4xl text-secondary mb-4 flex justify-center"><FaUsers /></div>
                        <h3 className="text-xl font-bold mb-2">Build Community</h3>
                        <p className="text-gray-500">Creating a network where professionals can connect and share knowledge.</p>
                    </div>

                    {/* Mission 3 */}
                    <div className="card bg-base-100 shadow-xl p-8 border-t-4 border-accent">
                        <div className="text-4xl text-accent mb-4 flex justify-center"><FaLightbulb /></div>
                        <h3 className="text-xl font-bold mb-2">Inspire Innovation</h3>
                        <p className="text-gray-500">Encouraging creative solutions to the most challenging career hurdles.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;