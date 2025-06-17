
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HotPicks = () => {
  const products = [
    {
      id: 1,
      name: "Glossy Lip Kit",
      price: "₹1,299",
      originalPrice: "₹1,899",
      discount: "32% OFF",
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
      isHot: true
    },
    {
      id: 2,
      name: "Golden Hoop Earrings",
      price: "₹899",
      originalPrice: "₹1,299",
      discount: "31% OFF",
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      isHot: true
    },
    {
      id: 3,
      name: "Floral Summer Dress",
      price: "₹2,199",
      originalPrice: "₹3,499",
      discount: "37% OFF",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
      isHot: false
    },
    {
      id: 4,
      name: "Matte Foundation Set",
      price: "₹1,799",
      originalPrice: "₹2,299",
      discount: "22% OFF",
      rating: 4.6,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
      isHot: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) 
            ? "text-shopkhana-yellow fill-shopkhana-yellow" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-shopkhana-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-shopkhana-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-shopkhana-black mb-4">
            This Week's 
          </h2>
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-shopkhana-yellow transform -rotate-2 rounded-full scale-110 opacity-90 shadow-lg"
                    style={{
                      borderRadius: '45% 55% 62% 38% / 25% 25% 75% 75%',
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
                    }}></span>
              <span className="relative text-shopkhana-black px-4 py-1 font-bold">Hot Picks</span>
            </span> 🔥
          </h3>
          <p className="font-inter text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Trending products that our beauty community is absolutely obsessing over
          </p>
          <div className="flex items-center justify-center gap-2 text-shopkhana-black">
            <Heart className="w-5 h-5 fill-shopkhana-yellow text-shopkhana-yellow" />
            <span className="font-poppins font-semibold text-lg">Loved by 2,000+ Women</span>
            <Heart className="w-5 h-5 fill-shopkhana-yellow text-shopkhana-yellow" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-shopkhana-yellow/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                  />
                  {product.isHot && (
                    <div className="absolute top-2 right-2 bg-shopkhana-yellow text-shopkhana-black px-2 py-1 rounded-full font-poppins font-bold text-xs shadow-md">
                      🔥 Hot
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <h3 className="font-poppins font-semibold text-shopkhana-black text-lg mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-poppins font-bold text-shopkhana-black">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="font-inter text-gray-500 line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.discount && (
                    <span className="font-poppins font-semibold text-shopkhana-yellow">
                      {product.discount}
                    </span>
                  )}
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="font-inter text-gray-500 text-xs ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  <button className="text-gray-500 hover:text-shopkhana-yellow transition-colors duration-200">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black font-poppins font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                  Add to Cart
                  <ShoppingCart className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotPicks;
