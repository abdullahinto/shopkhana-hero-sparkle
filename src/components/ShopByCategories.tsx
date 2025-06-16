
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shirt, Gem, Handbag, ShoppingBag, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "cosmetics",
    name: "Cosmetics",
    subtext: "All that glitters ✨",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop&crop=center",
    badge: "New"
  },
  {
    id: "garments",
    name: "Garments", 
    subtext: "Your style, your story 💫",
    icon: Shirt,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop&crop=center",
    badge: null
  },
  {
    id: "jewelry",
    name: "Jewelry",
    subtext: "Shine bright like you 💎",
    icon: Gem,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop&crop=center",
    badge: "Trending"
  },
  {
    id: "bags-accessories",
    name: "Bags & Accessories",
    subtext: "Complete your look 👜",
    icon: Handbag,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop&crop=center",
    badge: null
  },
  {
    id: "footwear",
    name: "Footwear",
    subtext: "Step into confidence 👠",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop&crop=center",
    badge: null
  },
  {
    id: "under-999",
    name: "Under 999 Deals",
    subtext: "Budget-friendly glam 🔥",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop&crop=center",
    badge: "Hot"
  }
];

const ShopByCategories = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-black mb-4">
            Shop by Categories
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Find what you love — faster.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link 
                key={category.id} 
                to={`/shop?category=${category.id}`}
                className="group block"
              >
                <Card className="relative overflow-hidden border-2 border-gray-100 hover:border-shopkhana-yellow transition-all duration-300 hover:shadow-xl hover:scale-105 h-full">
                  {/* Badge */}
                  {category.badge && (
                    <div className="absolute top-3 right-3 bg-shopkhana-yellow text-black px-2 py-1 rounded-full text-xs font-semibold z-10">
                      {category.badge}
                    </div>
                  )}
                  
                  <CardContent className="p-0 relative">
                    {/* Image with Overlay */}
                    <div className="relative h-32 md:h-40 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-shopkhana-yellow/90 p-3 rounded-full">
                          <IconComponent className="w-6 h-6 text-black" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 text-center">
                      <h3 className="font-poppins font-semibold text-lg md:text-xl text-black mb-2 group-hover:text-shopkhana-yellow transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-inter mb-3">
                        {category.subtext}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-shopkhana-yellow text-black hover:bg-shopkhana-yellow hover:text-black transition-colors duration-300 font-medium"
                      >
                        Browse
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* View All Categories CTA */}
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button 
              size="lg"
              className="bg-shopkhana-yellow text-black hover:bg-shopkhana-yellow/90 font-semibold px-8 py-3 text-lg"
            >
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories;
