
import { Sparkles, Shirt, Gem, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Cosmetics",
    icon: Sparkles,
    description: "Lipsticks, foundations, eyeshadows & more",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop",
    color: "bg-pink-100",
    items: "200+ products"
  },
  {
    name: "Garments",
    icon: Shirt,
    description: "Trendy outfits, traditional wear & accessories",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
    color: "bg-purple-100",
    items: "150+ products"
  },
  {
    name: "Jewelry",
    icon: Gem,
    description: "Earrings, necklaces, bracelets & rings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
    color: "bg-yellow-100",
    items: "100+ products"
  },
  {
    name: "Beauty",
    icon: Heart,
    description: "Skincare, haircare & wellness essentials",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
    color: "bg-rose-100",
    items: "80+ products"
  }
];

const ShopByCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl lg:text-5xl text-shopkhana-black mb-4">
            Shop by Categories
          </h2>
          <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our curated collection of beauty, fashion, and lifestyle products
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 p-2 rounded-full ${category.color}`}>
                    <category.icon className="h-5 w-5 text-gray-700" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-poppins font-bold text-xl mb-1">
                      {category.name}
                    </h3>
                    <p className="font-inter text-sm text-gray-200 mb-2">
                      {category.description}
                    </p>
                    <p className="font-inter text-xs text-shopkhana-yellow font-medium">
                      {category.items}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-4">
                  <Button 
                    className="w-full bg-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/90 font-semibold"
                    onClick={() => navigate('/shop')}
                  >
                    Explore {category.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Browse by Categories Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate('/shop')}
            className="bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black font-poppins font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Browse by Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories;
