
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern/Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-shopkhana-yellow/5 via-transparent to-shopkhana-yellow/10"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in-up">
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6">
              <Badge variant="outline" className="border-shopkhana-yellow text-shopkhana-yellow font-inter text-xs sm:text-sm">
                ✨ Cash on Delivery
              </Badge>
              <Badge variant="outline" className="border-shopkhana-yellow text-shopkhana-yellow font-inter text-xs sm:text-sm">
                🚚 Fast Delivery
              </Badge>
              <Badge variant="outline" className="border-shopkhana-yellow text-shopkhana-yellow font-inter text-xs sm:text-sm">
                🔄 7-Day Returns
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="font-poppins font-bold text-white leading-tight">
              <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl block mb-2">
                Tired of overpaying
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl block mb-2">
                for <span className="text-shopkhana-yellow">glam</span>?
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl block text-gray-300 font-semibold">
                ShopKhana brings desi-style
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl block">
                <span className="text-shopkhana-yellow animate-glow">sparkle</span> right to your doorstep.
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-inter text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover trendsetting fashion, handpicked cosmetics, and must-have jewelry — all delivered fast and stress-free.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-black font-poppins font-semibold text-base sm:text-lg px-8 py-4 h-auto rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-shopkhana-yellow/25"
              >
                Shop Trending Picks 🛍️
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-shopkhana-yellow text-shopkhana-yellow hover:bg-shopkhana-yellow hover:text-black font-poppins font-semibold text-base sm:text-lg px-8 py-4 h-auto rounded-full transition-all duration-300 hover:scale-105"
              >
                Get 10% OFF First Order 🎉
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="font-poppins font-bold text-2xl sm:text-3xl text-shopkhana-yellow">10K+</div>
                <div className="font-inter text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="font-poppins font-bold text-2xl sm:text-3xl text-shopkhana-yellow">500+</div>
                <div className="font-inter text-sm text-gray-400">Trending Products</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="font-poppins font-bold text-2xl sm:text-3xl text-shopkhana-yellow">4.8★</div>
                <div className="font-inter text-sm text-gray-400">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-shopkhana-yellow/20 to-pink-500/20 rounded-full blur-3xl"></div>
              
              {/* Hero Image Placeholder */}
              <div className="relative z-10 aspect-square rounded-full overflow-hidden border-4 border-shopkhana-yellow/30 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop&crop=face"
                  alt="Confident young woman showcasing ShopKhana's trendy fashion and accessories"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Product Badges */}
              <div className="absolute top-4 right-4 bg-shopkhana-yellow text-black px-3 py-2 rounded-full font-poppins font-semibold text-sm shadow-lg animate-bounce">
                💄 New Arrivals
              </div>
              
              <div className="absolute bottom-8 left-4 bg-black/80 text-shopkhana-yellow px-3 py-2 rounded-full font-poppins font-semibold text-sm shadow-lg border border-shopkhana-yellow/30">
                💍 Trending Now
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Banner */}
        <div className="mt-12 sm:mt-16 overflow-hidden">
          <div className="bg-shopkhana-yellow/10 border-y border-shopkhana-yellow/30 py-3">
            <div className="animate-pulse text-center">
              <p className="font-inter text-shopkhana-yellow font-medium text-sm sm:text-base">
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
