
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handleStartShopping = () => {
    console.log("Start Shopping clicked");
    // Placeholder for navigation to shop/products page
  };

  return (
    <section className="bg-gradient-to-r from-shopkhana-black to-gray-900 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-shopkhana-yellow/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-shopkhana-yellow/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      {/* Floating sparkles */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
        <Sparkles className="w-5 h-5 text-shopkhana-yellow/70 animate-bounce" style={{ animationDelay: "0.5s" }} />
      </div>
      <div className="absolute bottom-1/4 right-1/4">
        <Sparkles className="w-4 h-4 text-shopkhana-yellow/50 animate-bounce" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 animate-fade-in-up">
            Thousands of Women Are Already Shopping.{" "}
            <span className="text-shopkhana-yellow">Are You In?</span> 💅
          </h2>
          
          {/* Subtext */}
          <p className="font-inter text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Join the style revolution. Your perfect outfit is just one click away.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={handleStartShopping}
              size="lg"
              className="bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black font-poppins font-bold text-lg px-8 py-4 h-auto rounded-xl shadow-2xl hover:shadow-shopkhana-yellow/25 transition-all duration-300 hover:scale-105 group"
            >
              Start Shopping Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="mt-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <p className="font-inter text-sm text-gray-300">
              ✨ Free shipping on orders over PKR 2,000 • 30-day returns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
