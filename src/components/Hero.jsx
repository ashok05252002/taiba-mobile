import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="px-4 mb-8">
      <div className="relative w-full bg-[#F3F4F6] rounded-2xl overflow-hidden">
        <div className="flex flex-row items-center justify-between">
          {/* Text Content */}
          <div className="p-6 z-10 text-left w-[60%]">
            <span className="inline-block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2 bg-blue-50 px-2 py-1 rounded-sm">
              Wellness
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A40] mb-2 leading-tight">
              Your Health<br/>Is Priority
            </h2>
            <p className="text-xs text-gray-500 font-medium mb-4 line-clamp-2">
              Expert consultation & premium medicines.
            </p>
            <button className="bg-[#1A1A40] text-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-sm flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
              Book Now <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          
          {/* Image */}
          <div className="w-[40%] h-48 relative">
             <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F3F4F6]/50 z-10"></div>
             <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" 
              alt="Medical Professional" 
              className="w-full h-full object-cover object-center"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
