
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Lock, CreditCard, Truck, MapPin, Edit3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Pakistan",
    deliveryMethod: "standard",
    paymentMethod: "cod",
    promoCode: ""
  });

  // Sample cart items
  const cartItems = [
    { id: 1, name: "Rose Gold Lipstick Set", price: 2499, quantity: 2, image: "/placeholder.svg" },
    { id: 2, name: "Silk Evening Dress", price: 8999, quantity: 1, image: "/placeholder.svg" }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = formData.deliveryMethod === "express" ? 299 : 149;
  const discount = 0;
  const total = subtotal + shippingCost - discount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to thank you page
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 lg:py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/cart')}
            className="lg:hidden"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="font-poppins font-bold text-2xl lg:text-3xl">Checkout</h1>
            <p className="text-gray-600">Complete your purchase</p>
          </div>
        </div>

        {/* Progress Bar - Desktop */}
        <div className="hidden lg:flex items-center justify-center mb-8">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">1</div>
              <span className="ml-2 text-gray-500">Cart</span>
            </div>
            <div className="w-16 h-0.5 bg-yellow-400"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">2</div>
              <span className="ml-2 font-medium">Checkout</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">3</div>
              <span className="ml-2 text-gray-500">Complete</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mobile Accordion Layout */}
              <div className="lg:hidden">
                <Accordion type="single" collapsible defaultValue="customer-info">
                  <AccordionItem value="customer-info">
                    <AccordionTrigger className="text-lg font-semibold">
                      Customer Information
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input 
                              id="firstName" 
                              value={formData.firstName}
                              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                              required 
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input 
                              id="lastName" 
                              value={formData.lastName}
                              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                              required 
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            required 
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="shipping">
                    <AccordionTrigger className="text-lg font-semibold">
                      Shipping Address
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        <div>
                          <Label htmlFor="street">Street Address</Label>
                          <Input 
                            id="street" 
                            value={formData.street}
                            onChange={(e) => setFormData({...formData, street: e.target.value})}
                            required 
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input 
                              id="city" 
                              value={formData.city}
                              onChange={(e) => setFormData({...formData, city: e.target.value})}
                              required 
                            />
                          </div>
                          <div>
                            <Label htmlFor="state">State/Province</Label>
                            <Input 
                              id="state" 
                              value={formData.state}
                              onChange={(e) => setFormData({...formData, state: e.target.value})}
                              required 
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="postalCode">Postal Code</Label>
                            <Input 
                              id="postalCode" 
                              value={formData.postalCode}
                              onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                              required 
                            />
                          </div>
                          <div>
                            <Label htmlFor="country">Country</Label>
                            <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Pakistan">Pakistan</SelectItem>
                                <SelectItem value="India">India</SelectItem>
                                <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="delivery">
                    <AccordionTrigger className="text-lg font-semibold">
                      Delivery Method
                    </AccordionTrigger>
                    <AccordionContent>
                      <RadioGroup 
                        value={formData.deliveryMethod} 
                        onValueChange={(value) => setFormData({...formData, deliveryMethod: value})}
                        className="pt-4"
                      >
                        <div className="flex items-center space-x-2 p-4 border rounded-lg">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard" className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-medium">Standard Delivery</p>
                                <p className="text-sm text-gray-600">3-5 business days</p>
                              </div>
                              <span className="font-semibold">Rs. 149</span>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border rounded-lg">
                          <RadioGroupItem value="express" id="express" />
                          <Label htmlFor="express" className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-medium">Express Delivery</p>
                                <p className="text-sm text-gray-600">1-2 business days</p>
                              </div>
                              <span className="font-semibold">Rs. 299</span>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="payment">
                    <AccordionTrigger className="text-lg font-semibold">
                      Payment Method
                    </AccordionTrigger>
                    <AccordionContent>
                      <RadioGroup 
                        value={formData.paymentMethod} 
                        onValueChange={(value) => setFormData({...formData, paymentMethod: value})}
                        className="pt-4"
                      >
                        <div className="flex items-center space-x-2 p-4 border rounded-lg">
                          <RadioGroupItem value="cod" id="cod" />
                          <Label htmlFor="cod" className="flex-1 cursor-pointer">Cash on Delivery</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border rounded-lg">
                          <RadioGroupItem value="jazzcash" id="jazzcash" />
                          <Label htmlFor="jazzcash" className="flex-1 cursor-pointer">JazzCash / EasyPaisa</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border rounded-lg">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex-1 cursor-pointer">Debit/Credit Card</Label>
                        </div>
                      </RadioGroup>
                      
                      <div className="mt-4">
                        <Label htmlFor="promoCode">Promo Code (Optional)</Label>
                        <div className="flex gap-2">
                          <Input 
                            id="promoCode" 
                            placeholder="Enter promo code"
                            value={formData.promoCode}
                            onChange={(e) => setFormData({...formData, promoCode: e.target.value})}
                          />
                          <Button type="button" variant="outline">Apply</Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:block space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Customer Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          required 
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required 
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="street">Street Address</Label>
                      <Input 
                        id="street" 
                        value={formData.street}
                        onChange={(e) => setFormData({...formData, street: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city" 
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State/Province</Label>
                        <Input 
                          id="state" 
                          value={formData.state}
                          onChange={(e) => setFormData({...formData, state: e.target.value})}
                          required 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input 
                          id="postalCode" 
                          value={formData.postalCode}
                          onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Pakistan">Pakistan</SelectItem>
                            <SelectItem value="India">India</SelectItem>
                            <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="w-5 h-5" />
                      Delivery Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup 
                      value={formData.deliveryMethod} 
                      onValueChange={(value) => setFormData({...formData, deliveryMethod: value})}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Standard Delivery</p>
                              <p className="text-sm text-gray-600">3-5 business days</p>
                            </div>
                            <span className="font-semibold">Rs. 149</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Express Delivery</p>
                              <p className="text-sm text-gray-600">1-2 business days</p>
                            </div>
                            <span className="font-semibold">Rs. 299</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup 
                      value={formData.paymentMethod} 
                      onValueChange={(value) => setFormData({...formData, paymentMethod: value})}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label htmlFor="cod" className="flex-1 cursor-pointer">Cash on Delivery</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="jazzcash" id="jazzcash" />
                        <Label htmlFor="jazzcash" className="flex-1 cursor-pointer">JazzCash / EasyPaisa</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">Debit/Credit Card</Label>
                      </div>
                    </RadioGroup>
                    
                    <div>
                      <Label htmlFor="promoCode">Promo Code (Optional)</Label>
                      <div className="flex gap-2">
                        <Input 
                          id="promoCode" 
                          placeholder="Enter promo code"
                          value={formData.promoCode}
                          onChange={(e) => setFormData({...formData, promoCode: e.target.value})}
                        />
                        <Button type="button" variant="outline">Apply</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Order Summary
                  <Button variant="ghost" size="sm" onClick={() => navigate('/cart')}>
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Cart
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                      <p className="font-semibold text-sm">Rs. {item.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
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
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>Rs. {total.toLocaleString()}</span>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  onClick={handleSubmit}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 text-lg"
                >
                  Place Order
                </Button>

                {/* Trust Indicators */}
                <div className="pt-4 border-t space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Lock className="w-4 h-4" />
                    <span>Secure checkout powered by Firebase</span>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">COD</Badge>
                    <Badge variant="outline" className="text-xs">JazzCash</Badge>
                    <Badge variant="outline" className="text-xs">Cards</Badge>
                  </div>
                  <p className="text-xs text-gray-500">
                    We'll never share your info. Promise! 🤝
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold">Total: Rs. {total.toLocaleString()}</span>
        </div>
        <Button 
          type="submit" 
          onClick={handleSubmit}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3"
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
