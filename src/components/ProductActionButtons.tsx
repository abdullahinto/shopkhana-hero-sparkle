
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";

interface ProductActionButtonsProps {
  inStock: boolean;
  productId?: string;
  productName?: string;
  productVariant?: string;
  productPrice?: number;
  productImage?: string;
}

const ProductActionButtons = ({ 
  inStock, 
  productId = "1",
  productName = "Product",
  productVariant = "Default",
  productPrice = 999,
  productImage = "/placeholder.svg"
}: ProductActionButtonsProps) => {
  const navigate = useNavigate();
  const { addToCart, loading } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist, loading: wishlistLoading } = useWishlist();

  const isWishlisted = isInWishlist(productId, productVariant);

  const handleBuyNow = async () => {
    await addToCart({
      product_id: productId,
      product_name: productName,
      product_variant: productVariant,
      product_price: productPrice,
      product_image: productImage,
      quantity: 1
    });
    navigate('/checkout');
  };

  const handleAddToCart = async () => {
    await addToCart({
      product_id: productId,
      product_name: productName,
      product_variant: productVariant,
      product_price: productPrice,
      product_image: productImage,
      quantity: 1
    });
  };

  const handleWishlistToggle = async () => {
    if (isWishlisted) {
      await removeFromWishlist(productId, productVariant);
    } else {
      await addToWishlist({
        product_id: productId,
        product_name: productName,
        product_variant: productVariant,
        product_price: productPrice,
        product_image: productImage,
      });
    }
  };

  return (
    <div className="space-y-3">
      <Button
        size="lg"
        disabled={!inStock || loading}
        onClick={handleBuyNow}
        className="w-full bg-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/90 font-semibold text-lg py-3 lg:py-4"
      >
        {loading ? "Adding..." : "Buy Now"}
      </Button>
      
      <Button
        variant="outline"
        size="lg"
        disabled={!inStock || loading}
        onClick={handleAddToCart}
        className="w-full border-2 border-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/10 font-semibold py-3 lg:py-4"
      >
        {loading ? "Adding..." : "Add to Cart"}
      </Button>
      
      <Button
        variant="outline"
        size="lg"
        onClick={handleWishlistToggle}
        disabled={wishlistLoading}
        className="w-full border-2 border-gray-300 hover:border-shopkhana-yellow hover:bg-shopkhana-yellow/10 py-3 lg:py-4"
      >
        <Heart 
          className={`h-5 w-5 mr-2 ${
            isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
          }`} 
        />
        {wishlistLoading ? 'Loading...' : (isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist')}
      </Button>
    </div>
  );
};

export default ProductActionButtons;
