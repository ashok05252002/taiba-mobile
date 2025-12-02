import React from 'react';
import { Home, LayoutGrid, ShoppingCart, Package, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: LayoutGrid, label: "Categories", path: "/categories" },
    { icon: ShoppingCart, label: "Cart", path: "/cart" },
    { icon: Package, label: "Orders", path: "/orders" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-6 flex justify-between items-end z-50 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      {navItems.map((item, index) => {
        const isActive = currentPath === item.path;
        return (
          <Link to={item.path} key={index} className="flex flex-col items-center gap-1.5">
            <item.icon 
              className={`w-5 h-5 ${isActive ? 'text-[#0085FF]' : 'text-gray-400'}`} 
              strokeWidth={isActive ? 2.5 : 2}
            />
            <span className={`text-[10px] font-medium tracking-wide ${isActive ? 'text-[#0085FF]' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
