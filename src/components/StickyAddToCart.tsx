
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

interface StickyAddToCartProps {
  product: Product;
  selectedVariant: string;
  quantity: number;
}

const StickyAddToCart = ({ product, selectedVariant, quantity }: StickyAddToCartProps) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 800; // Show after scrolling 800px
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatPrice = (price: number) => `Rs. ${price.toLocaleString()}`;

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 transition-transform duration-300 lg:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate">{product.name}</p>
          <p className="text-sm text-gray-600">
            {selectedVariant} • Qty: {quantity}
          </p>
          <p className="font-bold text-shopkhana-black">
            {formatPrice(product.price * quantity)}
          </p>
        </div>
      </div>
      
      <div className="flex gap-3">
        <Button
          size="lg"
          disabled={!product.inStock}
          onClick={handleBuyNow}
          className="flex-1 bg-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/90 font-semibold"
        >
          Buy Now
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          disabled={!product.inStock}
          className="flex-1 border-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/10 font-semibold"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default StickyAddToCart;
