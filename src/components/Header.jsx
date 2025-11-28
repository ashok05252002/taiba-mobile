import React from 'react';
import { Menu, Search, ShoppingBag, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-4">
          <button className="p-1 -ml-1 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-xl font-serif font-bold text-gray-900 tracking-wide">
            Bagisto<span className="text-blue-600">Health</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-6 h-6 text-gray-900" />
          </button>
          <button className="relative p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingBag className="w-6 h-6 text-gray-900" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Location Sub-header */}
      <div className="bg-gray-50 px-4 py-2.5 flex items-center gap-2 border-t border-gray-100">
        <MapPin className="w-3.5 h-3.5 text-blue-600" />
        <span className="text-xs text-gray-600 truncate">
          Delivering to <span className="font-semibold text-gray-900">Kanchipuram 600041</span>
        </span>
        <button className="text-[10px] font-bold text-blue-600 uppercase ml-auto">Change</button>
      </div>
    </div>
  );
};

export default Header;
