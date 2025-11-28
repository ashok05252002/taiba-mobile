import React from 'react';
import { Heart, BarChart2 } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col w-full bg-white group">
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full bg-gray-50 rounded-lg overflow-hidden mb-3">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover mix-blend-multiply"
        />
        
        {/* Badges */}
        {product.badge && (
          <span className={`absolute top-2 left-2 ${product.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide`}>
            {product.badge}
          </span>
        )}

        {/* Overlay Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="bg-white p-1.5 rounded-full shadow-md hover:text-red-500 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="bg-white p-1.5 rounded-full shadow-md hover:text-blue-500 transition-colors">
            <BarChart2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-sm text-gray-900 font-medium leading-snug line-clamp-2 mb-1 min-h-[2.5em]">
          {product.title}
        </h3>
        
        <div className="flex items-baseline gap-2 mb-3">
            <span className="text-base font-bold text-gray-900">{product.price}</span>
            {product.originalPrice && (
                 <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
            )}
        </div>

        <button className="w-full bg-black text-white py-3 text-[10px] font-bold tracking-widest uppercase rounded-sm mt-auto hover:bg-gray-800 active:bg-gray-900 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
