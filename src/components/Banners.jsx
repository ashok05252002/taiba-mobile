import React from 'react';

const Banners = () => {
  return (
    <div className="px-4 mb-8">
       <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 flex items-center justify-between border border-blue-100 shadow-sm">
        <div>
          <span className="text-[10px] font-bold text-white bg-blue-600 px-2 py-0.5 rounded-sm tracking-wider uppercase mb-2 inline-block">
            Limited Offer
          </span>
          <h3 className="text-lg font-serif font-bold text-gray-900 leading-tight mb-1">
            Full Body Checkup
          </h3>
          <p className="text-xs text-gray-600 font-medium">Includes 65+ Tests • Home Collection</p>
        </div>
        <div className="flex flex-col items-end">
            <span className="text-lg font-bold text-blue-600">-65%</span>
            <button className="mt-2 bg-white text-blue-600 border border-blue-200 px-3 py-1.5 text-[10px] font-bold rounded shadow-sm hover:bg-blue-50 transition-colors uppercase">
                Book Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default Banners;
