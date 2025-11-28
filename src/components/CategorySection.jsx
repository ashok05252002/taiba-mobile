import React from 'react';

const CategorySection = () => {
  return (
    <div className="py-8 px-4 flex justify-start overflow-x-auto scrollbar-hide">
      {/* Mimicking the 'M' logo from screenshot */}
      <div className="flex flex-col items-center gap-2 min-w-[80px]">
        <div className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
             {/* Creating the Blue M shape using SVG for accuracy */}
             <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 80V20C20 15 25 15 25 20L50 60L75 20C75 15 80 15 80 20V80" stroke="#0000FF" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
        </div>
        <span className="text-sm font-medium text-gray-900">Men</span>
      </div>
      
      {/* Add a few more placeholders to make it look like a list */}
       <div className="flex flex-col items-center gap-2 min-w-[80px] ml-6 opacity-50">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
             <span className="text-gray-400 text-xs">Women</span>
        </div>
        <span className="text-sm font-medium text-gray-500">Women</span>
      </div>
    </div>
  );
};

export default CategorySection;
