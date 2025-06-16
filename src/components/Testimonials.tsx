
import { Star, Heart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ayesha Khan",
      location: "Karachi",
      review: "Finally found a brand that gets Pakistani women! The jewelry collection is absolutely stunning and prices are so reasonable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      initials: "AK"
    },
    {
      id: 2,
      name: "Zara Ahmed",
      location: "Lahore", 
      review: "Obsessed with my lipstick haul! Delivery was super fast and everything was authentic. ShopKhana has my heart! 💕",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      initials: "ZA"
    },
    {
      id: 3,
      name: "Fatima Malik",
      location: "Islamabad",
      review: "Best online shopping experience ever! Easy returns, gorgeous products, and customer service that actually cares.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      initials: "FM"
    },
    {
      id: 4,
      name: "Sana Tariq",
      location: "Faisalabad",
      review: "From skincare to earrings, everything I ordered exceeded my expectations. Quality is amazing for these prices!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      initials: "ST"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "text-shopkhana-yellow fill-shopkhana-yellow" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-shopkhana-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-shopkhana-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-shopkhana-black mb-4">
            Real Love from 
          </h2>
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Real <span className="bg-shopkhana-yellow text-shopkhana-black px-2 rounded">Women</span>
          </h3>
          <p className="font-inter text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Don't just take our word for it — see what our amazing customers are saying
          </p>
          <div className="flex items-center justify-center gap-2 text-shopkhana-black">
            <Heart className="w-5 h-5 fill-shopkhana-yellow text-shopkhana-yellow" />
            <span className="font-poppins font-semibold text-lg">2,000+ Happy Shoppers and Counting!</span>
            <Heart className="w-5 h-5 fill-shopkhana-yellow text-shopkhana-yellow" />
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-shopkhana-yellow/30 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Review Text */}
                <p className="font-inter text-gray-700 text-sm leading-relaxed mb-6">
                  "{testimonial.review}"
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-shopkhana-yellow/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-shopkhana-yellow text-shopkhana-black font-poppins font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-poppins font-semibold text-shopkhana-black text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="font-inter text-gray-500 text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel Layout */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card className="bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-shopkhana-yellow/30 transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      {/* Review Text */}
                      <p className="font-inter text-gray-700 text-sm leading-relaxed mb-6">
                        "{testimonial.review}"
                      </p>
                      
                      {/* Customer Info */}
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12 border-2 border-shopkhana-yellow/20">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-shopkhana-yellow text-shopkhana-black font-poppins font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-poppins font-semibold text-shopkhana-black text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="font-inter text-gray-500 text-xs">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-shopkhana-yellow/10 to-shopkhana-yellow/20 rounded-2xl p-6 sm:p-8 border border-shopkhana-yellow/20">
            <h4 className="font-poppins font-bold text-xl sm:text-2xl text-shopkhana-black mb-3">
              Love Your ShopKhana Order?
            </h4>
            <p className="font-inter text-gray-600 mb-4">
              Share your glam moments and tag us for a chance to be featured!
            </p>
            <p className="font-poppins font-semibold bg-shopkhana-yellow text-shopkhana-black px-3 py-1 rounded text-lg inline-block">
              @shopkhana_official ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
