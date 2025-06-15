
import { useState } from "react";
import { Heart, Star, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  inStock: boolean;
  variants: string[];
}

interface ProductInfoProps {
  product: Product;
  selectedVariant: string;
  setSelectedVariant: (variant: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  isWishlisted: boolean;
  setIsWishlisted: (wishlisted: boolean) => void;
}

const ProductInfo = ({
  product,
  selectedVariant,
  setSelectedVariant,
  quantity,
  setQuantity,
  isWishlisted,
  setIsWishlisted,
}: ProductInfoProps) => {
  const navigate = useNavigate();
  const formatPrice = (price: number) => `Rs. ${price.toLocaleString()}`;

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-shopkhana-yellow text-shopkhana-yellow" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="h-4 w-4 fill-shopkhana-yellow/50 text-shopkhana-yellow" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      );
    }

    return stars;
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  const handleBuyNow = () => {
    // In a real app, you'd add the item to cart first, then navigate to checkout
    navigate('/checkout');
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* Product Title */}
      <div>
        <h1 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-2">
          {product.name}
        </h1>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="font-poppins font-bold text-2xl lg:text-3xl text-shopkhana-black">
          {formatPrice(product.price)}
        </span>
        {product.originalPrice && (
          <>
            <span className="text-lg text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
            <Badge className="bg-red-100 text-red-600 hover:bg-red-100">
              {discountPercentage}% OFF
            </Badge>
          </>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {product.description}
      </p>

      {/* Variant Selector */}
      {product.variants.length > 0 && (
        <div>
          <h3 className="font-poppins font-semibold text-lg mb-3">
            Select Variant: <span className="text-shopkhana-black">{selectedVariant}</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 font-medium ${
                  selectedVariant === variant
                    ? "border-shopkhana-yellow bg-shopkhana-yellow text-shopkhana-black"
                    : "border-gray-300 hover:border-shopkhana-yellow"
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <h3 className="font-poppins font-semibold text-lg mb-3">Quantity</h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
              className="h-10 w-10 rounded-r-none"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-4 py-2 font-semibold min-w-[50px] text-center">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={increaseQuantity}
              className="h-10 w-10 rounded-l-none"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stock Status */}
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          size="lg"
          disabled={!product.inStock}
          onClick={handleBuyNow}
          className="w-full bg-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/90 font-semibold text-lg py-3 lg:py-4"
        >
          Buy Now
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          disabled={!product.inStock}
          className="w-full border-2 border-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/10 font-semibold py-3 lg:py-4"
        >
          Add to Cart
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="w-full border-2 border-gray-300 hover:border-shopkhana-yellow hover:bg-shopkhana-yellow/10 py-3 lg:py-4"
        >
          <Heart 
            className={`h-5 w-5 mr-2 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`} 
          />
          {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
