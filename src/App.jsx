import React from 'react';
import Header from './components/Header';
import TopNav from './components/TopNav';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import ProductCard from './components/ProductCard';
import Banners from './components/Banners';
import BottomNav from './components/BottomNav';
import { serviceCategories, healthProducts, topTabs } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans pb-24">
      {/* Sticky Header Container */}
      <div className="sticky top-0 z-50 bg-white">
        <Header />
        <TopNav tabs={topTabs} />
      </div>
      
      <main className="pt-4">
        <Hero />
        <ServiceGrid services={serviceCategories} />
        <Banners />
        
        <div className="px-4 mt-8">
          <div className="flex justify-between items-end mb-5">
            <div>
                <h3 className="text-xl font-serif font-bold text-gray-900">Best Sellers</h3>
                <p className="text-xs text-gray-500 mt-1">Recommended for you</p>
            </div>
            <button className="text-xs font-bold text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
                VIEW ALL
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {healthProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default App;
