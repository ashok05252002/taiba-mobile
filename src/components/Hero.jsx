import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="px-4 mb-8">
      <div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <div className="flex flex-row items-center justify-between">
          {/* Text Content */}
          <div className="p-6 z-10 text-left w-[60%]">
            <span className="inline-block text-[10px] font-bold text-[#702C8B] uppercase tracking-wider mb-2 bg-purple-50 px-2 py-1 rounded-sm">
              Fast Delivery
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
              Medicines<br/>at Doorstep
            </h2>
            <p className="text-xs text-gray-500 font-medium mb-4 line-clamp-2">
              Genuine products delivered within 2 hours.
            </p>
            <button className="bg-[#0085FF] text-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-md shadow-blue-100">
              Order Now <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          
          {/* Image */}
          <div className="w-[40%] h-48 relative">
             <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent z-10"></div>
             <img 
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=600" 
              alt="Pharmacy Delivery" 
              className="w-full h-full object-cover object-center"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
