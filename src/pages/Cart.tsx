
import { useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustIndicators from "@/components/TrustIndicators";

interface CartItem {
  id: number;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Luxe Rose Gold Necklace Set",
      variant: "Rose Gold",
      price: 4500,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Glamour Statement Earrings",
      variant: "Gold Plated",
      price: 2800,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Elegant Bracelet Collection",
      variant: "Silver",
      price: 3200,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop"
    }
  ]);

  const [discountCode, setDiscountCode] = useState("");

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 2000 ? 0 : 250;
  const total = subtotal + shipping;

  const EmptyCart = () => (
    <div className="text-center py-12 lg:py-16">
      <div className="mb-6">
        <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
        <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-2">
          Your cart is feeling empty 💔
        </h2>
        <p className="text-gray-600 mb-6">
          Time to add some glam to your collection!
        </p>
        <Button 
          className="bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black font-poppins font-semibold px-8 py-3"
          onClick={() => window.location.href = '/shop'}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-6 lg:py-8">
          <EmptyCart />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-6 lg:py-8">
        {/* Cart Header */}
        <div className="mb-6 lg:mb-8">
          <h1 className="font-poppins font-bold text-2xl lg:text-3xl text-shopkhana-black mb-2">
            Your Cart
          </h1>
          <p className="text-gray-600 font-inter">
            Review your glam picks before checkout ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-4 lg:p-6">
                <h2 className="font-poppins font-semibold text-lg mb-4">
                  Cart Items ({cartItems.length})
                </h2>
                
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full sm:w-20 lg:w-24 h-48 sm:h-20 lg:h-24 object-cover rounded-lg"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                            <div>
                              <h3 className="font-poppins font-medium text-base lg:text-lg text-shopkhana-black">
                                {item.name}
                              </h3>
                              <p className="text-sm text-gray-600 font-inter">
                                Variant: {item.variant}
                              </p>
                            </div>
                            
                            <div className="text-right">
                              <p className="font-poppins font-semibold text-lg text-shopkhana-black">
                                Rs. {item.price.toLocaleString()}
                              </p>
                              <p className="text-sm text-gray-600">
                                Total: Rs. {(item.price * item.quantity).toLocaleString()}
                              </p>
                            </div>
                          </div>

                          {/* Quantity Controls & Remove */}
                          <div className="flex justify-between items-center mt-3">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600 font-inter">Qty:</span>
                              <div className="flex items-center border border-gray-300 rounded-lg">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 hover:bg-gray-100"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 hover:bg-gray-100"
                                  onClick={() => updateQuantity(item.id, 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      {index < cartItems.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 lg:p-6 sticky top-4">
              <h3 className="font-poppins font-semibold text-lg mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="font-inter text-gray-600">Subtotal</span>
                  <span className="font-inter font-medium">Rs. {subtotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-inter text-gray-600">Shipping</span>
                  <span className="font-inter font-medium">
                    {shipping === 0 ? 'Free' : `Rs. ${shipping.toLocaleString()}`}
                  </span>
                </div>
                
                {subtotal > 2000 && (
                  <p className="text-xs text-green-600 font-inter">
                    🎉 Free shipping unlocked!
                  </p>
                )}
              </div>

              {/* Discount Code */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discount Code
                </label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline" size="sm">
                    Apply
                  </Button>
                </div>
              </div>

              <Separator className="my-4" />
              
              <div className="flex justify-between mb-6">
                <span className="font-poppins font-semibold text-lg">Total</span>
                <span className="font-poppins font-bold text-xl text-shopkhana-black">
                  Rs. {total.toLocaleString()}
                </span>
              </div>

              <Button 
                className="w-full bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black font-poppins font-semibold py-3 text-lg"
                size="lg"
              >
                Proceed to Checkout
              </Button>

              <p className="text-xs text-gray-500 text-center mt-3 font-inter">
                Secure checkout powered by industry-standard encryption
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 lg:mt-12">
          <TrustIndicators />
        </div>
      </div>

      {/* Sticky Checkout Button for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
        <div className="flex items-center justify-between mb-2">
          <span className="font-poppins font-semibold">Total: Rs. {total.toLocaleString()}</span>
          <span className="text-sm text-gray-600">{cartItems.length} items</span>
        </div>
        <Button 
          className="w-full bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black font-poppins font-semibold py-3"
          size="lg"
        >
          Proceed to Checkout
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
