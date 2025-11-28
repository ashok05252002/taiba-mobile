import React from 'react';

const HexagonSection = ({ categories }) => {
  return (
    <div className="px-4 py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-bold text-gray-900">Skin Carnival | Special 5% OFF</h2>
        <button className="text-sm font-semibold text-cyan-600">View All</button>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center">
            {/* Hexagon Shape CSS */}
            <div className="relative w-16 h-16 flex items-center justify-center mb-1">
               <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm text-white fill-current">
                 <path d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z" stroke="#E5E7EB" strokeWidth="2" />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center p-1 text-center">
                 <span className={`text-[9px] font-bold leading-tight ${cat.color}`}>
                   {cat.title}
                 </span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexagonSection;
