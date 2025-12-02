import React from 'react';

const Banners = () => {
  return (
    <div className="px-4 mb-8">
       <div className="bg-gradient-to-r from-[#0085FF]/10 to-[#702C8B]/10 rounded-xl p-5 flex items-center justify-between border border-blue-100 shadow-sm">
        <div>
          <span className="text-[10px] font-bold text-white bg-[#0085FF] px-2 py-0.5 rounded-sm tracking-wider uppercase mb-2 inline-block">
            Refill & Save
          </span>
          <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">
            Monthly Medicines
          </h3>
          <p className="text-xs text-gray-600 font-medium">Flat 20% OFF on Subscription</p>
        </div>
        <div className="flex flex-col items-end">
            <span className="text-lg font-bold text-[#702C8B]">20% OFF</span>
            <button className="mt-2 bg-white text-[#0085FF] border border-[#0085FF]/20 px-3 py-1.5 text-[10px] font-bold rounded-lg shadow-sm hover:bg-blue-50 transition-colors uppercase">
                Subscribe
            </button>
        </div>
      </div>
    </div>
  );
};

export default Banners;
