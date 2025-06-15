
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lock, CreditCard, Smartphone, Truck, ShoppingBag, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState('customer-info');
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [promoCode, setPromoCode] = useState('');

  // Mock cart items
  const cartItems = [
    { id: 1, name: 'Matte Lipstick - Ruby Red', price: 899, quantity: 2, image: '/placeholder.svg' },
    { id: 2, name: 'Gold Chain Necklace', price: 2499, quantity: 1, image: '/placeholder.svg' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = deliveryMethod === 'express' ? 300 : 150;
  const discount = promoCode === 'SAVE10' ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + shippingCost - discount;

  const handleSectionToggle = (section: string) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully! 🎉');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-poppins text-2xl font-bold">Checkout</h1>
            <button 
              onClick={() => navigate('/cart')}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-black"
            >
              <Edit size={16} />
              Edit Cart
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FFE75E] rounded-full flex items-center justify-center text-black font-medium text-sm">✓</div>
              <span className="text-sm font-medium">Cart</span>
            </div>
            <div className="w-8 h-0.5 bg-[#FFE75E]"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FFE75E] rounded-full flex items-center justify-center text-black font-medium text-sm">2</div>
              <span className="text-sm font-medium">Checkout</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium text-sm">3</div>
              <span className="text-sm text-gray-500">Complete</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Customer Information */}
            <Collapsible 
              open={expandedSection === 'customer-info'} 
              onOpenChange={() => handleSectionToggle('customer-info')}
            >
              <div className="bg-white rounded-lg border">
                <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-gray-50">
                  <h2 className="font-poppins text-xl font-semibold">Customer Information</h2>
                  {expandedSection === 'customer-info' ? <ChevronUp /> : <ChevronDown />}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+92 300 1234567" />
                    </div>
                    
                    <h3 className="font-poppins text-lg font-medium mt-6 mb-4">Shipping Address</h3>
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="House no, street, area" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Karachi" />
                      </div>
                      <div>
                        <Label htmlFor="state">State/Province</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sindh">Sindh</SelectItem>
                            <SelectItem value="punjab">Punjab</SelectItem>
                            <SelectItem value="kpk">KPK</SelectItem>
                            <SelectItem value="balochistan">Balochistan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="postal">Postal Code</Label>
                        <Input id="postal" placeholder="75300" />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Select defaultValue="pakistan">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pakistan">Pakistan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Delivery Method */}
            <Collapsible 
              open={expandedSection === 'delivery'} 
              onOpenChange={() => handleSectionToggle('delivery')}
            >
              <div className="bg-white rounded-lg border">
                <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-gray-50">
                  <h2 className="font-poppins text-xl font-semibold">Delivery Method</h2>
                  {expandedSection === 'delivery' ? <ChevronUp /> : <ChevronDown />}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6">
                    <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-[#FFE75E] cursor-pointer">
                          <RadioGroupItem value="standard" id="standard" />
                          <div className="flex-1">
                            <Label htmlFor="standard" className="cursor-pointer">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Truck className="text-gray-600" size={20} />
                                  <div>
                                    <p className="font-medium">Standard Delivery</p>
                                    <p className="text-sm text-gray-600">3-5 business days</p>
                                  </div>
                                </div>
                                <span className="font-medium">Rs. 150</span>
                              </div>
                            </Label>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-[#FFE75E] cursor-pointer">
                          <RadioGroupItem value="express" id="express" />
                          <div className="flex-1">
                            <Label htmlFor="express" className="cursor-pointer">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Truck className="text-gray-600" size={20} />
                                  <div>
                                    <p className="font-medium">Express Delivery</p>
                                    <p className="text-sm text-gray-600">1-2 business days</p>
                                  </div>
                                </div>
                                <span className="font-medium">Rs. 300</span>
                              </div>
                            </Label>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Payment Method */}
            <Collapsible 
              open={expandedSection === 'payment'} 
              onOpenChange={() => handleSectionToggle('payment')}
            >
              <div className="bg-white rounded-lg border">
                <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-gray-50">
                  <h2 className="font-poppins text-xl font-semibold">Payment Method</h2>
                  {expandedSection === 'payment' ? <ChevronUp /> : <ChevronDown />}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-[#FFE75E] cursor-pointer">
                          <RadioGroupItem value="cod" id="cod" />
                          <div className="flex-1">
                            <Label htmlFor="cod" className="cursor-pointer">
                              <div className="flex items-center gap-3">
                                <ShoppingBag className="text-gray-600" size={20} />
                                <div>
                                  <p className="font-medium">Cash on Delivery</p>
                                  <p className="text-sm text-gray-600">Pay when you receive your order</p>
                                </div>
                              </div>
                            </Label>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-[#FFE75E] cursor-pointer">
                          <RadioGroupItem value="jazzcash" id="jazzcash" />
                          <div className="flex-1">
                            <Label htmlFor="jazzcash" className="cursor-pointer">
                              <div className="flex items-center gap-3">
                                <Smartphone className="text-gray-600" size={20} />
                                <div>
                                  <p className="font-medium">JazzCash / EasyPaisa</p>
                                  <p className="text-sm text-gray-600">Mobile wallet payment</p>
                                </div>
                              </div>
                            </Label>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-[#FFE75E] cursor-pointer">
                          <RadioGroupItem value="card" id="card" />
                          <div className="flex-1">
                            <Label htmlFor="card" className="cursor-pointer">
                              <div className="flex items-center gap-3">
                                <CreditCard className="text-gray-600" size={20} />
                                <div>
                                  <p className="font-medium">Debit / Credit Card</p>
                                  <p className="text-sm text-gray-600">Visa, Mastercard accepted</p>
                                </div>
                              </div>
                            </Label>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                    
                    {/* Promo Code */}
                    <div className="mt-6 pt-6 border-t">
                      <Label htmlFor="promo">Promo Code (Optional)</Label>
                      <div className="flex gap-2 mt-2">
                        <Input 
                          id="promo" 
                          placeholder="Enter promo code" 
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <Button variant="outline">Apply</Button>
                      </div>
                      {promoCode === 'SAVE10' && (
                        <p className="text-sm text-green-600 mt-2">✓ 10% discount applied!</p>
                      )}
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border p-6 sticky top-24">
              <h3 className="font-poppins text-xl font-semibold mb-4">Order Summary</h3>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="font-medium">Rs. {item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Summary */}
              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Rs. {shippingCost}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-Rs. {discount}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg border-t pt-3">
                  <span>Total</span>
                  <span>Rs. {total}</span>
                </div>
              </div>
              
              {/* Trust Elements */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Lock size={16} className="text-green-600" />
                  <span className="text-sm font-medium">Secure checkout</span>
                </div>
                <p className="text-xs text-gray-600">We'll never share your info. Promise! 🔒</p>
                
                <div className="flex items-center gap-4 mt-3">
                  <div className="text-xs">💳 Visa</div>
                  <div className="text-xs">📱 JazzCash</div>
                  <div className="text-xs">💰 EasyPaisa</div>
                </div>
              </div>
              
              {/* Desktop Place Order Button */}
              <Button 
                onClick={handlePlaceOrder}
                className="w-full mt-6 bg-[#FFE75E] hover:bg-[#FFE75E]/90 text-black font-semibold py-3 hidden lg:flex"
              >
                Place Order - Rs. {total}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-50">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium">Total</span>
          <span className="font-bold text-lg">Rs. {total}</span>
        </div>
        <Button 
          onClick={handlePlaceOrder}
          className="w-full bg-[#FFE75E] hover:bg-[#FFE75E]/90 text-black font-semibold py-3"
        >
          Place Order
        </Button>
      </div>

      {/* Mobile bottom spacing */}
      <div className="lg:hidden h-24"></div>
    </div>
  );
};

export default Checkout;
