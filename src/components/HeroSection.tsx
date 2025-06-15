
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern/Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-shopkhana-yellow/5 via-transparent to-shopkhana-yellow/10"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 animate-fade-in-up order-2 lg:order-1">
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4 sm:mb-6">
              <Badge variant="outline" className="border-shopkhana-yellow text-shopkhana-yellow font-inter text-xs">
                ✨ Cash on Delivery
              </Badge>
              <Badge variant="outline" className="border-shopkhana-yellow text-shopkhana-yellow font-inter text-xs">
                🚚 Fast Delivery
              </Badge>
              <Badge variant="outline" className="border-shopkhana-yellow text-shopkhana-yellow font-inter text-xs sm:block hidden">
                🔄 7-Day Returns
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="font-poppins font-bold text-white leading-tight">
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl block mb-1 sm:mb-2">
                Tired of overpaying
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl block mb-1 sm:mb-2">
                for <span className="text-shopkhana-yellow">glam</span>?
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl block text-gray-300 font-semibold mb-1">
                ShopKhana brings desi-style
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl block">
                <span className="text-shopkhana-yellow animate-glow">sparkle</span> right to your doorstep.
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-inter text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
              Discover trendsetting fashion, handpicked cosmetics, and must-have jewelry — all delivered fast and stress-free.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4 px-2 lg:px-0">
              <Link to="/shop">
                <Button 
                  size="lg" 
                  className="bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-black font-poppins font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-shopkhana-yellow/25 w-full sm:w-auto"
                >
                  Shop Trending Picks 🛍️
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-shopkhana-yellow text-shopkhana-yellow hover:bg-shopkhana-yellow hover:text-black font-poppins font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto rounded-full transition-all duration-300 hover:scale-105"
              >
                Get 10% OFF First Order 🎉
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 pt-4 sm:pt-6 px-2 lg:px-0">
              <div className="text-center">
                <div className="font-poppins font-bold text-xl sm:text-2xl text-shopkhana-yellow">10K+</div>
                <div className="font-inter text-xs sm:text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
              <div className="text-center">
                <div className="font-poppins font-bold text-xl sm:text-2xl text-shopkhana-yellow">500+</div>
                <div className="font-inter text-xs sm:text-sm text-gray-400">Trending Products</div>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
              <div className="text-center">
                <div className="font-poppins font-bold text-xl sm:text-2xl text-shopkhana-yellow">4.8★</div>
                <div className="font-inter text-xs sm:text-sm text-gray-400">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-shopkhana-yellow/20 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
              
              {/* Hero Image - Premium Product */}
              <Link to="/product/1" className="block relative z-10">
                <div className="relative aspect-square rounded-full overflow-hidden border-2 sm:border-4 border-shopkhana-yellow/30 shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105">
                  <img 
                    src="/lovable-uploads/6b20cb18-35d7-4d2f-900a-559270431bd0.png"
                    alt="Premium product showcase - click to view details"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              {/* Single New Arrivals Badge - Positioned to avoid overlap */}
              <Link 
                to="/shop?category=new-arrivals" 
                className="absolute top-4 right-4 bg-shopkhana-yellow text-black px-3 py-2 rounded-full font-poppins font-semibold text-sm shadow-lg animate-bounce cursor-pointer transition-transform duration-200 hover:scale-110 z-20"
              >
                💄 New Arrivals
              </Link>
            </div>
          </div>
        </div>

        {/* Scrolling Banner */}
        <div className="mt-8 sm:mt-12 lg:mt-16 overflow-hidden">
          <div className="bg-shopkhana-yellow/10 border-y border-shopkhana-yellow/30 py-2 sm:py-3">
            <div className="animate-pulse text-center px-4">
              <p className="font-inter text-shopkhana-yellow font-medium text-xs sm:text-sm">
                🔥 LIMITED TIME: Free shipping on orders above ₹1500 | 💎 New jewelry collection just dropped | 👗 Trending dresses 40% off
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
