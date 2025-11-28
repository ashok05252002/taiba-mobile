import React from 'react';

const TopNav = ({ tabs }) => {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="flex overflow-x-auto scrollbar-hide px-4 gap-6">
        {tabs.map((tab, index) => (
          <button 
            key={index}
            className={`whitespace-nowrap py-3 text-sm font-medium transition-all relative ${
              index === 0 
                ? 'text-black font-bold' 
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab}
            {index === 0 && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-t-full"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
