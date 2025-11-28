import React from 'react';
import { Home, Calendar, Pill, FileText, User } from 'lucide-react';

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Calendar, label: "Bookings", active: false },
    { icon: Pill, label: "Pharmacy", active: false },
    { icon: FileText, label: "Records", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-6 flex justify-between items-end z-50 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      {navItems.map((item, index) => (
        <button key={index} className="flex flex-col items-center gap-1.5">
          <item.icon 
            className={`w-5 h-5 ${item.active ? 'text-black' : 'text-gray-400'}`} 
            strokeWidth={item.active ? 2.5 : 2}
          />
          <span className={`text-[10px] font-medium tracking-wide ${item.active ? 'text-black' : 'text-gray-400'}`}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
