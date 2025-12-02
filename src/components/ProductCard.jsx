import React from 'react';
import { Heart, BarChart2 } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full bg-gray-50 p-4">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain mix-blend-multiply"
        />
        
        {/* Badges */}
        {product.badge && (
          <span className={`absolute top-2 left-2 ${product.badgeColor === 'bg-red-600' ? 'bg-[#FF4444]' : 'bg-[#4CAF50]'} text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide`}>
            {product.badge}
          </span>
        )}

        {/* Overlay Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="bg-white p-1.5 rounded-full shadow-sm border border-gray-100 text-gray-400 hover:text-red-500 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-3">
        <h3 className="text-xs font-bold text-gray-900 leading-snug line-clamp-2 mb-2 min-h-[2.5em]">
          {product.title}
        </h3>
        
        <div className="flex items-baseline gap-2 mb-3">
            <span className="text-sm font-bold text-[#702C8B]">{product.price}</span>
            {product.originalPrice && (
                 <span className="text-[10px] text-gray-400 line-through">{product.originalPrice}</span>
            )}
        </div>

        <button className="w-full bg-[#0085FF] text-white py-2.5 text-[10px] font-bold tracking-wider uppercase rounded-lg mt-auto hover:bg-blue-600 active:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
