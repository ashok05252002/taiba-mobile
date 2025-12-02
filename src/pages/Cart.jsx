import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Trash2, 
  Plus, 
  Minus, 
  ChevronDown, 
  ChevronUp, 
  Upload, 
  FileText, 
  X,
  Heart,
  ArrowRight,
  RefreshCw,
  MessageCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cartItems as initialCartItems } from '../data/mockData';

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(initialCartItems);
  const [prescription, setPrescription] = useState(null);
  const [isCouponOpen, setIsCouponOpen] = useState(true);
  const [isPriceDetailsOpen, setIsPriceDetailsOpen] = useState(true);

  const updateQuantity = (id, change) => {
    setItems(prevItems => prevItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPrescription(file);
    }
  };

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const grandTotal = subtotal;

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-32 relative">
      {/* Top Purple Strip */}
      <div className="bg-[#702C8B] h-2 w-full"></div>

      {/* Header */}
      <div className="bg-white sticky top-0 z-50 px-4 py-4 shadow-sm flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-1 -ml-1 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Cart</h1>
      </div>

      <div className="p-4 space-y-4">
        
        {/* Prescription Upload Card (Kept consistent with design) */}
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
           <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#0085FF]" /> Upload Prescription
              </h3>
              {prescription && (
                <button onClick={() => setPrescription(null)} className="text-xs text-red-500 font-medium">Remove</button>
              )}
           </div>
           
           {!prescription ? (
             <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-blue-200 rounded-lg bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <p className="text-xs text-[#0085FF] font-bold">Click to Upload</p>
                    <p className="text-[10px] text-gray-500">Required for some medicines</p>
                </div>
                <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,.pdf" />
             </label>
           ) : (
             <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
                <FileText className="w-8 h-8 text-[#0085FF]" />
                <div className="overflow-hidden">
                    <p className="text-sm font-medium text-gray-900 truncate">{prescription.name}</p>
                    <p className="text-xs text-green-600 font-bold">Uploaded Successfully</p>
                </div>
             </div>
           )}
        </div>

        {/* Cart Items - Bagisto Style */}
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 flex gap-4">
              {/* Left: Image & Quantity */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-gray-50 rounded-md overflow-hidden border border-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                
                {/* Quantity Controls - Circle Outline Style */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#0085FF] hover:text-[#0085FF] transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold text-gray-900">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#0085FF] hover:text-[#0085FF] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Details */}
              <div className="flex-1 pt-1">
                <h3 className="text-sm font-medium text-gray-900 leading-snug mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{item.subtitle || 'General'}</p>
                
                <div className="mb-1">
                  <span className="text-sm text-gray-400 line-through mr-2">₹{item.originalPrice.toFixed(2)}</span>
                  <span className="text-base font-bold text-gray-900">₹{item.price.toFixed(2)}</span>
                </div>
                
                <div className="text-sm font-bold text-[#702C8B]">
                  Subtotal - ₹{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>

            {/* Bottom Actions - Split Border */}
            <div className="flex border-t border-gray-100 divide-x divide-gray-100">
              <button className="flex-1 py-3 flex items-center justify-center gap-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0085FF] transition-colors">
                <Heart className="w-4 h-4" /> Move To Wishlist
              </button>
              <button 
                onClick={() => removeItem(item.id)}
                className="flex-1 py-3 flex items-center justify-center gap-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-red-500 transition-colors"
              >
                <Trash2 className="w-4 h-4" /> Remove Item
              </button>
            </div>
          </div>
        ))}

        {/* Apply Code Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <button 
            onClick={() => setIsCouponOpen(!isCouponOpen)}
            className="w-full p-4 flex items-center justify-between bg-white"
          >
            <span className="text-sm font-medium text-gray-600">Apply Code</span>
            {isCouponOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
          </button>
          
          {isCouponOpen && (
            <div className="p-4 pt-0">
              <div className="flex gap-3">
                <div className="relative flex-1">
                   <span className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-gray-500">Coupon Code</span>
                   <input 
                    type="text" 
                    placeholder="Enter coupon code" 
                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#0085FF] focus:ring-1 focus:ring-[#0085FF]"
                   />
                </div>
                <button className="bg-[#0085FF] text-white px-6 py-2 rounded-md text-xs font-bold tracking-wider uppercase hover:bg-blue-600 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons Stack */}
        <div className="space-y-3">
          <button 
            onClick={() => navigate('/')}
            className="w-full border border-gray-900 text-gray-900 py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 uppercase tracking-wide hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-4 h-4" /> Continue Shopping
          </button>
          
          <button 
            onClick={() => setItems([])}
            className="w-full border border-gray-900 text-gray-900 py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 uppercase tracking-wide hover:bg-gray-50 transition-colors"
          >
            <Trash2 className="w-4 h-4" /> Empty Shopping Cart
          </button>
          
          <button 
            className="w-full border border-gray-900 text-gray-900 py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 uppercase tracking-wide hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4" /> Update Cart
          </button>
        </div>

        {/* Price Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-4">
          <button 
            onClick={() => setIsPriceDetailsOpen(!isPriceDetailsOpen)}
            className="w-full p-4 flex items-center justify-between bg-white"
          >
            <span className="text-sm font-medium text-gray-600">Price Details</span>
            {isPriceDetailsOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
          </button>
          
          {isPriceDetailsOpen && (
            <div className="p-4 pt-0 space-y-3 border-t border-gray-50 mt-2 pt-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Sub Total</span>
                <span className="font-medium text-gray-900">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tax</span>
                <span className="font-medium text-gray-900">₹0.00</span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-100">
                <span>Grand Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Amount to be paid</p>
            <p className="text-xl font-bold text-gray-900">₹{grandTotal.toFixed(2)}</p>
          </div>
          <button className="bg-[#0085FF] text-white px-8 py-3 rounded-lg text-sm font-bold tracking-wider uppercase hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200">
            Proceed
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button className="fixed bottom-24 left-4 w-12 h-12 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-50">
        <MessageCircle className="w-6 h-6 text-white" fill="white" />
      </button>

    </div>
  );
};

export default Cart;
