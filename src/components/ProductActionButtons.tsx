
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ProductActionButtonsProps {
  inStock: boolean;
  isWishlisted: boolean;
  setIsWishlisted: (wishlisted: boolean) => void;
}

const ProductActionButtons = ({ 
  inStock, 
  isWishlisted, 
  setIsWishlisted 
}: ProductActionButtonsProps) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    // In a real app, you'd add the item to cart first, then navigate to checkout
    navigate('/checkout');
  };

  return (
    <div className="space-y-3">
      <Button
        size="lg"
        disabled={!inStock}
        onClick={handleBuyNow}
        className="w-full bg-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/90 font-semibold text-lg py-3 lg:py-4"
      >
        Buy Now
      </Button>
      
      <Button
        variant="outline"
        size="lg"
        disabled={!inStock}
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
  );
};

export default ProductActionButtons;
