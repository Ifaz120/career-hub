import React from "react";
import { FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

const Mission = () => {
  return (
    <div className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">
                Our Core Purpose
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                We are on a mission to{" "}
                <span className="text-primary">redefine</span> career growth.
              </h3>
            </div>

            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl">
                  <FaRocket></FaRocket>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    Accelerate Growth
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Helping individuals and companies reach their full potential
                    faster than ever with data-driven strategies.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center text-xl">
                  <FaUsers></FaUsers>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    Build Community
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Creating a vibrant network where professionals can connect,
                    collaborate, and share valuable knowledge.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center text-xl">
                  <FaLightbulb></FaLightbulb>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    Inspire Innovation
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Encouraging creative, out-of-the-box solutions to the most
                    challenging hurdles in today's job market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Element */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
