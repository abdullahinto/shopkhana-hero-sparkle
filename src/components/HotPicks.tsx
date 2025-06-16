
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HotPicks = () => {
  const products = [
    {
      id: 1,
      name: "Matte Liquid Lipstick Set",
      price: "Rs. 1,299",
      originalPrice: "Rs. 1,599",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 124,
      badge: "Bestseller",
      badgeColor: "bg-shopkhana-yellow text-shopkhana-black"
    },
    {
      id: 2,
      name: "Gold Statement Earrings",
      price: "Rs. 899",
      originalPrice: "Rs. 1,199",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center",
      rating: 4.9,
      reviews: 89,
      badge: "New",
      badgeColor: "bg-black text-white"
    },
    {
      id: 3,
      name: "Glow Serum Foundation",
      price: "Rs. 2,199",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 156,
      badge: "Trending",
      badgeColor: "bg-shopkhana-yellow text-shopkhana-black"
    },
    {
      id: 4,
      name: "Rose Gold Ring Set",
      price: "Rs. 1,599",
      originalPrice: "Rs. 1,999",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 78,
      badge: "Limited",
      badgeColor: "bg-red-500 text-white"
    },
    {
      id: 5,
      name: "Contour & Highlight Kit",
      price: "Rs. 1,799",
      originalPrice: "Rs. 2,299",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 203,
      badge: "Bestseller",
      badgeColor: "bg-shopkhana-yellow text-shopkhana-black"
    },
    {
      id: 6,
      name: "Crystal Hair Clips Set",
      price: "Rs. 699",
      originalPrice: "Rs. 899",
      image: "https://images.unsplash.com/photo-1594736797933-d0ac1f08c15e?w=400&h=400&fit=crop&crop=center",
      rating: 4.5,
      reviews: 67,
      badge: "New",
      badgeColor: "bg-black text-white"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${
          index < Math.floor(rating)
            ? "text-shopkhana-yellow fill-shopkhana-yellow"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add wishlist logic here
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic here
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-shopkhana-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-shopkhana-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-shopkhana-black mb-4">
            This Week's 
          </h2>
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            <span className="text-shopkhana-yellow">Hot Picks</span> 🔥
          </h3>
          <p className="font-inter text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Trending products that our beauty community is absolutely obsessing over
          </p>
          <div className="flex items-center justify-center gap-2 text-shopkhana-yellow">
            <Heart className="w-5 h-5 fill-shopkhana-yellow" />
            <span className="font-poppins font-semibold text-lg">Loved by 2,000+ Women</span>
            <Heart className="w-5 h-5 fill-shopkhana-yellow" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {products.map((product, index) => (
            <Link key={product.id} to={`/product/${product.id}`} className="block">
              <Card 
                className="group bg-white border-gray-200 hover:border-shopkhana-yellow/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Badge */}
                    <Badge 
                      className={`absolute top-3 left-3 ${product.badgeColor} font-poppins font-semibold text-xs px-2 py-1`}
                    >
                      {product.badge}
                    </Badge>
                    {/* Heart Icon */}
                    <button 
                      onClick={handleWishlistClick}
                      className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                    >
                      <Heart className="w-4 h-4 text-gray-600 group-hover:text-shopkhana-yellow group-hover:fill-shopkhana-yellow transition-colors" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-5">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-0.5">
                        {renderStars(product.rating)}
                      </div>
                      <span className="font-inter text-xs text-gray-500">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Product Name */}
                    <h4 className="font-poppins font-semibold text-shopkhana-black text-sm sm:text-base mb-3 line-clamp-2 leading-tight">
                      {product.name}
                    </h4>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-poppins font-bold text-shopkhana-black text-lg">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="font-inter text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <Button 
                      onClick={handleAddToCartClick}
                      className="w-full bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black font-poppins font-semibold text-sm py-2.5 transition-all duration-200 hover:shadow-lg"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-shopkhana-yellow/10 to-shopkhana-yellow/20 rounded-2xl p-6 sm:p-8 border border-shopkhana-yellow/20">
            <h4 className="font-poppins font-bold text-xl sm:text-2xl text-shopkhana-black mb-3">
              Can't Find What You're Looking For?
            </h4>
            <p className="font-inter text-gray-600 mb-6">
              Explore our full collection of beauty essentials, jewelry, and fashion must-haves
            </p>
            <Button 
              size="lg"
              className="bg-shopkhana-black hover:bg-shopkhana-black/90 text-white font-poppins font-semibold px-8 py-3 text-lg"
            >
              Shop All Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotPicks;
