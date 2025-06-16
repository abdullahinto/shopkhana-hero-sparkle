import React, { useState } from 'react';
import { Minus, Plus, Trash2, ArrowRight, Lock, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustIndicators from '@/components/TrustIndicators';

const Cart = () => {
  const navigate = useNavigate();
  
  // Mock cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Matte Lipstick',
      variant: 'Ruby Red',
      price: 899,
      quantity: 2,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Gold Chain Necklace',
      variant: '18" Length',
      price: 2499,
      quantity: 1,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Floral Summer Dress',
      variant: 'Size M, Yellow',
      price: 1799,
      quantity: 1,
      image: '/placeholder.svg'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 2000 ? 0 : 200;
  const total = subtotal + shipping;

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container py-8 lg:py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="text-6xl mb-6">🛍️</div>
            <h1 className="font-poppins text-2xl lg:text-3xl font-bold mb-4">
              Your cart is feeling empty 💔
            </h1>
            <p className="text-gray-600 mb-8">
              Don't worry, we have tons of amazing products waiting for you!
            </p>
            <Button 
              onClick={() => navigate('/shop')}
              className="bg-[#FFE75E] hover:bg-[#FFE75E]/90 text-black font-semibold px-8 py-3"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-6 lg:py-8">
          <h1 className="font-poppins text-2xl lg:text-3xl font-bold">Your Cart</h1>
          <p className="text-gray-600 mt-2">Review your glam picks before checkout ✨</p>
        </div>
      </div>

      <div className="container py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border">
              <div className="p-4 lg:p-6 border-b">
                <h2 className="font-poppins text-xl font-semibold">
                  Shopping Cart ({cartItems.length} items)
                </h2>
              </div>
              
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 lg:p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-48 sm:h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1 space-y-2">
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.variant}</p>
                        <p className="font-bold text-lg">Rs. {item.price}</p>
                        
                        {/* Mobile Quantity & Remove */}
                        <div className="sm:hidden flex items-center justify-between pt-2">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus size={16} />
                            </Button>
                            <span className="font-medium text-lg w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus size={16} />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-700 h-8 w-8"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Desktop Quantity & Remove */}
                      <div className="hidden sm:flex flex-col items-end gap-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 size={18} />
                        </Button>
                        
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus size={18} />
                          </Button>
                          <span className="font-medium text-lg w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={18} />
                          </Button>
                        </div>
                        
                        <p className="font-bold text-lg">
                          Rs. {item.price * item.quantity}
                        </p>
                      </div>
                      
                      {/* Mobile Total */}
                      <div className="sm:hidden text-right">
                        <p className="font-bold text-lg">
                          Total: Rs. {item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border p-6 sticky top-6">
              <h3 className="font-poppins text-xl font-semibold mb-6">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `Rs. ${shipping}`}</span>
                </div>
                
                {shipping > 0 && (
                  <p className="text-sm text-green-600">
                    💡 Add Rs. {2000 - subtotal} more for FREE shipping!
                  </p>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>Rs. {total}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => navigate('/checkout')}
                className="w-full mt-6 bg-[#FFE75E] hover:bg-[#FFE75E]/90 text-black font-semibold py-3"
              >
                Proceed to Checkout
                <ArrowRight className="ml-2" size={18} />
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => navigate('/shop')}
                className="w-full mt-3"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 lg:mt-12">
          <TrustIndicators />
        </div>
      </div>

      {/* Mobile Sticky Checkout */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-50">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-gray-600">Total ({cartItems.length} items)</p>
            <p className="font-bold text-lg">Rs. {total}</p>
          </div>
          <Button 
            onClick={() => navigate('/checkout')}
            className="bg-[#FFE75E] hover:bg-[#FFE75E]/90 text-black font-semibold px-6 py-3"
          >
            Checkout
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>

      {/* Mobile bottom spacing */}
      <div className="lg:hidden h-20"></div>
      
      <Footer />
    </div>
  );
};

export default Cart;
