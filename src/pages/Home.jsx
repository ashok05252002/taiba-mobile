import React from 'react';
import Header from '../components/Header';
import TopNav from '../components/TopNav';
import Hero from '../components/Hero';
import ServiceGrid from '../components/ServiceGrid';
import BrandSection from '../components/BrandSection';
import ProductCard from '../components/ProductCard';
import Banners from '../components/Banners';
import BottomNav from '../components/BottomNav';
import { serviceCategories, healthProducts, topTabs, brands } from '../data/mockData';
import { MessageCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-24 relative">
      {/* Top Purple Strip */}
      <div className="bg-[#702C8B] h-2 w-full"></div>

      {/* Sticky Header Container */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Header />
        <TopNav tabs={topTabs} />
      </div>
      
      <main className="pt-4">
        <Hero />
        
        {/* Top Categories */}
        <ServiceGrid services={serviceCategories} />
        
        {/* Shop by Brands */}
        <BrandSection brands={brands} />
        
        <Banners />
        
        <div className="px-4 mt-8">
          <div className="flex justify-between items-end mb-5">
            <div>
                <h3 className="text-lg font-bold text-gray-900">Best Sellers</h3>
                <p className="text-xs text-gray-500 mt-1">Recommended for you</p>
            </div>
            <button className="text-xs font-bold text-[#0085FF] hover:text-blue-700 transition-colors">
                VIEW ALL
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            {healthProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <button className="fixed bottom-20 left-4 w-12 h-12 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-40">
        <MessageCircle className="w-6 h-6 text-white" fill="white" />
      </button>

      <BottomNav activeTab="Home" />
    </div>
  );
};

export default Home;
