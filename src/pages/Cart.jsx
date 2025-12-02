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
  CheckSquare,
  Square,
  MessageCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cartItems as initialCartItems } from '../data/mockData';

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(initialCartItems);
  const [prescription, setPrescription] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  // Toggle Selection
  const toggleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map(item => item.id));
    }
  };

  const toggleItemSelection = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

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
    setSelectedItems(selectedItems.filter(itemId => itemId !== id));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPrescription(file);
    }
  };

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const grandTotal = subtotal; // Add tax/shipping logic if needed

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-24 relative">
      {/* Top Purple Strip (from screenshot header) */}
      <div className="bg-[#702C8B] h-2 w-full"></div>

      {/* Header */}
      <div className="bg-white sticky top-0 z-50 px-4 py-4 shadow-sm flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-1 -ml-1 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Your shopping cart</h1>
      </div>

      <div className="p-4 space-y-6">
        
        {/* Prescription Upload Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Upload className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Prescription Upload</h3>
                <p className="text-xs text-gray-500">Required for restricted items</p>
              </div>
            </div>
            
            <label className="bg-[#0085FF] text-white px-4 py-2 rounded-md text-xs font-bold cursor-pointer hover:bg-blue-600 transition-colors whitespace-nowrap">
              Upload Now
              <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,.pdf" />
            </label>
          </div>
          
          {prescription && (
            <div className="mt-3 flex items-center justify-between bg-blue-50 border border-blue-100 rounded-md p-2">
              <div className="flex items-center gap-2 overflow-hidden">
                <FileText className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-xs font-medium text-gray-900 truncate">{prescription.name}</span>
              </div>
              <button onClick={() => setPrescription(null)} className="p-1 hover:bg-blue-100 rounded-full text-gray-500">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Items Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Select All Header */}
          <div className="p-4 border-b border-gray-100 flex items-center gap-3">
            <button onClick={toggleSelectAll} className="text-gray-400 hover:text-gray-600">
              {selectedItems.length === items.length && items.length > 0 ? (
                <CheckSquare className="w-5 h-5 text-[#0085FF]" />
              ) : (
                <Square className="w-5 h-5" />
              )}
            </button>
            <span className="text-sm font-medium text-gray-700">
              {selectedItems.length} Items Selected
            </span>
          </div>

          {/* Items List */}
          <div className="divide-y divide-gray-100">
            {items.map((item) => (
              <div key={item.id} className="p-4 flex gap-3">
                {/* Checkbox */}
                <button 
                  onClick={() => toggleItemSelection(item.id)} 
                  className="self-center text-gray-400 hover:text-gray-600 flex-shrink-0"
                >
                  {selectedItems.includes(item.id) ? (
                    <CheckSquare className="w-5 h-5 text-[#0085FF]" />
                  ) : (
                    <Square className="w-5 h-5" />
                  )}
                </button>

                {/* Image */}
                <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 truncate">{item.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">Category</p>
                  </div>

                  <div className="flex items-end justify-between">
                    {/* Quantity Pill - Blue */}
                    <div className="flex items-center bg-[#0085FF] rounded-full px-1 py-0.5 h-7">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-full flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-white px-2 min-w-[1.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-full flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-bold text-[#702C8B]">₹{(item.price * item.quantity).toFixed(2)}</div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-[#0085FF] hover:underline mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button 
            onClick={() => navigate('/')}
            className="flex-1 bg-[#0085FF] text-white py-3 rounded-lg text-xs font-bold hover:bg-blue-600 transition-colors shadow-sm"
          >
            Continue Shopping
          </button>
          <button 
            className="flex-1 bg-[#702C8B] text-white py-3 rounded-lg text-xs font-bold hover:bg-purple-800 transition-colors shadow-sm"
          >
            Update Cart
          </button>
        </div>

        {/* Cart Summary Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Cart Summary</h2>
          
          {/* Estimate Shipping Dropdown */}
          <button 
            onClick={() => setIsShippingOpen(!isShippingOpen)}
            className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2.5 mb-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="text-xs font-bold text-gray-700">Estimate Shipping and Tax</span>
            {isShippingOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
          </button>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Coupon Discount</span>
              <button className="text-[#0085FF] text-xs font-medium hover:underline">Apply Coupon</button>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Delivery Charges</span>
              <span className="font-medium text-gray-900">₹0.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Tax</span>
              <span className="font-medium text-gray-900">₹0.00</span>
            </div>
            <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
              <span className="text-base font-bold text-gray-900">Grand Total</span>
              <span className="text-base font-bold text-gray-900">₹{grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-[#4CAF50] text-white py-3.5 rounded-lg text-sm font-bold hover:bg-green-600 transition-colors shadow-sm">
            Proceed To Checkout
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button className="fixed bottom-6 left-4 w-12 h-12 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-50">
        <MessageCircle className="w-6 h-6 text-white" fill="white" />
      </button>

    </div>
  );
};

export default Cart;
