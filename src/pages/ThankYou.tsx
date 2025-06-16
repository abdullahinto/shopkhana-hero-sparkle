
import { Check, Package, Truck, Shield, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  // Dummy order data
  const orderData = {
    orderNumber: "SHOP-12345",
    items: [
      {
        id: 1,
        name: "Rose Gold Lipstick Set",
        image: "/placeholder.svg",
        quantity: 2,
        price: 2499
      },
      {
        id: 2,
        name: "Silk Evening Dress",
        image: "/placeholder.svg",
        quantity: 1,
        price: 8999
      },
      {
        id: 3,
        name: "Pearl Drop Earrings",
        image: "/placeholder.svg",
        quantity: 1,
        price: 3499
      }
    ],
    deliveryMethod: "Express Delivery (1-2 days)",
    shippingAddress: "123 Fashion Street, Karachi, Sindh 75000",
    estimatedDelivery: "December 17-18, 2025",
    total: 14997
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Confetti Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12 relative">
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="font-poppins font-bold text-3xl lg:text-5xl text-black mb-4">
            Thank You for Your Order!
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            We're getting your glam picks ready 💄✨
          </p>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg inline-block">
            <p className="font-medium text-black">
              Order #{orderData.orderNumber}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-poppins font-semibold text-xl mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Your Order
                </h2>
                
                <div className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-black">{item.name}</h3>
                        <p className="text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-black">
                          Rs. {item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span>Rs. {orderData.total.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Information */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-poppins font-semibold text-xl mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Delivery Details
                </h2>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Delivery Method</p>
                    <p className="font-medium text-black">{orderData.deliveryMethod}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Shipping Address</p>
                    <p className="font-medium text-black">{orderData.shippingAddress}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Estimated Delivery</p>
                    <p className="font-medium text-black flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {orderData.estimatedDelivery}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-poppins font-semibold text-xl mb-4">
                  What's Next?
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-black">Confirmation Email</p>
                      <p className="text-sm text-gray-600">You'll receive a confirmation email shortly</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-black">Order Processing</p>
                      <p className="text-sm text-gray-600">We'll prepare your order for shipment</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-black">Track Your Order</p>
                      <p className="text-sm text-gray-600">Monitor your delivery anytime from your account</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-lg mb-4">
                  Why Choose ShopKhana?
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Secure Purchase</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Easy Returns</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  We'll never share your info. Promise! 🤝
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="max-w-4xl mx-auto mt-8 lg:mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/shop')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg"
            >
              Continue Shopping
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate('/wishlist')}
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg"
            >
              Track My Order
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <Button 
          onClick={() => navigate('/shop')}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 text-lg"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
