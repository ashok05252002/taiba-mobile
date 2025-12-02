import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'HI' : 'EN');
  };

  return (
    <div className="bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <button className="p-1 -ml-1 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="w-6 h-6 text-gray-900" />
          </button>
          <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight">
            Bagisto<span className="text-[#0085FF]">Health</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-bold text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Globe className="w-3 h-3 text-gray-500" />
            {language}
          </button>

          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-6 h-6 text-gray-900" />
          </button>
          <Link to="/cart" className="relative p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingBag className="w-6 h-6 text-gray-900" />
            <span className="absolute top-0 right-0 bg-[#0085FF] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
              2
            </span>
          </Link>
        </div>
      </div>

      {/* Location Sub-header */}
      <div className="bg-gray-50 px-4 py-2.5 flex items-center gap-2 border-t border-gray-100">
        <MapPin className="w-3.5 h-3.5 text-[#0085FF]" />
        <span className="text-xs text-gray-600 truncate">
          Delivering to <span className="font-semibold text-gray-900">Kanchipuram 600041</span>
        </span>
        <button className="text-[10px] font-bold text-[#0085FF] uppercase ml-auto">Change</button>
      </div>
    </div>
  );
};

export default Header;
