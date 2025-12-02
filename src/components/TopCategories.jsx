import React from 'react';
import { ArrowRight } from 'lucide-react';

const TopCategories = ({ categories }) => {
  return (
    <div className="px-4 mb-8">
      <div className="flex justify-between items-end mb-4">
        <div>
            <h3 className="text-xl font-serif font-bold text-gray-900">Top Categories</h3>
            <p className="text-xs text-gray-500 mt-1">Curated for your wellness</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <div key={category.id} className={`relative rounded-xl overflow-hidden aspect-[1.6] group cursor-pointer ${category.color}`}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-center items-start">
                <h4 className="text-white font-serif font-bold text-lg leading-tight mb-2">
                    {category.title}
                </h4>
                <span className="text-[10px] font-bold text-white/90 bg-white/20 backdrop-blur-md px-2 py-1 rounded-sm flex items-center gap-1 group-hover:bg-white group-hover:text-black transition-colors">
                    Explore <ArrowRight className="w-2.5 h-2.5" />
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
