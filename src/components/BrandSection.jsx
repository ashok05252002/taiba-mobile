import React from 'react';

const BrandSection = ({ brands }) => {
  return (
    <div className="px-4 mb-8">
      <div className="flex justify-between items-end mb-4">
        <div>
            <h3 className="text-lg font-bold text-gray-900">Shop by Brands</h3>
            <p className="text-xs text-gray-500 mt-1">Trusted partners</p>
        </div>
      </div>
      
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {brands.map((brand) => (
          <div key={brand.id} className="flex flex-col items-center gap-2 min-w-[80px]">
            <div className="w-20 h-20 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2 overflow-hidden group hover:border-[#0085FF] transition-colors">
               <img 
                 src={brand.image} 
                 alt={brand.name}
                 className="w-full h-full object-contain mix-blend-multiply"
               />
            </div>
            <span className="text-xs font-medium text-gray-900">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
