import React from 'react';

const CollectionCard = ({ collection }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] w-full">
      <img 
        src={collection.image} 
        alt={collection.title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-end justify-center pb-6">
        <h3 className="text-lg font-medium text-[#1A1A40] italic bg-white/30 backdrop-blur-sm px-4 py-1 rounded-full">
          {collection.title}
        </h3>
      </div>
    </div>
  );
};

export default CollectionCard;
