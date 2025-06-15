
import { Truck, DollarSign, ShieldCheck, Users, RotateCw } from "lucide-react";

const WhyShopKhana = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Fast 2-3 Day Delivery",
      subtitle: "Nationwide coverage",
      description: "Get your glam delivered quickly across Pakistan with our reliable shipping network."
    },
    {
      icon: DollarSign,
      title: "Affordable Glam",
      subtitle: "For every budget",
      description: "Premium quality cosmetics, jewelry & fashion that won't break the bank."
    },
    {
      icon: ShieldCheck,
      title: "100% Authentic Products",
      subtitle: "No fakes, ever",
      description: "Every product is verified authentic. Shop with confidence, every time."
    },
    {
      icon: Users,
      title: "Trusted by 2,000+",
      subtitle: "Stylish women",
      description: "Join thousands of satisfied customers who've made ShopKhana their go-to."
    },
    {
      icon: RotateCw,
      title: "Easy Returns",
      subtitle: "No questions asked",
      description: "Changed your mind? Return items hassle-free within 7 days."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-shopkhana-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-shopkhana-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-shopkhana-black mb-4">
            Why Thousands of Women
          </h2>
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Love <span className="text-shopkhana-yellow">ShopKhana</span>
          </h3>
          <p className="font-inter text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference that makes us Pakistan's most trusted beauty & fashion destination
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-shopkhana-yellow/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-shopkhana-yellow to-shopkhana-yellow/80 rounded-full flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-shopkhana-black" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className="font-poppins font-bold text-lg sm:text-xl text-shopkhana-black mb-2">
                    {benefit.title}
                  </h4>
                  <p className="font-poppins font-semibold text-sm sm:text-base text-shopkhana-yellow mb-3">
                    {benefit.subtitle}
                  </p>
                  <p className="font-inter text-sm sm:text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="font-inter text-lg sm:text-xl text-gray-700 mb-6">
            Ready to experience the <span className="font-poppins font-semibold text-shopkhana-yellow">ShopKhana difference</span>?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black font-poppins font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-shopkhana-yellow/25">
              Start Shopping Now ✨
            </button>
            <button className="border-2 border-shopkhana-yellow text-shopkhana-yellow hover:bg-shopkhana-yellow hover:text-shopkhana-black font-poppins font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
              Join 2,000+ Happy Customers 💖
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShopKhana;
