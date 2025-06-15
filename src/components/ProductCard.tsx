
import { useState } from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  isNew: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-shopkhana-yellow text-shopkhana-yellow" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-shopkhana-yellow/50 text-shopkhana-yellow" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <Card 
      className="group relative overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            loading="lazy"
          />
          
          {/* Overlay with gradient */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* New Badge */}
          {product.isNew && (
            <Badge className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 bg-shopkhana-yellow text-shopkhana-black font-semibold text-xs px-2 py-1">
              NEW
            </Badge>
          )}

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`absolute top-1.5 sm:top-2 right-1.5 sm:right-2 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <Heart 
              className={`h-3 w-3 sm:h-4 sm:w-4 transition-colors ${
                isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`} 
            />
          </Button>

          {/* Quick Add to Cart - Desktop only */}
          <div 
            className={`hidden sm:block absolute bottom-2 left-2 right-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button 
              size="sm"
              className="w-full bg-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/90 font-semibold shadow-lg text-xs"
            >
              <ShoppingCart className="h-3 w-3 mr-1.5" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-2 sm:p-3 space-y-1.5 sm:space-y-2">
          {/* Category */}
          <p className="text-xs font-inter text-gray-500 uppercase tracking-wide">
            {product.category}
          </p>

          {/* Product Name */}
          <h3 className="font-poppins font-semibold text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product.rating})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <p className="font-poppins font-bold text-base sm:text-lg text-shopkhana-black">
              {formatPrice(product.price)}
            </p>
          </div>

          {/* Mobile Add to Cart Button */}
          <div className="sm:hidden pt-2">
            <Button 
              size="sm"
              className="w-full bg-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/90 font-semibold text-xs py-2"
            >
              <ShoppingCart className="h-3 w-3 mr-1.5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
