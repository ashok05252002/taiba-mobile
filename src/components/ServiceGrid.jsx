import React from 'react';
import { Pill, Sparkles, Baby, Apple, Thermometer } from 'lucide-react';

const iconMap = {
  Pill,
  Sparkles,
  Baby,
  Apple,
  Thermometer
};

const ServiceGrid = ({ services }) => {
  return (
    <div className="px-4 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900">Top Categories</h3>
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon] || Pill;
          return (
            <div key={service.id} className="flex flex-col items-center gap-3 min-w-[72px]">
              {/* Applied dynamic bgColor and color from data */}
              <div className={`w-16 h-16 rounded-full ${service.bgColor} shadow-sm flex items-center justify-center transition-transform active:scale-95 group`}>
                <IconComponent className={`w-7 h-7 ${service.color}`} strokeWidth={2} />
              </div>
              <span className="text-xs font-medium text-gray-800 text-center leading-tight">
                {service.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceGrid;
