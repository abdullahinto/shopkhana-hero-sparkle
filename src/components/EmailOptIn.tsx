
import { useState } from "react";
import { Mail, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const EmailOptIn = () => {
  const [email, setEmail] = useState("");
  const [earlyAccess, setEarlyAccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email signup:", { email, earlyAccess });
    // Placeholder for actual email handling
    alert("Thank you for signing up! Check your email for your discount code.");
    setEmail("");
    setEarlyAccess(false);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-shopkhana-yellow/5 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-shopkhana-yellow/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-shopkhana-yellow/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      {/* Floating Sparkles */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
        <Sparkles className="w-6 h-6 text-shopkhana-yellow animate-bounce" style={{ animationDelay: "0.5s" }} />
      </div>
      <div className="absolute top-1/3 right-1/4">
        <Sparkles className="w-4 h-4 text-shopkhana-yellow/70 animate-bounce" style={{ animationDelay: "1.5s" }} />
      </div>
      <div className="absolute bottom-1/3 left-1/4">
        <Sparkles className="w-5 h-5 text-shopkhana-yellow/50 animate-bounce" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-shopkhana-yellow/20 p-8 sm:p-10 lg:p-12 text-center animate-fade-in-up">
            {/* Gift Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-shopkhana-yellow rounded-full flex items-center justify-center shadow-lg animate-glow">
                <Gift className="w-8 h-8 text-shopkhana-black" />
              </div>
            </div>

            {/* Headlines */}
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-shopkhana-black mb-4">
              Unlock <span className="text-shopkhana-yellow">10% OFF</span> Your First Order 🎁
            </h2>
            
            <p className="font-inter text-lg sm:text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
              Be the first to know about drops, sales & secret discounts.
            </p>
            
            <p className="font-poppins font-semibold text-shopkhana-black mb-8">
              Join <span className="text-shopkhana-yellow">2,000+ Stylish Women</span> & Get Exclusive Offers
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 h-12 text-base border-2 border-gray-200 focus:border-shopkhana-yellow focus:ring-shopkhana-yellow rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black font-poppins font-bold h-12 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  Get My Discount
                </Button>
              </div>
            </form>

            {/* Checkbox for Early Access */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Checkbox
                id="earlyAccess"
                checked={earlyAccess}
                onCheckedChange={setEarlyAccess}
                className="border-2 border-shopkhana-yellow data-[state=checked]:bg-shopkhana-yellow data-[state=checked]:border-shopkhana-yellow"
              />
              <label
                htmlFor="earlyAccess"
                className="font-inter text-sm text-gray-600 cursor-pointer"
              >
                I want exclusive early access to new drops
              </label>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-sm text-gray-500">
              <div className="flex items-center justify-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="w-2 h-2 bg-shopkhana-yellow rounded-full"></div>
                <span>Instant discount</span>
              </div>
              <div className="flex items-center justify-center gap-1 col-span-2 sm:col-span-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="font-inter text-gray-600">
              💌 Already loved your ShopKhana order? Tag us 
              <span className="font-poppins font-semibold text-shopkhana-black"> @shopkhana_official</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailOptIn;
